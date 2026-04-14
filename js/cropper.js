// js/cropper.js
// ═══════════════════════════════════════════════════════════
// CROP DE FOTO — Modal reutilizável, tema Heróis da Fé
// Uso: const base64 = await abrirCropModal(file);
// ═══════════════════════════════════════════════════════════

let _cropStyleInjected = false;
const _cropStyleContent = `
#crop-overlay {
    position: fixed; inset: 0; z-index: 99999;
    background: rgba(0,0,0,0.92);
    display: flex; align-items: center; justify-content: center;
    animation: cropFadeIn 0.25s ease;
}
@keyframes cropFadeIn { from { opacity: 0; } to { opacity: 1; } }

#crop-box {
    background: #0e0e0c;
    border: 2px solid #d4af37;
    border-radius: 16px;
    padding: 24px;
    width: 90vw; max-width: 380px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    box-shadow: 0 0 40px rgba(212,175,55,0.25);
}

#crop-title {
    font-family: 'Cinzel', serif;
    color: #d4af37;
    font-size: 1.1rem;
    margin: 0 0 6px 0;
}
#crop-subtitle {
    color: #777;
    font-size: 0.78rem;
    margin: 0 0 16px 0;
}

#crop-canvas-wrap {
    position: relative;
    width: 280px; height: 280px;
    margin: 0 auto 16px;
    overflow: hidden;
    border-radius: 10px;
    border: 1.5px solid #333;
    cursor: grab;
    user-select: none;
    touch-action: none;
    background: #111;
}
#crop-canvas-wrap:active { cursor: grabbing; }

#crop-img {
    position: absolute;
    transform-origin: 0 0;
}

/* Máscara circular */
#crop-canvas-wrap::after {
    content: '';
    position: absolute; inset: 0;
    box-shadow: inset 0 0 0 9999px rgba(0,0,0,0.55);
    border-radius: 10px;
    pointer-events: none;
}
#crop-circle-guide {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 220px; height: 220px;
    border: 2px solid #d4af37;
    border-radius: 50%;
    box-shadow: 0 0 0 9999px rgba(0,0,0,0.5);
    pointer-events: none;
    z-index: 2;
}

#crop-zoom-row {
    display: flex; align-items: center; gap: 10px;
    margin-bottom: 18px; padding: 0 4px;
}
#crop-zoom-row span { color: #555; font-size: 1rem; }
#crop-zoom {
    flex: 1; accent-color: #d4af37;
    height: 4px; cursor: pointer;
}

#crop-actions {
    display: flex; gap: 10px;
}
#crop-cancel {
    flex: 1; padding: 11px;
    background: transparent;
    border: 1.5px solid #444;
    color: #888; border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem; cursor: pointer;
    transition: border-color 0.2s;
}
#crop-cancel:hover { border-color: #d4af37; color: #d4af37; }

#crop-confirm {
    flex: 2; padding: 11px;
    background: #d4af37; color: #000;
    border: none; border-radius: 8px;
    font-family: 'Cinzel', serif;
    font-size: 0.9rem; font-weight: bold;
    cursor: pointer; transition: opacity 0.2s;
}
#crop-confirm:hover { opacity: 0.88; }
`;

function _injectCropStyle() {
    if (_cropStyleInjected) return;
    _cropStyleInjected = true;
    const s = document.createElement("style");
    s.textContent = _cropStyleContent;
    document.head.appendChild(s);
}

// ── FUNÇÃO PRINCIPAL ────────────────────────────────────────
export function abrirCropModal(file) {
    _injectCropStyle();
    return new Promise((resolve, reject) => {
        const tipos = ['image/jpeg', 'image/png', 'image/webp'];
        if (!tipos.includes(file.type)) { alert('❌ Use JPG, PNG ou WebP'); return reject(); }
        if (file.size > 8 * 1024 * 1024) { alert('❌ Imagem muito grande (máx 8MB)'); return reject(); }

        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => buildModal(img, resolve, reject);
            img.onerror = reject;
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });
}

function buildModal(img, resolve, reject) {
    // Remove modal anterior se existir
    document.getElementById('crop-overlay')?.remove();

    const WRAP = 280;   // px do container
    const CIRCLE = 220; // px do círculo de corte

    let scale = CIRCLE / Math.min(img.width, img.height);
    let minScale = scale;
    let maxScale = scale * 4;

    let ox = (WRAP - img.width * scale) / 2;
    let oy = (WRAP - img.height * scale) / 2;

    const overlay = document.createElement('div');
    overlay.id = 'crop-overlay';
    overlay.innerHTML = `
        <div id="crop-box">
            <p id="crop-title">✂️ Ajustar Foto</p>
            <p id="crop-subtitle">Arraste para reposicionar · Zoom para aproximar</p>
            <div id="crop-canvas-wrap">
                <img id="crop-img" draggable="false">
                <div id="crop-circle-guide"></div>
            </div>
            <div id="crop-zoom-row">
                <span>🔍</span>
                <input type="range" id="crop-zoom" min="0" max="100" value="0">
                <span>＋</span>
            </div>
            <div id="crop-actions">
                <button id="crop-cancel">Cancelar</button>
                <button id="crop-confirm">✅ Usar esta foto</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    const imgEl   = document.getElementById('crop-img');
    const wrap    = document.getElementById('crop-canvas-wrap');
    const zoomEl  = document.getElementById('crop-zoom');

    imgEl.src = img.src;

    function applyTransform() {
        imgEl.style.width  = img.width  * scale + 'px';
        imgEl.style.height = img.height * scale + 'px';
        imgEl.style.left   = ox + 'px';
        imgEl.style.top    = oy + 'px';
    }
    applyTransform();

    // ── ZOOM via slider ──────────────────────────────────────
    zoomEl.addEventListener('input', () => {
        const t = zoomEl.value / 100;
        const newScale = minScale + (maxScale - minScale) * t;
        const cx = WRAP / 2, cy = WRAP / 2;
        ox = cx - (cx - ox) * (newScale / scale);
        oy = cy - (cy - oy) * (newScale / scale);
        scale = newScale;
        clamp();
        applyTransform();
    });

    // ── DRAG (mouse + touch) ─────────────────────────────────
    let dragging = false, lastX = 0, lastY = 0;

    function startDrag(x, y) { dragging = true; lastX = x; lastY = y; }
    function moveDrag(x, y) {
        if (!dragging) return;
        ox += x - lastX; oy += y - lastY;
        lastX = x; lastY = y;
        clamp(); applyTransform();
    }
    function endDrag() { dragging = false; }

    wrap.addEventListener('mousedown',  e => { e.preventDefault(); startDrag(e.clientX, e.clientY); });
    window.addEventListener('mousemove', e => moveDrag(e.clientX, e.clientY));
    window.addEventListener('mouseup',   endDrag);

    wrap.addEventListener('touchstart',  e => { e.preventDefault(); startDrag(e.touches[0].clientX, e.touches[0].clientY); }, { passive: false });
    wrap.addEventListener('touchmove',   e => { e.preventDefault(); moveDrag(e.touches[0].clientX, e.touches[0].clientY); }, { passive: false });
    wrap.addEventListener('touchend',    endDrag);

    // Zoom via scroll do mouse
    wrap.addEventListener('wheel', e => {
        e.preventDefault();
        const delta = e.deltaY < 0 ? 0.08 : -0.08;
        const newScale = Math.min(maxScale, Math.max(minScale, scale * (1 + delta)));
        const cx = WRAP / 2, cy = WRAP / 2;
        ox = cx - (cx - ox) * (newScale / scale);
        oy = cy - (cy - oy) * (newScale / scale);
        scale = newScale;
        // Atualiza slider
        zoomEl.value = ((scale - minScale) / (maxScale - minScale)) * 100;
        clamp(); applyTransform();
    }, { passive: false });

    // ── CLAMP — impede imagem de sair do círculo ─────────────
    function clamp() {
        const circleLeft = (WRAP - CIRCLE) / 2;
        const circleTop  = (WRAP - CIRCLE) / 2;
        const iw = img.width * scale;
        const ih = img.height * scale;
        // Borda direita/baixo
        if (ox + iw < circleLeft + CIRCLE) ox = circleLeft + CIRCLE - iw;
        if (oy + ih < circleTop  + CIRCLE) oy = circleTop  + CIRCLE - ih;
        // Borda esquerda/cima
        if (ox > circleLeft) ox = circleLeft;
        if (oy > circleTop)  oy = circleTop;
    }

    // ── CANCELAR ─────────────────────────────────────────────
    document.getElementById('crop-cancel').onclick = () => {
        overlay.remove();
        reject();
    };

    // ── CONFIRMAR — exporta círculo como base64 ───────────────
    document.getElementById('crop-confirm').onclick = () => {
        const SIZE = 120; // tamanho final do avatar
        const canvas = document.createElement('canvas');
        canvas.width = SIZE; canvas.height = SIZE;
        const ctx = canvas.getContext('2d');

        // Recorta a região do círculo
        const circleLeft = (WRAP - CIRCLE) / 2;
        const circleTop  = (WRAP - CIRCLE) / 2;
        const srcX = (circleLeft - ox) / scale;
        const srcY = (circleTop  - oy) / scale;
        const srcW = CIRCLE / scale;
        const srcH = CIRCLE / scale;

        // Máscara circular
        ctx.beginPath();
        ctx.arc(SIZE / 2, SIZE / 2, SIZE / 2, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(img, srcX, srcY, srcW, srcH, 0, 0, SIZE, SIZE);

        const base64 = canvas.toDataURL('image/jpeg', 0.50);
        overlay.remove();
        resolve(base64);
    };
}