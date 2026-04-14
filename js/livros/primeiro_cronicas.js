// js/livros/primeiro_cronicas.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const primeiro_cronicas = {
    nome: "1 Crônicas",
    icone: "📜", 
    autor: "Esdras (tradição)",
   // background: "./imagens/primeiro_cronicas_bg.jpg", 

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "Das Genealogias: De Adão a Abraão",
            texto: ` ¹ Adão, Sete, Enos,
² Cainã, Maalaleel, Jerede,
³ Enoque, Matusalém, Lameque,
⁴ Noé, Sem, Cão e Jafé.
⁵ Os filhos de Jafé foram: Gômer, Magogue, Madai, Javã, Tubal, Meseque e Tiras.
⁶ E os filhos de Gomer: Asquenaz, Rifate, Togarma.
⁷ E os filhos de Javã: Elisá, Társis, Quitim e Dodanim.
⁸ Os filhos de Cão: Cuxe, Mizraim, Pute e Canaã.
⁹ E os filhos de Cuxe eram: Sebá, Havilá, Sabtá, Raamá e Sabtecá; os filhos de Raamá: Sebá e Dedã.
¹⁰ E Cuxe gerou a Ninrode, que começou a ser poderoso na terra.
¹¹ E Mizraim gerou a Ludim e a Anamim e a Leabim e a Naftuim,
¹² E a Patrusim e a Casluim (dos quais procedem os filisteus) e a Caftorim.
¹³ E Canaã gerou a Sidom seu primogênito, e a Hete,
¹⁴ E aos jebuseus e aos amorreus e aos girgaseus,
¹⁵ E aos heveus e aos arqueus e aos sineus,
¹⁶ E aos arvadeus e aos zemareus e aos hamateus.
¹⁷ E foram os filhos de Sem: Elão, Assur, Arfaxade, Lude, Arã, Uz, Hul, Geter e Meseque.
¹⁸ E Arfaxade gerou a Selá e Selá gerou a Éber.
¹⁹ E a Éber nasceram dois filhos: o nome de um foi Pelegue, porquanto nos seus dias se repartiu a terra, e o nome de seu irmão era Joctã.
²⁰ E Joctã gerou a Almodá, a Selefe, a Hazarmavé, e a Jerá,
²¹ E a Hadorão, a Usal, e a Dicla,
²² E a Obal, a Abimael, a Sebá,
²³ E a Ofir, a Havilá, e a Jobabe: todos estes foram filhos de Joctã.
²⁴ Sem, Arfaxade, Selá,
²⁵ Éber, Pelegue, Reú,
²⁶ Serugue, Naor, Terá,
²⁷ Abrão, que é Abraão.
²⁸ Os filhos de Abraão foram: Isaque e Ismael.
²⁹ Estas são as suas gerações: o primogênito de Ismael foi Nebaiote, e, depois, Quedar, Adbeel, Mibsão,
³⁰ Misma, Dumá, Massá, Hadade, Tema,
³¹ Jetur, Nafis e Quedemá; estes foram os filhos de Ismael.
³² Quanto aos filhos de Quetura, concubina de Abraão, esta deu à luz a Zinrã, a Jocsã, a Medã, a Midiã, a Jisbaque e a Suá; e os filhos de Jocsã foram Seba e Dedã.
³³ E os filhos de Midiã: Efá, Efer, Enoque, Abida e Elda; todos estes foram filhos de Quetura.
³⁴ Abraão, pois, gerou a Isaque; e foram os filhos de Isaque: Esaú e Israel.
³⁵ Os filhos de Esaú: Elifaz, Reuel, Jeús, Jalão e Coré.
³⁶ Os filhos de Elifaz: Temã, Omar, Zefi, Gaetã, Quenaz, Timna e Amaleque.
³⁷ Os filhos de Reuel: Naate, Zerá, Samá e Mizá.
³⁸ E os filhos de Seir: Lotã, Sobal, Zibeão, Aná, Disom, Eser e Disã.
³⁹ E os filhos de Lotã: Hori e Homã; e a irmã de Lotã foi Timna.
⁴⁰ Os filhos de Sobal eram Alvã, Manaate, Ebal, Sefi e Onã; e os filhos de Zibeão eram Aiá e Aná.
⁴¹ O filho de Aná foi Disom; e os filhos de Disom foram Hanrão, Esbã, Itrã e Querã.
⁴² Os filhos de Eser eram: Bilã, Zaavã e Jaacã; os filhos de Disã eram: Uz e Arã.
⁴³ E estes são os reis que reinaram na terra de Edom, antes que reinasse rei sobre os filhos de Israel: Bela, filho de Beor, e era o nome da sua cidade Dinabá.
⁴⁴ E morreu Bela, e reinou em seu lugar Jobabe, filho de Zerá, de Bozra.
⁴⁵ E morreu Jobabe, e reinou em seu lugar Husão, da terra dos temanitas.
⁴⁶ E morreu Husão, e reinou em seu lugar Hadade, filho de Bedade; este feriu os midianitas no campo de Moabe; e era o nome da sua cidade Avite.
⁴⁷ E morreu Hadade, e reinou em seu lugar Samlá, de Masreca.
⁴⁸ E morreu Samlá, e reinou em seu lugar Saul, de Reobote, junto ao rio.
⁴⁹ E morreu Saul, e reinou em seu lugar Baal-Hanã, filho de Acbo.
⁵⁰ E, morrendo Baal-Hanã, Hadade reinou em seu lugar; e era o nome da sua cidade Paí; e o nome de sua mulher era Meetabel, filha de Matrede, filha de Me-Zaabe.
⁵¹ E, morrendo Hadade, foram príncipes em Edom o príncipe Timna, o príncipe Alva, o príncipe Jetete,
⁵² O príncipe Oolibama, o príncipe Elá, o príncipe Pinom,
⁵³ O príncipe Quenaz, o príncipe Temã, o príncipe Mibzar,
⁵⁴ O príncipe Magdiel, o príncipe Irã, estes foram os príncipes de Edom.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem é a primeira pessoa mencionada na genealogia de 1 Crônicas?",
                        opcoes: [
                            { numero: 1, texto: "Abraão", correta: false },
                            { numero: 2, texto: "Noé", correta: false },
                            { numero: 3, texto: "Adão", correta: true },
                            { numero: 4, texto: "Sete", correta: false }
                        ],
                        explicacao: "1 Crônicas 1:1 - Adão, Sete, Enos,",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quais foram os três filhos de Noé listados na genealogia?",
                        opcoes: [
                            { numero: 1, texto: "Sem, Cão e Jafé", correta: true },
                            { numero: 2, texto: "Caim, Abel e Sete", correta: false },
                            { numero: 3, texto: "Abraão, Isaque e Jacó", correta: false },
                            { numero: 4, texto: "Rúben, Simeão e Levi", correta: false }
                        ],
                        explicacao: "1 Crônicas 1:4 - Noé, Sem, Cão e Jafé.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "A Linhagem de Judá",
            texto: ` ¹ Estes são os filhos de Israel: Rúben, Simeão, Levi, Judá, Issacar e Zebulom;
² Dã, José e Benjamim, Naftali, Gade e Aser.
³ Os filhos de Judá foram Er, e Onã, e Selá, estes três lhe nasceram da filha de Suá, a cananeia; e Er, o primogênito de Judá, foi mau aos olhos do Senhor, pelo que o matou.
⁴ Porém Tamar, sua nora, lhe deu à luz Perez e Zerá; todos os filhos de Judá foram cinco.
⁵ Os filhos de Perez foram Hezrom e Hamul.
⁶ E os filhos de Zerá: Zinri, e Etã, e Hemã, e Calcol, e Dara: cinco ao todo.
⁷ E os filhos de Carmi foram Acar, o perturbador de Israel, que pecou no anátema.
⁸ E o filho de Etã foi Azarias.
⁹ E os filhos de Hezrom, que lhe nasceram, foram Jerameel, e Rão, e Quelubai.
¹⁰ E Rão gerou a Aminadabe, e Aminadabe gerou a Naassom, príncipe dos filhos de Judá.
¹¹ E Naassom gerou a Salma, e Salma gerou a Boaz.
¹² E Boaz gerou a Obede, e Obede gerou a Jessé.
¹³ E Jessé gerou a Eliabe, seu primogênito, e Abinadabe, o segundo, e Simeia, o terceiro.
¹⁴ Natanael, o quarto, Radai, o quinto.
¹⁵ Ozém, o sexto, Davi, o sétimo.
¹⁶ E foram suas irmãs Zeruia e Abigail; e foram os filhos de Zeruia: Abisai e Joabe, e Asael, três.
¹⁷ E Abigail deu à luz a Amasa; e o pai de Amasa foi Jeter, o ismaelita.
¹⁸ E Calebe, filho de Hezrom, gerou filhos de Azuba, sua mulher, e de Jeriote; e os filhos desta foram estes: Jeser, Sobabe, e Ardom.
¹⁹ E morreu Azuba; e Calebe tomou para si a Efrate, da qual lhe nasceu Hur.
²⁰ E Hur gerou a Uri, e Uri gerou a Bezaleel.
²¹ Então Hezrom coabitou com a filha de Maquir, pai de Gileade, e, sendo ele de sessenta anos, a tomou; e ela deu à luz a Segube.
²² E Segube gerou a Jair; e este tinha vinte e três cidades na terra de Gileade.
²³ E Gesur e Arã tomaram deles as aldeias de Jair, e Quenate, e seus lugares, sessenta cidades; todos estes foram filhos de Maquir, pai de Gileade.
²⁴ E, depois da morte de Hezrom, em Calebe de Efrata, Abia, mulher de Hezrom, deu à luz a Asur, pai de Tecoa.
²⁵ E os filhos de Jerameel, primogênito de Hezrom, foram Rão, o primogênito, Buna, Orem, Ozém e Aías.
²⁶ Teve também Jerameel ainda outra mulher cujo nome era Atara; esta foi a mãe de Onã.
²⁷ E foram os filhos de Rão, primogênito de Jerameel: Maaz, Jamim, e Equer.
²⁸ E foram os filhos de Onã: Samai e Jada; e os filhos de Samai: Nadabe e Abisur.
²⁹ E o nome da mulher de Abisur era Abiail, que lhe deu à luz Abã e Molide.
³⁰ E foram os filhos de Nadabe, Selede e Apaim; e Selede morreu sem filhos.
³¹ E o filho de Apaim foi Isi; e o filho de Isi, Sesã. E o filho de Sesã, Alai.
³² E os filhos de Jada, irmão de Samai, foram Jeter e Jônatas; e Jeter morreu sem filhos.
³³ E os filhos de Jônatas foram: Pelete e Zaza; estes foram os filhos de Jerameel.
³⁴ E Sesã não teve filhos, mas filhas; e tinha Sesã um servo egípcio, cujo nome era Jará.
³⁵ Deu, pois, Sesã sua filha por mulher a Jará, seu servo; e lhe deu à luz a Atai.
³⁶ E Atai gerou a Natã, e Natã gerou a Zabade.
³⁷ E Zabade gerou a Eflal, e Eflal gerou a Obede.
³⁸ E Obede gerou a Jeú, e Jeú gerou a Azarias.
³⁹ E Azarias gerou a Helez, e Helez gerou a Eleasá.
⁴⁰ E Eleasá gerou a Sismai, e Sismai gerou a Salum.
⁴¹ E Salum gerou a Jecamias, e Jecamias gerou a Elisama.
⁴² E foram os filhos de Calebe, irmão de Jerameel, Messa, seu primogênito (este foi o pai de Zife), e os filhos de Maressa, pai de Hebrom.
⁴³ E foram os filhos de Hebrom: Coré, Tápua, Requém e Sema.
⁴⁴ E Sema gerou a Raão, pai de Jorqueão; e Requém gerou a Samai.
⁴⁵ E foi o filho de Samai, Maom; e Maom foi pai de Bete-Zur.
⁴⁶ E Efá, a concubina de Calebe, deu à luz a Harã, a Mosa, e a Gazez; e Harã gerou a Gazez.
⁴⁷ E foram filhos de Jadai: Regém, Jotão, Gesã, Pelete, Efá e Saafe.
⁴⁸ De Maaca, concubina, Calebe gerou a Seber e a Tiraná.
⁴⁹ E a mulher de Saafe, pai de Madmana, deu à luz a Seva, pai de Macbena e pai de Gibeá; e foi a filha de Calebe, Acsa.
⁵⁰ Estes foram os filhos de Calebe, filho de Hur, o primogênito de Efrata: Sobal, pai de Quiriate-Jearim,
⁵¹ E Salma, pai dos belemitas, Harefe, pai de Bete-Gader.
⁵² E foram os filhos de Sobal, pai de Quiriate-Jearim: Haroé e metade dos menuítas.
⁵³ E as famílias de Quiriate-Jearim foram os jitreus, e os puteus, e os sumateus, e os misraeus; destes saíram os zorateus, e os estaoleus.
⁵⁴ Os filhos de Salma foram Belém e os netofatitas, Atarote, Bete-Joabe, e metade dos manaatitas, e os zoritas.
⁵⁵ E as famílias dos escribas que habitavam em Jabez foram os tiratitas, os simeatitas e os sucatitas; estes são os queneus, que vieram de Hamate, pai da casa de Recabe.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem foi o pai de Jessé, que por sua vez foi o pai de Davi?",
                        opcoes: [
                            { numero: 1, texto: "Boaz", correta: false },
                            { numero: 2, texto: "Obede", correta: true },
                            { numero: 3, texto: "Salmom", correta: false },
                            { numero: 4, texto: "Naassom", correta: false }
                        ],
                        explicacao: "1 Crônicas 2:12 - E Obede gerou a Jessé.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual dos filhos de Judá foi morto pelo Senhor por ser mau aos Seus olhos?",
                        opcoes: [
                            { numero: 1, texto: "Er", correta: true },
                            { numero: 2, texto: "Onã", correta: false },
                            { numero: 3, texto: "Selá", correta: false },
                            { numero: 4, texto: "Perez", correta: false }
                        ],
                        explicacao: "1 Crônicas 2:3 - ...E Er, o primogênito de Judá, foi mau aos olhos do Senhor, pelo que o matou.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "A Descendência de Davi",
            texto: `¹ E estes foram os filhos de Davi, que lhe nasceram em Hebrom: o primogênito, Amnom, de Ainoã, a jizreelita; o segundo Daniel, de Abigail, a carmelita;
² O terceiro, Absalão, filho de Maaca, filha de Talmai, rei de Gesur; o quarto, Adonias, filho de Hagite;
³ O quinto, Sefatias, de Abital; o sexto, Itreão, de Eglá, sua mulher.
⁴ Seis filhos lhe nasceram em Hebrom, porque ali reinou sete anos e seis meses; e trinta e três anos reinou em Jerusalém.
⁵ E estes lhe nasceram em Jerusalém: Simeia, e Sobabe, e Natã, e Salomão; estes quatro lhe nasceram de Bate-Sua, filha de Amiel.
⁶ Nasceram-lhe mais Ibar, Elisama, Elifelete,
⁷ Nogá, Nefegue, Jafia,
⁸ Elisama, Eliada, e Elifelete, nove.
⁹ Todos estes foram filhos de Davi, afora os filhos das concubinas e Tamar, irmã deles.
¹⁰ E o filho de Salomão foi Roboão; de quem foi filho Abias; de quem foi filho Asa; de quem foi filho Jeosafá;
¹¹ De quem foi filho Jorão; de quem foi filho Acazias; de quem foi filho Joás;
¹² De quem foi filho Amazias; de quem foi filho Azarias; de quem foi filho Jotão;
¹³ De quem foi filho Acaz; de quem foi filho Ezequias; de quem foi filho Manassés;
¹⁴ De quem foi filho Amom; de quem foi filho Josias.
¹⁵ E os filhos de Josias foram: o primogênito, Joanã: o segundo, Jeoiaquim; o terceiro, Zedequias; o quarto, Salum.
¹⁶ E os filhos de Jeoiaquim: Jeconias, seu filho, e Zedequias, seu filho.
¹⁷ E os filhos de Jeconias: Assir, e seu filho Sealtiel.
¹⁸ Os filhos deste foram: Malquirão, Pedaías, Senazar, Jecamias, Hosama, e Nedabias.
¹⁹ E os filhos de Pedaías: Zorobabel e Simei; e os filhos de Zorobabel: Mesulão, Hananias, e Selomite, sua irmã,
²⁰ E Hasubá, Oel, Berequias, Hasadias, Jusabe-Hesede, cinco.
²¹ E os filhos de Hananias: Pelatias e Jesaías; os filhos de Refaías, os filhos de Arnã, os filhos de Obadias, e os filhos de Secanias.
²² E o filho de Secanias foi Semaías; e os filhos de Semaías: Hatus, e Igeal, e Bariá, e Nearias, e Safate, seis.
²³ E os filhos de Nearias: Elioenai, e Ezequias, e Azricão, três.
²⁴ E os filhos de Elioenai; Hodavias, Eliasibe, Pelaías, Acube, Joanã, Delaías, e Anani, sete.`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quantos anos Davi reinou em Hebrom antes de reinar em Jerusalém?",
                        opcoes: [
                            { numero: 1, texto: "Sete anos e seis meses", correta: true },
                            { numero: 2, texto: "Quarenta anos", correta: false },
                            { numero: 3, texto: "Dois anos", correta: false },
                            { numero: 4, texto: "Dez anos", correta: false }
                        ],
                        explicacao: "1 Crônicas 3:4 - Seis filhos lhe nasceram em Hebrom; porque ali reinou sete anos e seis meses...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem foi o sucessor imediato de Salomão no trono de Judá?",
                        opcoes: [
                            { numero: 1, texto: "Asa", correta: false },
                            { numero: 2, texto: "Josafá", correta: false },
                            { numero: 3, texto: "Roboão", correta: true },
                            { numero: 4, texto: "Abias", correta: false }
                        ],
                        explicacao: "1 Crônicas 3:10 - E o filho de Salomão foi Roboão...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "A Oração de Jabez",
            texto: ` ¹ Os filhos de Judá foram: Perez, Hezrom, Carmi, Hur, e Sobal.
² E Reaías, filho de Sobal gerou a Jaate, e Jaate gerou a Aumai e a Laade; estas são as famílias dos zoratitas.
³ E estes foram os filhos do pai de Etã: Jizreel, Isma e Idbas; e era o nome de sua irmã Hazelelponi.
⁴ E mais Penuel, pai de Gedor, e Ezer, pai de Husá; estes foram os filhos de Hur, o primogênito de Efrata, pai de Belém.
⁵ E tinha Asur, pai de Tecoa, duas mulheres: Helá e Naará.
⁶ E Naará deu à luz a Auzão, e a Hefer, e a Temeni, e a Haastari; estes foram os filhos de Naará.
⁷ E os filhos de Helá: Zerete, Izar e Etnã.
⁸ E Coz gerou a Anube e a Zobeba e as famílias de Aarel, filho de Harum.
⁹ E foi Jabez mais ilustre do que seus irmãos; e sua mãe chamou o seu nome de Jabez, dizendo: Porquanto com dores o dei à luz.
¹⁰ Porque Jabez invocou o Deus de Israel, dizendo: Se me abençoares muitíssimo, e meus termos ampliares, e a tua mão for comigo, e fizeres que do mal não seja afligido! E Deus lhe concedeu o que lhe tinha pedido.
¹¹ E Quelube, irmão de Suá, gerou a Meir; este é o pai de Estom.
¹² E Estom gerou a Bete-Rafa, a Pasea, e a Teina, pai de Ir-Naás; estes foram os homens de Reca.
¹³ E foram os filhos de Quenaz: Otniel e Seraías; o filho de Otniel: Hatate.
¹⁴ E Meonotai gerou a Ofra, e Seraías gerou a Joabe, pai dos do vale dos artífices; porque os dali eram artífices.
¹⁵ E foram os filhos de Calebe, filho de Jefoné: Iru, Elá e Naã; e o filho de Elá: Quenaz.
¹⁶ E os filhos de Jealelel: Zife, Zifa, Tiria e Asareel.
¹⁷ E os filhos de Ezra: Jeter, Merede, Efer, e Jalom; e teve mais a Miriã, e Samai, e Isbá, pai de Estemoa.
¹⁸ E sua mulher, Judia, deu à luz a Jerede, pai de Gedor, e a Héber, pai de Socó, e a Jecutiel, pai de Zanoa; e estes foram os filhos de Bitia, filha de Faraó, que Merede tomou.
¹⁹ E foram os filhos da mulher de Hodias, irmã de Naã: Abiqueila, o garmita, Estemoa, o maacatita.
²⁰ E os filhos de Simeão: Amom, Rina, Bene-Hanã, e Tilom; e os filhos de Isi: Zoete e Bene-Zoete.
²¹ Os filhos de Selá, filho de Judá: Er, pai de Leca, e Lada, pai de Maressa, e as famílias da casa dos que fabricavam linho fino, em casa de Asbeia.
²² Como também Joquim, e os homens de Cozeba, e Joás, e Sarafe (que dominaram sobre os moabitas), e Jasubi-Leém; porém estas coisas já são antigas.
²³ Estes foram oleiros, e habitavam nas hortas e nos cerrados; estes ficaram ali com o rei na sua obra.
²⁴ Os filhos de Simeão foram Nemuel, Jamim, Jaribe, Zerá, e Saul,
²⁵ Cujo filho foi Salum, de quem foi filho Mibsão, de quem foi filho Misma.
²⁶ E os filhos de Misma foram: Hamuel, seu filho, de quem foi filho Zacur, de quem foi filho Simei.
²⁷ E Simei teve dezesseis filhos, e seis filhas, porém seus irmãos não tiveram muitos filhos; e toda a sua família não se multiplicou tanto como as dos filhos de Judá.
²⁸ E habitaram em Berseba, e em Moladá, e em Hazar-Sual,
²⁹ E em Bila, e em Ezém, e em Tolade,
³⁰ E em Betuel, e em Hormá, e em Ziclague,
³¹ E em Bete-Marcabote, e em Hazar-Susim, e em Bete-Biri, e em Saaraim; estas foram as suas cidades, até que Davi reinou.
³² E foram as suas aldeias: Etã, Aim, Rimom, Toquém, e Asã, cinco cidades,
³³ E todas as suas aldeias, que estavam em redor destas cidades, até Baal. Estas foram as suas habitações e suas genealogias.
³⁴ Porém Mesobabe, e Janleque e Josa, filho de Amazias,
³⁵ E Joel, e Jeú, filho de Josibias, filho de Seraías, filho de Asiel,
³⁶ E Elioenai e Jaacobá, Jesoaías, Asaías, Adiel, Jesimiel, Benaia,
³⁷ E Ziza, filho de Sifi, filho de Alom, filho de Jedaías, filho de Sinri, filho de Semaías;
³⁸ Estes, registrados por seus nomes, foram príncipes nas suas famílias; e as famílias de seus pais se multiplicaram abundantemente.
³⁹ E chegaram até à entrada de Gedor, ao oriente do vale, a buscar pasto para os seus rebanhos.
⁴⁰ E acharam pasto fértil e bom, e a terra espaçosa, e quieta, e descansada; porque os de Cão haviam habitado ali antes.
⁴¹ Estes, pois, que estão descritos por seus nomes, vieram nos dias de Ezequias, rei de Judá, e derrubaram as tendas e habitações dos que se acharam ali, e as destruíram totalmente até o dia de hoje, e habitaram em seu lugar; porque ali havia pasto para os seus rebanhos.
⁴² Também deles, dos filhos de Simeão, quinhentos homens foram às montanhas de Seir; levaram por cabeças a Pelatias, e a Nearias, e a Refaías, e a Uziel, filhos de Isi.
⁴³ E feriram o restante dos que escaparam dos amalequitas, e habitaram ali até o dia de hoje.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Jabez pediu a Deus em sua famosa oração?",
                        opcoes: [
                            { numero: 1, texto: "Que Deus o abençoasse e ampliasse seus termos", correta: true },
                            { numero: 2, texto: "Que fosse o mais rico de Israel", correta: false },
                            { numero: 3, texto: "Pela morte de seus inimigos", correta: false },
                            { numero: 4, texto: "Para ser um grande guerreiro", correta: false }
                        ],
                        explicacao: "1 Crônicas 4:10 - Porque Jabez invocou o Deus de Israel, dizendo: Se me abençoares muitíssimo, e meus termos ampliares...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Por que a mãe de Jabez lhe deu esse nome?",
                        opcoes: [
                            { numero: 1, texto: "Porque ele era belo", correta: false },
                            { numero: 2, texto: "Porque nasceu com muita alegria", correta: false },
                            { numero: 3, texto: "Porque com dores o deu à luz", correta: true },
                            { numero: 4, texto: "Em homenagem a um antepassado", correta: false }
                        ],
                        explicacao: "1 Crônicas 4:9 - ...e sua mãe chamou o seu nome Jabez, dizendo: Porquanto com dores o dei à luz.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "Rúben, Gade e Manassés",
            texto: `¹ Quanto aos filhos de Rúben, o primogênito de Israel (pois ele era o primogênito; mas porque profanara a cama de seu pai, deu-se a sua primogenitura aos filhos de José, filho de Israel; de modo que não foi contado, na genealogia da primogenitura,
² Porque Judá foi poderoso entre seus irmãos, e dele veio o soberano; porém a primogenitura foi de José).
³ Foram, pois, os filhos de Rúben, o primogênito de Israel: Enoque, Palu, Hezrom, e Carmi.
⁴ Os filhos de Joel: Semaías, seu filho; Gogue, seu filho; Simei, seu filho;
⁵ Mica, seu filho; Reaías, seu filho; Baal, seu filho;
⁶ Beera, seu filho, o qual Tiglate-Pilneser, rei da Assíria, levou preso; este foi príncipe dos rubenitas.
⁷ Quanto a seus irmãos pelas suas famílias, quando foram postos nas genealogias, segundo as suas descendências, tiveram por chefes Jeiel e Zacarias,
⁸ E Bela, filho de Azaz, filho de Sema, filho de Joel, que habitou em Aroer, até Nebo e Baal-Meom,
⁹ Também habitou do lado do oriente, até à entrada do deserto, desde o rio Eufrates; porque seu gado se tinha multiplicado na terra de Gileade.
¹⁰ E nos dias de Saul fizeram guerra aos hagarenos, que caíram pela sua mão; e eles habitaram nas suas tendas defronte de todo o lado oriental de Gileade.
¹¹ E os filhos de Gade habitaram defronte deles, na terra de Basã, até Salcá.
¹² Joel foi chefe, e Safã o segundo; também Janai e Safate estavam em Basã.
¹³ E seus irmãos, segundo as suas casas paternas, foram: Micael, Mesulão, Seba, Jorai, Jacã, Zia, e Éber, sete.
¹⁴ Estes foram os filhos de Abiail filho de Huri, filho de Jaroa, filho de Gileade, filho de Micael, filho de Jesisai, filho de Jado, filho de Buz;
¹⁵ Aí, filho de Abdiel, filho de Guni, foi chefe da casa de seus pais.
¹⁶ E habitaram em Gileade, em Basã e nos lugares da sua jurisdição; como também em todos os arrabaldes de Sarom, até aos seus termos.
¹⁷ Todos estes foram registrados, segundo as suas genealogias, nos dias de Jotão, rei de Judá, e nos dias de Jeroboão, rei de Israel.
¹⁸ Dos filhos de Rúben, e dos gaditas, e da meia tribo de Manassés, homens muito valentes, que traziam escudo e espada, e entesavam o arco, e eram destros na guerra; houve quarenta e quatro mil e setecentos e sessenta, que saíam à peleja.
¹⁹ E fizeram guerra aos hagarenos, como a Jetur, e a Nafis e a Nodabe.
²⁰ E foram ajudados contra eles, e os hagarenos e todos quantos estavam com eles foram entregues em sua mão; porque, na peleja, clamaram a Deus que lhes deu ouvidos, porquanto confiaram nele.
²¹ E levaram preso o seu gado; seus camelos, cinquenta mil, e duzentas e cinquenta mil ovelhas, e dois mil jumentos, e cem mil homens.
²² Porque muitos caíram feridos, porque de Deus era a peleja; e habitaram em seu lugar, até ao cativeiro.
²³ E os filhos da meia tribo de Manassés habitaram naquela terra; multiplicaram-se desde Basã até Baal-Hermom, e Senir, e o monte de Hermom.
²⁴ E estes foram cabeças de suas casas paternas, a saber: Hefer, Isi, Eliel, Azriel, Jeremias, Hodavias, e Jadiel, homens valentes, homens de nome, e chefes das casas de seus pais.
²⁵ Porém transgrediram contra o Deus de seus pais; e se prostituíram, seguindo os deuses dos povos da terra, os quais Deus destruíra de diante deles.
²⁶ Por isso o Deus de Israel suscitou o espírito de Pul, rei da Assíria, e o espírito de Tiglate-Pilneser, rei da Assíria, que os levaram presos, a saber: os rubenitas e gaditas, e a meia tribo de Manassés; e os trouxeram a Hala, e a Habor, e a Hara, e ao rio de Gozã, até ao dia de hoje.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Por que Rúben, sendo o primogênito de Israel, perdeu o seu direito de primogenitura?",
                        opcoes: [
                            { numero: 1, texto: "Porque vendeu seu direito por um prato de lentilhas", correta: false },
                            { numero: 2, texto: "Porque profanou o leito de seu pai", correta: true },
                            { numero: 3, texto: "Porque fugiu da batalha", correta: false },
                            { numero: 4, texto: "Porque não quis ter filhos", correta: false }
                        ],
                        explicacao: "1 Crônicas 5:1 - ...ele era o primogênito; mas, porque profanara o leito de seu pai, deu-se a sua primogenitura aos filhos de José...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "A quem foi dada a primogenitura de Israel após Rúben a ter perdido?",
                        opcoes: [
                            { numero: 1, texto: "A Judá", correta: false },
                            { numero: 2, texto: "A Levi", correta: false },
                            { numero: 3, texto: "Aos filhos de José", correta: true },
                            { numero: 4, texto: "A Benjamin", correta: false }
                        ],
                        explicacao: "1 Crônicas 5:1 - ...deu-se a sua primogenitura aos filhos de José, filho de Israel...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        6: {
            titulo: "A Linhagem de Levi e os Cantores",
            texto: `¹ Os filhos de Levi foram: Gérson, Coate e Merari,
² E os filhos de Coate: Anrão, e Izar, e Hebrom, e Uziel.
³ E os filhos de Anrão: Arão, Moisés, e Miriã; e os filhos de Arão: Nadabe, Abiú, Eleazar, e Itamar.
⁴ E Eleazar gerou a Fineias, e Fineias gerou a Abisua,
⁵ E Abisua gerou a Buqui, e Buqui gerou a Uzi,
⁶ E Uzi gerou a Zeraías, e Zeraías gerou a Meraiote.
⁷ E Meraiote gerou a Amarias, e Amarias gerou a Aitube.
⁸ E Aitube gerou a Zadoque, e Zadoque gerou a Aimaás,
⁹ E Aimaás gerou a Azarias, e Azarias gerou a Joanã,
¹⁰ E Joanã gerou a Azarias; e este é o que exerceu o sacerdócio na casa que Salomão tinha edificado em Jerusalém.
¹¹ E Azarias gerou a Amarias, e Amarias gerou a Aitube,
¹² E Aitube gerou a Zadoque, e Zadoque gerou a Salum,
¹³ E Salum gerou a Hilquias, e Hilquias gerou a Azarias,
¹⁴ E Azarias gerou a Seraías, e Seraías gerou a Jeozadaque,
¹⁵ E Jeozadaque foi levado cativo quando o Senhor levou presos a Judá e a Jerusalém pela mão de Nabucodonosor.
¹⁶ Os filhos de Levi foram, pois, Gérson, Coate, e Merari.
¹⁷ E estes são os nomes dos filhos de Gérson: Libni e Simei.
¹⁸ E os filhos de Coate: Anrão, Izar, Hebrom, e Uziel.
¹⁹ Os filhos de Merari: Mali e Musi; estas são as famílias dos levitas, segundo seus pais.
²⁰ De Gérson: Libni, seu filho; Jaate, seu filho; Zima, seu filho;
²¹ Joá, seu filho; Ido, seu filho; Zerá, seu filho; Jeatarai, seu filho.
²² Os filhos de Coate foram: Aminadabe, seu filho; Coré, seu filho; Assir, seu filho;
²³ Elcana, seu filho; Ebiasafe, seu filho; Assir, seu filho;
²⁴ Taate, seu filho; Uriel, seu filho; Uzias, seu filho; e Saul, seu filho.
²⁵ E os filhos de Elcana: Amasai e Aimote.
²⁶ Quanto a Elcana: os filhos de Elcana foram Zofai, seu filho; e seu filho Naate.
²⁷ Seu filho Eliabe, seu filho Jeroão, seu filho Elcana.
²⁸ E os filhos de Samuel: Vasni, seu primogênito, e o segundo Abias.
²⁹ Os filhos de Merari: Mali, seu filho Libni, seu filho Simei, seu filho Uzá.
³⁰ Seu filho Simeia, seu filho Hagias, seu filho Asaías.
³¹ Estes são, pois, os que Davi constituiu para o ofício do canto na casa do Senhor, depois que a arca teve repouso.
³² E ministravam diante do tabernáculo da tenda da congregação com cantares, até que Salomão edificou a casa do Senhor em Jerusalém; e estiveram, segundo o seu costume, no seu ministério.
³³ Estes são, pois, os que ali estavam com seus filhos: dos filhos dos coatitas, Hemã, o cantor, filho de Joel, filho de Samuel,
³⁴ Filho de Elcana, filho de Jeroão, filho de Eliel, filho de Toá,
³⁵ Filho de Zufe, filho de Elcana, filho de Maate, filho de Amasai,
³⁶ Filho de Elcana, filho de Joel, filho de Azarias, filho de Sofonias.
³⁷ Filho de Taate, filho de Assir, filho de Ebiasafe, filho de Coré,
³⁸ Filho de Isar, filho de Coate, filho de Levi, filho de Israel.
³⁹ E seu irmão Asafe estava à sua direita; e era Asafe filho de Berequias, filho de Simeia,
⁴⁰ Filho de Micael, filho de Baaseias, filho de Malquias,
⁴¹ Filho de Etni, filho de Zerá, filho de Adaías,
⁴² Filho de Etã, filho de Zima, filho de Simei,
⁴³ Filho de Jaate, filho de Gérson, filho de Levi.
⁴⁴ E seus irmãos, os filhos de Merari, estavam à esquerda; a saber: Etã, filho de Quisi, filho de Abdi, filho de Maluque,
⁴⁵ Filho de Hasabias, filho de Amazias, filho de Hilquias,
⁴⁶ Filho de Anzi, filho de Bani, filho de Semer,
⁴⁷ Filho de Mali, filho de Musi, filho de Merari, filho de Levi.
⁴⁸ E seus irmãos, os levitas, foram postos para todo o ministério do tabernáculo da casa de Deus.
⁴⁹ E Arão e seus filhos ofereceram sobre o altar do holocausto e sobre o altar do incenso, por todo o serviço do lugar santíssimo, e para fazer expiação por Israel, conforme tudo quanto Moisés, servo de Deus, tinha ordenado.
⁵⁰ E estes foram os filhos de Arão: seu filho Eleazar, seu filho Fineias, seu filho Abisua.
⁵¹ Seu filho Buqui, seu filho Uzi, seu filho Seraías,
⁵² Seu filho Meraiote, seu filho Amarias, seu filho Aitube,
⁵³ Seu filho Zadoque, seu filho Aimaás.
⁵⁴ E estas foram as suas habitações, segundo os seus acampamentos, nos seus termos, a saber: dos filhos de Arão, da família dos coatitas, porque a eles caiu a sorte.
⁵⁵ Deram-lhes, pois, a Hebrom, na terra de Judá, e os arrabaldes que a rodeiam.
⁵⁶ Porém o território da cidade e as suas aldeias deram a Calebe, filho de Jefoné.
⁵⁷ E aos filhos de Arão deram as cidades de refúgio: Hebrom e Libna e os seus arrabaldes, e Jatir e Estemoa e os seus arrabaldes.
⁵⁸ E Hilém, e os seus arrabaldes, Debir e os seus arrabaldes,
⁵⁹ E Asã e os seus arrabaldes, e Bete-Semes e os seus arrabaldes.
⁶⁰ E da tribo de Benjamim, Geba e os seus arrabaldes, Alemete e os seus arrabaldes, e Anatote e os seus arrabaldes; todas as suas cidades, pelas suas famílias, foram treze cidades.
⁶¹ Mas os filhos de Coate, que restaram da sua família, tiveram, por sorte, dez cidades da meia tribo de Manassés.
⁶² E os filhos de Gérson, segundo as suas famílias, tiveram treze cidades da tribo de Issacar, e da tribo de Aser, e da tribo de Naftali e da tribo de Manassés, em Basã.
⁶³ Os filhos de Merari, segundo as suas famílias, tiveram, por sorte, doze cidades da tribo de Rúben, e da tribo de Gade, e da tribo de Zebulom.
⁶⁴ Assim os filhos de Israel deram aos levitas estas cidades e os seus arrabaldes.
⁶⁵ E deram-lhes por sorte estas cidades, da tribo dos filhos de Judá, da tribo dos filhos de Simeão, e da tribo dos filhos de Benjamim, às quais deram os seus nomes.
⁶⁶ E quanto ao mais das famílias dos filhos de Coate, se lhes deram, da tribo de Efraim as cidades dos seus termos.
⁶⁷ Porque lhes deram as cidades de refúgio, Siquém e os seus arrabaldes, nas montanhas de Efraim, como também Gezer e os seus arrabaldes,
⁶⁸ E Jocmeão e os seus arrabaldes, Bete-Horom e os seus arrabaldes,
⁶⁹ E Aijalom e os seus arrabaldes, Gate-Rimom e os seus arrabaldes.
⁷⁰ E da meia tribo de Manassés, Aner e os seus arrabaldes, e Bileã e os seus arrabaldes; estas cidades tiveram os que ficaram da família dos filhos de Coate.
⁷¹ Os filhos de Gérson tiveram, da família da meia tribo de Manassés, Golã, em Basã, e os seus arrabaldes, e Astarote e os seus arrabaldes.
⁷² E da tribo de Issacar, Quedes e os seus arrabaldes, e Daberate e os seus arrabaldes.
⁷³ E Ramote e os seus arrabaldes, e Aném e os seus arrabaldes.
⁷⁴ E da tribo de Aser, Masal e os seus arrabaldes, e Abdom e os seus arrabaldes,
⁷⁵ E Hucoque e os seus arrabaldes, e Reobe e os seus arrabaldes.
⁷⁶ E da tribo de Naftali, Quedes, em Galileia, e os seus arrabaldes, Hamom e os seus arrabaldes e Quiriataim e os seus arrabaldes.
⁷⁷ Os que ficaram dos filhos de Merari tiveram, da tribo de Zebulom, a Rimom e os seus arrabaldes, a Tabor e os seus arrabaldes.
⁷⁸ E dalém do Jordão, na altura de Jericó, ao oriente do Jordão, da tribo de Rúben, a Bezer, no deserto, e os seus arrabaldes, e a Jaza e os seus arrabaldes,
⁷⁹ E a Quedemote e os seus arrabaldes, e a Mefaate e os seus arrabaldes.
⁸⁰ E da tribo de Gade, a Ramote, em Gileade, e os seus arrabaldes, e Maanaim e os seus arrabaldes,
⁸¹ E a Hesbom e os seus arrabaldes, e a Jazer e os seus arrabaldes.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quais eram os três filhos de Levi?",
                        opcoes: [
                            { numero: 1, texto: "Gérson, Coate e Merari", correta: true },
                            { numero: 2, texto: "Arão, Moisés e Miriã", correta: false },
                            { numero: 3, texto: "Eleazar, Itamar e Nadabe", correta: false },
                            { numero: 4, texto: "Abiatar, Zadoque e Amon", correta: false }
                        ],
                        explicacao: "1 Crônicas 6:1 - Os filhos de Levi foram: Gérson, Coate e Merari.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem Davi estabeleceu para dirigir o canto na casa do Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Samuel", correta: false },
                            { numero: 2, texto: "Hemã, Asafe e Etã", correta: true },
                            { numero: 3, texto: "Zadoque", correta: false },
                            { numero: 4, texto: "Os filhos de Coré", correta: false }
                        ],
                        explicacao: "1 Crônicas 6:31-44 - E estes são os que Davi estabeleceu para o lugar do canto na casa do Senhor... Hemã... Asafe... Etã.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        7: {
            titulo: "Issacar, Benjamim e Efraim",
            texto: ` ¹ E quanto aos filhos de Issacar, foram: Tola, Pua, Jasube e Sinrom, quatro.
² E os filhos de Tola foram: Uzi, Refaías, Jeriel, Jamai, Ibsão e Semuel, chefes das casas de seus pais, descendentes de Tola, homens valentes nas suas gerações; o seu número, nos dias de Davi, foi de vinte e dois mil e seiscentos.
³ E o filho de Uzi: Izraías; e os filhos de Izraías foram: Mical, Obadias, Joel e Issias; todos estes cinco chefes.
⁴ E houve com eles nas suas gerações, segundo as suas casas paternas, em tropas de guerra, trinta e seis mil; porque tiveram muitas mulheres e filhos.
⁵ E seus irmãos, em todas as famílias de Issacar, homens valentes, foram oitenta e sete mil, todos contados pelas suas genealogias.
⁶ Os filhos de Benjamim foram: Belá, e Bequer, e Jediael, três.
⁷ E os filhos de Belá: Esbom, e Uzi, e Uziel, e Jerimote, e Iri, cinco chefes da casa dos pais, homens valentes que foram contados pelas suas genealogias, vinte e dois mil e trinta e quatro.
⁸ E os filhos de Bequer: Zemira, Joás, Eliezer, Elioenai, Onri, Jerimote, Abias, Anatote, e Alemete; todos estes foram filhos de Bequer.
⁹ E foram contados pelas suas genealogias, segundo as suas gerações, e chefes das casas de seus pais, homens valentes, vinte mil e duzentos.
¹⁰ E foi o filho de Jediael, Bilã; e os filhos de Bilã foram Jeús, Benjamim, Eúde, Quenaaná, Zetã, Társis e Aisaar.
¹¹ Todos estes filhos de Jediael foram chefes das famílias dos pais, homens valentes, dezessete mil e duzentos, que saíam no exército à peleja.
¹² E Supim, e Hupim, filhos de Ir, e Husim, dos filhos de Aer.
¹³ Os filhos de Naftali: Jaziel, e Guni, e Jezer, e Salum, filhos de Bila.
¹⁴ Os filhos de Manassés: Asriel, que a mulher de Gileade concebeu (porém a sua concubina, a síria, concebeu a Maquir, pai de Gileade;
¹⁵ E Maquir tomou a irmã de Hupim e Supim por mulher, e era o seu nome Maaca), e foi o nome do segundo Zelofeade; e Zelofeade teve filhas.
¹⁶ E Maaca, mulher de Maquir, deu à luz um filho, e ela chamou o nome dele Perez; e o nome de seu irmão foi Seres; e foram seus filhos Ulão e Raquém.
¹⁷ E o filho de Ulão, Bedã; estes foram os filhos de Gileade, filho de Maquir, filho de Manassés.
¹⁸ E quanto à sua irmã Hamolequete, teve a Is-Hode, a Abiezer, e a Maalá.
¹⁹ E foram os filhos de Semida: Aiã, Siquém, Liqui, e Anião.
²⁰ E os filhos de Efraim: Sutela, e seu filho Berede, e seu filho Taate, e seu filho Elada e seu filho Taate.
²¹ E seu filho Zabade, e seu filho Sutela, e Ezer, e Elade; e os homens de Gate, naturais da terra, os mataram, porque desceram para tomar os seus gados.
²² Por isso Efraim, seu pai, por muitos dias os chorou; e vieram seus irmãos para o consolar.
²³ Depois coabitou com sua mulher, e ela concebeu, e teve um filho; e ele chamou o seu nome Berias; porque ia mal na sua casa.
²⁴ E sua filha foi Seerá, que edificou a Bete-Horom, a baixa e a alta, como também a Uzém-Seerá.
²⁵ E foi seu filho Refa, e Resefe, de quem foi filho Tela, de quem foi filho Taã,
²⁶ De quem foi filho Ladã, de quem foi filho Amiúde, de quem foi filho Elisama,
²⁷ De quem foi filho Num, de quem foi filho Josué.
²⁸ E foi a sua possessão e habitação Betel e os lugares da sua jurisdição; e ao oriente Naarã, e ao ocidente Gezer e os lugares da sua jurisdição, e Siquém e os lugares da sua jurisdição, até Gaza e os lugares da sua jurisdição;
²⁹ E do lado dos filhos de Manassés, Bete-Seã e os lugares da sua jurisdição, Taanaque e os lugares da sua jurisdição, Megido e os lugares da sua jurisdição, Dor e os lugares da sua jurisdição; nestas habitaram os filhos de José, filho de Israel.
³⁰ Os filhos de Aser foram: Imná, Isvá, Isvi, Berias, e Sera, irmã deles.
³¹ E os filhos de Berias: Héber e Malquiel; este foi o pai de Birzavite.
³² E Héber gerou a Jaflete, e a Somer, e a Hotão, e a Suá, irmã deles.
³³ E foram os filhos de Jaflete: Pasaque, e Bimal e Asvate; estes foram os filhos de Jaflete.
³⁴ E os filhos de Semer: Aí, Roga, Jeubá, e Arã.
³⁵ E os filhos de seu irmão Helém: Zofa, e Imna, e Seles, e Amal.
³⁶ Os filhos de Zofa: Suá, e Harnefer, e Sual, e Beri, e Inra,
³⁷ Bezer, Hode, Samá, Silsa, Itrã, e Beera.
³⁸ E os filhos de Jeter: Jefoné, Pispa e Ara.
³⁹ E os filhos de Ula: Ará e Haniel e Rizia.
⁴⁰ Todos estes foram filhos de Aser, chefes das casas paternas, homens escolhidos e valentes, chefes dos príncipes, e contados nas suas genealogias, no exército para a guerra; foi seu número de vinte e seis mil homens.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como eram descritos os homens da linhagem de Issacar nos registros genealógicos?",
                        opcoes: [
                            { numero: 1, texto: "Homens do campo", correta: false },
                            { numero: 2, texto: "Pescadores", correta: false },
                            { numero: 3, texto: "Homens valentes e poderosos", correta: true },
                            { numero: 4, texto: "Sacerdotes", correta: false }
                        ],
                        explicacao: "1 Crônicas 7:2 - ...homens valentes em seus nascimentos...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        8: {
            titulo: "A Genealogia de Benjamim e Saul",
            texto: `¹ E Benjamim gerou a Belá, seu primogênito, a Asbel o segundo, e a Aará o terceiro,
² A Noá o quarto, e a Rafa o quinto.
³ E Belá teve estes filhos: Adar, Gera, Abiúde,
⁴ Abisua, Naamã, Aoá,
⁵ Gera, Sefufá e Hurão.
⁶ E estes foram os filhos de Eúde; que foram chefes dos pais dos moradores de Geba, e os levaram cativos a Manaate;
⁷ E Naamã, e Aías e Gera; este os transportou, e gerou a Uzá e a Aiúde.
⁸ E Saaraim (depois de os enviar), na terra de Moabe, gerou filhos de Husim e Baara, suas mulheres.
⁹ E de Hodes, sua mulher, gerou a Jobabe, a Zíbia, a Mesa, a Malcã,
¹⁰ A Jeuz, a Saquias e a Mirma; estes foram seus filhos, chefes dos pais.
¹¹ E de Husim gerou a Abitube e a Elpaal.
¹² E foram os filhos de Elpaal: Éber, Misã e Semede; este edificou a Ono e a Lode e os lugares da sua jurisdição.
¹³ E Berias e Sema foram cabeças dos pais dos moradores de Aijalom; estes afugentaram os moradores de Gate.
¹⁴ E Aiô, Sasaque, Jerimote,
¹⁵ Zebadias, Arade, Eder,
¹⁶ Micael, Ispa e Joa foram filhos de Berias.
¹⁷ Zebadias, Mesulão, Hizque, Héber,
¹⁸ Ismerai, Izlias e Jobabe, filhos de Elpaal.
¹⁹ Jaquim, Zicri, Zabdi,
²⁰ Elienai, Ziletai, Eliel,
²¹ Adaías, Beraías e Sinrate, filhos de Simei.
²² E Ispã, Éber, Eliel,
²³ Abdom, Zicri, Hanã,
²⁴ Hananias, Elão, Antotias,
²⁵ E Ifdeias, e Penuel, filhos de Sasaque;
²⁶ E Sanserai, e Searias, e Atalias,
²⁷ E Jaaresias, e Elias e Zicri, filhos de Jeroão.
²⁸ Estes foram cabeças dos pais, segundo as suas gerações, chefes, e habitaram em Jerusalém.
²⁹ E em Gibeão habitou o pai de Gibeão; e era o nome de sua mulher Maaca;
³⁰ E seu filho primogênito, Abdom; depois Zur, e Quis, Baal, e Nadabe,
³¹ E Gedor, Aiô, e Zequer,
³² E Miclote gerou a Simeia; e também estes, defronte de seus irmãos, habitaram em Jerusalém com eles.
³³ E Ner gerou a Quis, e Quis gerou a Saul; e Saul gerou a Jônatas, a Malquisua, a Abinadabe, e a Esbaal.
³⁴ E o filho de Jônatas foi Meribe-Baal; e Meribe-Baal gerou a Mica.
³⁵ E os filhos de Mica foram: Pitom, Meleque, Tareá, e Acaz.
³⁶ E Acaz gerou a Jeoada; e Jeoada gerou a Alemete, e a Azmavete, e a Zinri; e Zinri gerou a Moza,
³⁷ E Moza gerou a Bineá, cujo filho foi Rafa, de quem foi filho Eleasá, cujo filho foi Azel.
³⁸ E teve Azel seis filhos, e estes foram os seus nomes: Azricão, Bocru, Ismael, Searias, Obadias, e Hanã; todos estes foram filhos de Azel.
³⁹ E os filhos de Ezeque, seu irmão: Ulão, seu primogênito, Jeús o segundo e Elifelete o terceiro.
⁴⁰ E foram os filhos de Ulão homens heróis, valentes, e flecheiros destros; e tiveram muitos filhos, e filhos de filhos, cento e cinquenta; todos estes foram dos filhos de Benjamim.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem foi o pai de Quis, que por sua vez foi o pai do rei Saul?",
                        opcoes: [
                            { numero: 1, texto: "Ner", correta: true },
                            { numero: 2, texto: "Abner", correta: false },
                            { numero: 3, texto: "Gibeão", correta: false },
                            { numero: 4, texto: "Jonatã", correta: false }
                        ],
                        explicacao: "1 Crônicas 8:33 - E Ner gerou a Quis, e Quis gerou a Saul...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        9: {
            titulo: "Os Habitantes de Jerusalém após o Exílio",
            texto: `¹ E todo o Israel foi contado por genealogias, que estão escritas no livro dos reis de Israel; e os de Judá foram transportados a Babilônia, por causa da sua transgressão.
² E os primeiros habitantes, que moravam na sua possessão e nas suas cidades, foram os israelitas, os sacerdotes, os levitas, e os netineus.
³ Porém alguns dos filhos de Judá, e dos filhos de Benjamim, e dos filhos de Efraim e Manassés, habitaram em Jerusalém:
⁴ Utai, filho de Amiúde, filho de Onri, filho de Inri, filho de Bani, dos filhos de Perez, filho de Judá;
⁵ E dos silonitas: Asaías o primogênito, e seus filhos;
⁶ E dos filhos de Zerá: Jeuel, e seus irmãos, seiscentos e noventa;
⁷ E dos filhos de Benjamim: Salu, filho de Mesulão, filho de Hodavias, filho de Hassenua,
⁸ E Ibneias, filho de Jeroão, e Elá, filho de Uzi, filho de Micri, e Mesulão, filho de Sefatias, filho de Reuel, filho de Ibnijas;
⁹ E seus irmãos, segundo as suas gerações, novecentos e cinquenta e seis; todos estes homens foram chefes dos pais nas casas de seus pais.
¹⁰ E dos sacerdotes: Jedaías, e Jeoiaribe, e Jaquim,
¹¹ E Azarias, filho de Hilquias, filho de Mesulão, filho de Zadoque, filho de Meraiote, filho de Aitube, maioral da casa de Deus;
¹² Adaías, filho de Jeroão, filho de Pasur, filho de Malquias, e Masai, filho de Adiel, filho de Jazera, filho de Mesulão, filho de Mesilemite, filho de Imer;
¹³ Como também seus irmãos, cabeças nas casas de seus pais, mil, setecentos e sessenta, homens valentes para a obra do ministério da casa de Deus.
¹⁴ E dos levitas: Semaías, filho de Hassube, filho de Azricão, filho de Hasabias, dos filhos de Merari;
¹⁵ E Baquebacar, Heres e Galal; e Matanias, filho de Mica, filho de Zicri, filho de Asafe;
¹⁶ E Obadias, filho de Semaías, filho de Galal, filho de Jedutum; e Berequias, filho de Asa, filho de Elcana, morador das aldeias dos netofatitas.
¹⁷ E foram porteiros: Salum, Acube, Talmom, Aimã, e seus irmãos, cujo chefe era Salum.
¹⁸ E até aquele tempo estavam de guarda à porta do rei, do lado do oriente; estes foram os porteiros dos arraiais dos filhos de Levi.
¹⁹ E Salum, filho de Coré, filho de Ebiasafe, filho de Corá, e seus irmãos da casa de seu pai, os coraítas, tinham cargo da obra do ministério, e eram guardas das portas do tabernáculo, como seus pais foram responsáveis pelo arraial do Senhor, e guardas da entrada.
²⁰ Fineias, filho de Eleazar, antes era líder entre eles; e o Senhor era com ele.
²¹ E Zacarias, filho de Meselemias, porteiro da entrada da tenda da congregação.
²² Todos estes, escolhidos para serem guardas das portas, foram duzentos e doze; e foram estes, segundo as suas aldeias, postos em suas genealogias; e Davi e Samuel, o vidente, os constituíram nos seus respectivos cargos.
²³ Estavam, pois, eles, e seus filhos, às portas da casa do Senhor, na casa da tenda, junto aos guardas,
²⁴ Os porteiros estavam aos quatro lados; ao oriente, ao ocidente, ao norte, e ao sul.
²⁵ E seus irmãos, que estavam nas suas aldeias, deviam, de tempo em tempo, vir por sete dias para servirem com eles.
²⁶ Porque havia naquele ofício quatro porteiros principais que eram levitas, e tinham o encargo das câmaras e dos tesouros da casa de Deus.
²⁷ E de noite ficavam em redor da casa de Deus, cuja guarda lhes tinha sido confiada, e tinham o encargo de abri-la cada manhã.
²⁸ E alguns deles estavam encarregados dos utensílios do ministério, porque por conta os traziam e por conta os tiravam.
²⁹ Porque deles havia alguns que tinham o encargo dos objetos e de todos os utensílios do santuário; como também da flor de farinha, do vinho, do azeite, do incenso, e das especiarias.
³⁰ E alguns dos filhos dos sacerdotes eram os obreiros da confecção das especiarias.
³¹ E Matitias, dentre os levitas, o primogênito de Salum, o coraíta, tinha o encargo da obra que se fazia em sertãs.
³² E alguns dos seus irmãos, dos filhos dos coatitas, tinham o encargo de preparar os pães da proposição para todos os sábados.
³³ Destes foram também os cantores, chefes dos pais entre os levitas, habitando nas câmaras, isentos de serviços; porque de dia e de noite estava a seu cargo ocuparem-se naquela obra.
³⁴ Estes foram cabeças dos pais entre os levitas, chefes em suas gerações; estes habitaram em Jerusalém.
³⁵ Porém em Gibeão habitaram Jeiel, pai de Gibeão (e era o nome de sua mulher Maaca).
³⁶ E seu filho primogênito Abdom; depois Zur, Quis, Baal, Ner e Nadabe,
³⁷ E Gedor, Aiô, Zacarias e Miclote.
³⁸ Miclote gerou a Simeão; e também estes habitaram em Jerusalém, defronte de seus irmãos, com eles.
³⁹ E Ner gerou a Quis; e Quis gerou a Saul, Saul gerou a Jônatas, a Malquisua, a Abinadabe e a Esbaal.
⁴⁰ E o filho de Jônatas foi Meribe-Baal, e Meribe-Baal gerou a Mica.
⁴¹ E os filhos de Mica foram: Pitom, Meleque e Tareia.
⁴² E Acaz gerou a Jaerá, e Jaerá gerou a Alemete, a Azmavete e a Zinri; e Zinri gerou a Moza.
⁴³ E Moza gerou a Bineá, cujo filho foi Refaías, de quem foi filho Eleasá, cujo filho foi Azel.
⁴⁴ E teve Azel seis filhos, e estes foram os seus nomes: Azricão, Bocru, Ismael, Searias, Obadias e Hanã; estes foram os filhos de Azel.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual era a função principal dos filhos de Coré mencionada neste capítulo?",
                        opcoes: [
                            { numero: 1, texto: "Eram reis", correta: false },
                            { numero: 2, texto: "Eram porteiros da casa do Senhor", correta: true },
                            { numero: 3, texto: "Eram cozinheiros", correta: false },
                            { numero: 4, texto: "Eram costureiros", correta: false }
                        ],
                        explicacao: "1 Crônicas 9:19 - ...os seus irmãos... eram encarregados da obra do ministério, porteiros da entrada do tabernáculo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        10: {
            titulo: "A Morte de Saul",
            texto: ` ¹ E os filisteus pelejaram com Israel; e os homens de Israel fugiram de diante dos filisteus, e caíram mortos nas montanhas de Gilboa.
² E os filisteus perseguiram a Saul e aos seus filhos; e os filisteus mataram a Jônatas, a Abinadabe e a Malquisua, filhos de Saul.
³ E a peleja se agravou contra Saul, e os flecheiros o alcançaram; e temeu muito aos flecheiros.
⁴ Então disse Saul ao seu escudeiro: Arranca a tua espada, e atravessa-me com ela; para que porventura não venham estes incircuncisos e escarneçam de mim. Porém o seu escudeiro não quis, porque temia muito; então tomou Saul a espada, e se lançou sobre ela.
⁵ Vendo, pois, o seu escudeiro que Saul estava morto, também ele se lançou sobre a espada e morreu.
⁶ Assim morreram Saul e seus três filhos; e toda a sua casa morreu juntamente.
⁷ E, vendo todos os homens de Israel, que estavam no vale, que haviam fugido, e que Saul e seus filhos eram mortos, deixaram as suas cidades, e fugiram; então vieram os filisteus, e habitaram nelas.
⁸ E sucedeu que, no dia seguinte, vindo os filisteus a despojar os mortos, acharam a Saul e a seus filhos caídos no monte de Gilboa.
⁹ E o despojaram, e tomaram a sua cabeça e as suas armas, e as enviaram pela terra dos filisteus em redor, para o anunciarem a seus ídolos e ao povo.
¹⁰ E puseram as suas armas na casa do seu deus, e a sua cabeça afixaram na casa de Dagom.
¹¹ Ouvindo, pois, toda a Jabes de Gileade tudo quanto os filisteus fizeram a Saul,
¹² Então todos os homens valorosos se levantaram, e tomaram o corpo de Saul, e os corpos de seus filhos, e os trouxeram a Jabes; e sepultaram os seus ossos debaixo de um carvalho em Jabes, e jejuaram sete dias.
¹³ Assim morreu Saul por causa da transgressão que cometeu contra o Senhor, por causa da palavra do Senhor, a qual não havia guardado; e também porque buscou a adivinhadora para a consultar.
¹⁴ E não buscou ao Senhor, que por isso o matou, e transferiu o reino a Davi, filho de Jessé.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Saul morreu durante a batalha contra os filisteus no monte Gilboa?",
                        opcoes: [
                            { numero: 1, texto: "Foi morto por um gigante", correta: false },
                            { numero: 2, texto: "Lançou-se sobre a sua própria espada", correta: true },
                            { numero: 3, texto: "Morreu de velhice", correta: false },
                            { numero: 4, texto: "Foi levado cativo", correta: false }
                        ],
                        explicacao: "1 Crônicas 10:4 - ...Então tomou Saul a espada, e se lançou sobre ela.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual foi o motivo espiritual citado para a morte de Saul e a transferência do reino para Davi?",
                        opcoes: [
                            { numero: 1, texto: "Apenas por ser fraco na guerra", correta: false },
                            { numero: 2, texto: "Por sua transgressão contra o Senhor e por consultar uma necromante", correta: true },
                            { numero: 3, texto: "Porque ele era muito jovem", correta: false },
                            { numero: 4, texto: "Porque não tinha filhos", correta: false }
                        ],
                        explicacao: "1 Crônicas 10:13-14 - Assim morreu Saul por causa da sua transgressão... e também porque buscou a adivinhadora para a consultar.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/primeiro_cronicas.js (Parte 3: Capítulos 11-15)

        11: {
            titulo: "Davi Conquista Jerusalém e Seus Valentes",
            texto: ` ¹ Então todo o Israel se ajuntou a Davi em Hebrom, dizendo: Eis que somos teus ossos e tua carne.
² E também outrora, sendo Saul ainda rei, eras tu o que fazias sair e entrar a Israel; também o Senhor teu Deus te disse: Tu apascentarás o meu povo Israel, e tu serás chefe sobre o meu povo Israel.
³ Também vieram todos os anciãos de Israel ao rei, a Hebrom, e Davi fez com eles aliança em Hebrom, perante o Senhor; e ungiram a Davi rei sobre Israel, conforme a palavra do Senhor pelo ministério de Samuel.
⁴ E partiu Davi e todo o Israel para Jerusalém, que é Jebus; porque ali estavam os jebuseus, habitantes da terra.
⁵ E disseram os habitantes de Jebus a Davi: Tu não entrarás aqui. Porém Davi ganhou a fortaleza de Sião, que é a cidade de Davi.
⁶ Porque disse Davi: Qualquer que primeiro ferir os jebuseus será chefe e capitão. Então Joabe, filho de Zeruia, subiu primeiro a ela; pelo que foi feito chefe.
⁷ E Davi habitou na fortaleza; por isso foi chamada a cidade de Davi.
⁸ E edificou a cidade ao redor, desde Milo até ao circuito; e Joabe renovou o restante da cidade.
⁹ E Davi tornava-se cada vez mais forte; porque o Senhor dos Exércitos era com ele.
¹⁰ E estes foram os chefes dos poderosos que Davi tinha, e que o apoiaram fortemente no seu reino, com todo o Israel, para o fazerem rei, conforme a palavra do Senhor, no tocante a Israel.
¹¹ E este é o número dos poderosos que Davi tinha: Jasobeão, hacmonita, chefe dos capitães, o qual, brandindo a sua lança contra trezentos, de uma vez os matou.
¹² E, depois dele Eleazar, filho de Dodó, o aoíta; ele estava entre os três poderosos.
¹³ Este esteve com Davi em Pas-Damim, quando os filisteus ali se ajuntaram à peleja, onde havia um pedaço de campo cheio de cevada; e o povo fugiu de diante dos filisteus.
¹⁴ E puseram-se no meio daquele campo, e o defenderam, e feriram os filisteus; e o Senhor efetuou um grande livramento.
¹⁵ E três dos trinta capitães desceram à penha, a ter com Davi, na caverna de Adulão; e o exército dos filisteus estava acampado no vale de Refaim.
¹⁶ E Davi estava então no lugar forte; e o alojamento dos filisteus estava então em Belém.
¹⁷ E desejou Davi, e disse: Quem me dera beber da água do poço de Belém, que está junto à porta!
¹⁸ Então aqueles três romperam pelo acampamento dos filisteus, e tiraram água do poço de Belém, que estava junto à porta, e tomaram dela e a trouxeram a Davi; porém Davi não a quis beber, mas a derramou ao Senhor,
¹⁹ E disse: Nunca meu Deus permita que faça tal! Beberia eu o sangue destes homens com as suas vidas? Pois com perigo das suas vidas a trouxeram. E ele não a quis beber. Isto fizeram aqueles três homens.
²⁰ E também Abisai, irmão de Joabe, era chefe de três, o qual, brandindo a sua lança contra trezentos, os feriu; e teve nome entre os três.
²¹ Ele foi o mais ilustre dos três, pelo que foi capitão deles; porém não igualou aos primeiros três.
²² Também Benaia, filho de Joiada, filho de um homem poderoso de Cabzeel, grande em obras; ele feriu a dois heróis de Moabe; e também desceu, e feriu um leão dentro de uma cova, no tempo da neve.
²³ Também feriu ele a um homem egípcio, homem de grande altura, de cinco côvados; e trazia o egípcio uma lança na mão, como o órgão do tecelão; mas Benaia desceu contra ele com uma vara, e arrancou a lança da mão do egípcio, e com ela o matou.
²⁴ Estas coisas fez Benaia, filho de Joiada; pelo que teve nome entre aqueles três poderosos.
²⁵ Eis que dos trinta foi ele o mais ilustre; contudo não chegou aos primeiros três; e Davi o pôs sobre os da sua guarda.
²⁶ E foram os poderosos dos exércitos: Asael, irmão de Joabe, El-Hanã, filho de Dodó, de Belém;
²⁷ Samote, o harorita; Helez, o pelonita;
²⁸ Ira, filho de Iques, o tecoíta; Abiezer, o anatotita;
²⁹ Sibecai, o husatita; Ilai, o aoíta;
³⁰ Maarai, o netofatita; Helede, filho de Baaná, o netofatita;
³¹ Itai, filho de Ribai, de Gibeá, dos filhos de Benjamim; Benaia, o piratonita;
³² Hurai, do ribeiro de Gaás; Abiel, o arbatita;
³³ Azmavete, o baarumita; Eliaba, o saalbonita;
³⁴ Dos filhos de Hasém, o gizonita: Jônatas, filho de Sage, o hararita;
³⁵ Aião, filho de Sacar, o hararita; Elifal, filho de Ur;
³⁶ Hefer, o mequeratita; Aías, o pelonita;
³⁷ Hezro, o carmelita; Naarai, filho de Ezbai;
³⁸ Joel, irmão de Natã; Mibar, filho de Hagri;
³⁹ Zeleque, o amonita; Naarai, o beerotita, escudeiro de Joabe, filho de Zeruia;
⁴⁰ Ira, o itrita; Garebe, o itrita;
⁴¹ Urias, o heteu; Zabade, filho de Alai;
⁴² Adina, filho de Siza, o rubenita, capitão dos rubenitas, e com ele trinta;
⁴³ Hanã, filho de Maaca; e Josafá, o mitatita;
⁴⁴ Uzias, o asteratita; Sama e Jeiel, filhos de Hotão, o aroerita;
⁴⁵ Jediael, filho de Sinri; e Joa, seu irmão, o tizita;
⁴⁶ Eliel, o maavita; e Jeribai e Josavias, filhos de Elnaão; e Itma, o moabita;
⁴⁷ Eliel, Obede, e Jaasiel, o mesobaíta.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem foi o primeiro a subir ao muro de Jerusalém (Jebus) e se tornou chefe do exército de Davi?",
                        opcoes: [
                            { numero: 1, texto: "Abisai", correta: false },
                            { numero: 2, texto: "Joabe, filho de Zeruia", correta: true },
                            { numero: 3, texto: "Benaia", correta: false },
                            { numero: 4, texto: "Eleazar", correta: false }
                        ],
                        explicacao: "1 Crônicas 11:6 - E disse Davi: Qualquer que primeiro ferir os jebuseus será chefe e capitão. Então Joabe... subiu primeiro.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que os três valentes de Davi fizeram quando ele desejou beber a água do poço de Belém?",
                        opcoes: [
                            { numero: 1, texto: "Disseram que era impossível", correta: false },
                            { numero: 2, texto: "Romperam pelo arraial dos filisteus e trouxeram a água", correta: true },
                            { numero: 3, texto: "Cavaram um novo poço em Jerusalém", correta: false },
                            { numero: 4, texto: "Compraram a água dos mercadores", correta: false }
                        ],
                        explicacao: "1 Crônicas 11:18 - Então aqueles três romperam pelo arraial dos filisteus, e tiraram água do poço de Belém...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Davi fez com a água que os valentes trouxeram de Belém arriscando a vida?",
                        opcoes: [
                            { numero: 1, texto: "Bebeu-a com alegria", correta: false },
                            { numero: 2, texto: "Guardou-a num jarro de ouro", correta: false },
                            { numero: 3, texto: "Não a quis beber, mas a derramou como oferta ao Senhor", correta: true },
                            { numero: 4, texto: "Deu-a para os sacerdotes", correta: false }
                        ],
                        explicacao: "1 Crônicas 11:18 - ...porém Davi não a quis beber, mas a derramou em libação ao Senhor.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        12: {
            titulo: "Os Homens que se Juntaram a Davi",
            texto: ` ¹ Estes, porém, são os que vieram a Davi, a Ziclague, estando ele ainda escondido, por causa de Saul, filho de Quis; e eram dos valentes que o ajudaram na guerra.
² Estavam armados de arco, e usavam tanto da mão direita como da esquerda em atirar pedras e em atirar flechas com o arco; eram dos irmãos de Saul, benjamitas.
³ Aiezer, o chefe, e Joás, filhos de Semaa, o gibeatita, e Jeziel e Pelete, filhos de Azmavete; e Beraca, e Jeú, o anatotita,
⁴ E Ismaías, o gibeonita, valente entre os trinta, e líder sobre os trinta; e Jeremias, e Jaaziel, e Joanã, e Jozabade, o gederatita,
⁵ Eluzai, e Jerimote, e Bealias, e Samarias, e Sefatias, o harufita,
⁶ Elcana, Issias, Azarel, Joezer, e Jasobeão, os coraítas,
⁷ E Joela, e Zabadias, filhos de Jeroão de Gedor.
⁸ E dos gaditas se desertaram para Davi, ao lugar forte no deserto, valentes, homens de guerra para pelejar, armados com escudo e lança; e seus rostos eram como rostos de leões, e ligeiros como corças sobre os montes:
⁹ Ezer, o primeiro; Obadias, o segundo; Eliabe, o terceiro;
¹⁰ Mismana, o quarto; Jeremias, o quinto;
¹¹ Atai, o sexto; Eliel, o sétimo;
¹² Joanã, o oitavo; Elzabade, o nono;
¹³ Jeremias, o décimo; Macbanai, o undécimo;
¹⁴ Estes, dos filhos de Gade, foram os capitães do exército; o menor tinha o encargo de cem homens e o maior de mil.
¹⁵ Estes são os que passaram o Jordão no primeiro mês, quando ele transbordava por todas as suas ribanceiras, e fizeram fugir a todos os dos vales ao oriente e ao ocidente.
¹⁶ Também alguns dos filhos de Benjamim e de Judá vieram a Davi, ao lugar forte.
¹⁷ E Davi lhes saiu ao encontro, e lhes falou, dizendo: Se vós vindes a mim pacificamente e para me ajudar, o meu coração se unirá convosco; porém, se é para me entregar aos meus inimigos, sem que haja deslealdade nas minhas mãos, o Deus de nossos pais o veja e o repreenda.
¹⁸ Então veio o Espírito sobre Amasai, chefe de trinta, e disse: Nós somos teus, ó Davi, e contigo estamos, ó filho de Jessé! Paz, paz contigo, e paz com quem te ajuda, pois que teu Deus te ajuda. E Davi os recebeu, e os fez capitães das tropas.
¹⁹ Também de Manassés alguns passaram para Davi, quando veio com os filisteus para a batalha contra Saul; todavia Davi não os ajudou, porque os príncipes dos filisteus, tendo feito conselho, o despediram, dizendo: À custa de nossas cabeças passará a Saul, seu senhor.
²⁰ Voltando ele, pois, a Ziclague, passaram-se para ele, de Manassés, Adna, Jozabade, Jediael, Micael, Jozabade, Eliú, e Ziletai, capitães de milhares dos de Manassés.
²¹ E estes ajudaram a Davi contra aquela tropa, porque todos eles eram heróis poderosos, e foram capitães no exército.
²² Porque naquele tempo, dia após dia, vinham a Davi para o ajudar, até que se fez um grande exército, como o exército de Deus.
²³ Ora este é o número dos chefes armados para a peleja, que vieram a Davi em Hebrom, para transferir a ele o reino de Saul, conforme a palavra do Senhor.
²⁴ Dos filhos de Judá, que traziam escudo e lança, seis mil e oitocentos, armados para a peleja;
²⁵ Dos filhos de Simeão, homens poderosos para pelejar, sete mil e cem;
²⁶ Dos filhos de Levi, quatro mil e seiscentos.
²⁷ Joiada, que era o líder dos de Arão, e com ele três mil e setecentos.
²⁸ E Zadoque, sendo ainda jovem, homem poderoso, com vinte e dois capitães da família de seu pai;
²⁹ E dos filhos de Benjamim, irmãos de Saul, três mil; porque até então havia ainda muitos deles que eram pela casa de Saul.
³⁰ E dos filhos de Efraim, vinte mil e oitocentos homens poderosos, homens de nome nas casas de seus pais.
³¹ E da meia tribo de Manassés, dezoito mil, que foram apontados pelos seus nomes para virem fazer rei a Davi.
³² E dos filhos de Issacar, duzentos de seus chefes, destros no conhecimento dos tempos, para saberem o que Israel devia fazer, e todos os seus irmãos seguiam suas ordens.
³³ De Zebulom, dos que podiam sair no exército, cinquenta mil ordenados para a peleja com todas as armas de guerra; como também destros para ordenarem uma batalha, e não eram de coração dobre.
³⁴ E de Naftali, mil capitães, e com eles trinta e sete mil com escudo e lança.
³⁵ E dos danitas, ordenados para a peleja, vinte e oito mil e seiscentos.
³⁶ E de Aser, dos que podiam sair no exército, para ordenarem a batalha, quarenta mil.
³⁷ E do outro lado do Jordão, dos rubenitas e gaditas, e da meia tribo de Manassés, com toda a sorte de instrumentos de guerra para pelejar, cento e vinte mil.
³⁸ Todos estes homens de guerra, postos em ordem de batalha, vieram a Hebrom, com corações decididos, para constituírem a Davi rei sobre todo o Israel; e também todo o restante de Israel tinha o mesmo coração para constituir a Davi rei.
³⁹ E estiveram ali com Davi três dias, comendo e bebendo; porque seus irmãos lhes tinham preparado as provisões.
⁴⁰ E também seus vizinhos de mais perto, até Issacar, e Zebulom, e Naftali, trouxeram, sobre jumentos, e sobre camelos, e sobre mulos, e sobre bois, pão, provisões de farinha, pastas de figos e cachos de passas, e vinho, e azeite, e bois, gado miúdo em abundância; porque havia alegria em Israel.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como eram descritos os guerreiros da tribo de Gade que se juntaram a Davi no deserto?",
                        opcoes: [
                            { numero: 1, texto: "Cegos e mancos", correta: false },
                            { numero: 2, texto: "Homens de guerra, cujos rostos eram como rostos de leões", correta: true },
                            { numero: 3, texto: "Apenas jovens sem experiência", correta: false },
                            { numero: 4, texto: "Pequenos e velozes", correta: false }
                        ],
                        explicacao: "1 Crônicas 12:8 - ...homens de guerra para pelejar... cujos rostos eram como rostos de leões, e eram ligeiros como corças sobre os montes.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual tribo é mencionada por ter homens 'entendidos na ciência dos tempos'?",
                        opcoes: [
                            { numero: 1, texto: "Tribo de Issacar", correta: true },
                            { numero: 2, texto: "Tribo de Judá", correta: false },
                            { numero: 3, texto: "Tribo de Levi", correta: false },
                            { numero: 4, texto: "Tribo de Naftali", correta: false }
                        ],
                        explicacao: "1 Crônicas 12:32 - E dos filhos de Issacar, entendidos na ciência dos tempos, para saberem o que Israel devia fazer...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        13: {
            titulo: "A Arca e o Incidente com Uzá",
            texto: `¹ E Davi tomou conselho com os capitães dos milhares, e das centenas, e com todos os líderes.
² E disse Davi a toda a congregação de Israel: Se bem vos parece, e se isto vem do Senhor nosso Deus, enviemos depressa mensageiros a todos os nossos outros irmãos em todas as terras de Israel, e aos sacerdotes, e aos levitas nas suas cidades e nos seus arrabaldes, para que se reúnam conosco;
³ E tornemos a trazer para nós a arca do nosso Deus; porque não a buscamos nos dias de Saul.
⁴ Então disse toda a congregação que se fizesse assim; porque este negócio pareceu reto aos olhos de todo o povo.
⁵ Convocou, pois, Davi a todo o Israel desde Sior do Egito até chegar a Hamate; para trazer a arca de Deus de Quiriate-Jearim.
⁶ E então Davi com todo o Israel subiu a Baalá de Quiriate-Jearim, que está em Judá, para fazer subir dali a arca de Deus, o Senhor que habita entre os querubins, sobre a qual é invocado o seu nome.
⁷ E levaram a arca de Deus, da casa de Abinadabe, sobre um carro novo; e Uzá e Aiô guiavam o carro.
⁸ E Davi e todo o Israel, alegraram-se perante Deus com todas as suas forças; com cânticos, e com harpas, e com saltérios, e com tamborins, e com címbalos, e com trombetas.
⁹ E, chegando à eira de Quidom, estendeu Uzá a sua mão, para segurar a arca, porque os bois tropeçavam.
¹⁰ Então se acendeu a ira do Senhor contra Uzá, e o feriu, por ter estendido a sua mão à arca; e morreu ali perante Deus.
¹¹ E Davi se encheu de tristeza porque o Senhor havia aberto brecha em Uzá; por isso chamou aquele lugar Perez-Uzá, até ao dia de hoje.
¹² E aquele dia temeu Davi a Deus, dizendo: Como trarei a mim a arca de Deus?
¹³ Por isso Davi não trouxe a arca a si, à cidade de Davi; porém a fez levar à casa de Obede-Edom, o giteu.
¹⁴ Assim ficou a arca de Deus com a família de Obede-Edom, três meses em sua casa; e o Senhor abençoou a casa de Obede-Edom, e tudo quanto tinha.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que aconteceu com Uzá quando ele estendeu a mão para segurar a Arca?",
                        opcoes: [
                            { numero: 1, texto: "Ele foi curado", correta: false },
                            { numero: 2, texto: "A Arca brilhou", correta: false },
                            { numero: 3, texto: "O Senhor o feriu e ele morreu ali perante Deus", correta: true },
                            { numero: 4, texto: "Ele se tornou o sumo sacerdote", correta: false }
                        ],
                        explicacao: "1 Crônicas 13:10 - Então se acendeu a ira do Senhor contra Uzá, e o feriu, por ter estendido a sua mão à arca; e morreu ali perante Deus.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Na casa de quem a Arca ficou por três meses após o incidente com Uzá?",
                        opcoes: [
                            { numero: 1, texto: "Na casa de Saul", correta: false },
                            { numero: 2, texto: "Na casa de Obede-Edom, o giteu", correta: true },
                            { numero: 3, texto: "No palácio de Davi", correta: false },
                            { numero: 4, texto: "No tabernáculo de Moisés", correta: false }
                        ],
                        explicacao: "1 Crônicas 13:14 - Assim ficou a arca de Deus com a família de Obede-Edom, três meses em sua casa; e o Senhor abençoou a casa de Obede-Edom...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        14: {
            titulo: "As Vitórias de Davi sobre os Filisteus",
            texto: `¹ Então Hirão, rei de Tiro, mandou mensageiros a Davi, e madeira de cedro, e pedreiros, e carpinteiros, para lhe edificarem uma casa.
² E entendeu Davi que o Senhor o tinha confirmado rei sobre Israel; porque o seu reino tinha sido muito exaltado por amor do seu povo Israel.
³ E Davi tomou ainda mais mulheres em Jerusalém; e gerou Davi ainda mais filhos e filhas.
⁴ E estes são os nomes dos filhos que teve em Jerusalém: Samua, Sobabe, Natã, Salomão,
⁵ E Ibar, Elisua, Elpelete,
⁶ E Nogá, Nefegue, Jafia,
⁷ E Elisama, Eliada, e Elifelete.
⁸ Ouvindo, pois, os filisteus que Davi havia sido ungido rei sobre todo o Israel, todos os filisteus subiram em busca de Davi; o que ouvindo Davi, logo saiu contra eles.
⁹ E vindo os filisteus, se estenderam pelo vale de Refaim.
¹⁰ Então consultou Davi a Deus, dizendo: Subirei contra os filisteus, e nas minhas mãos os entregarás? E o Senhor lhe disse: Sobe, porque os entregarei nas tuas mãos.
¹¹ E, subindo a Baal-Perazim, Davi ali os feriu; e disse Davi: Por minha mão Deus derrotou a meus inimigos, como se rompem as águas. Por isso chamaram aquele lugar, Baal-Perazim.
¹² E deixaram ali seus deuses; e ordenou Davi que se queimassem a fogo;
¹³ Porém os filisteus tornaram, e se estenderam pelo vale.
¹⁴ E tornou Davi a consultar a Deus; e disse-lhe Deus: Não subirás atrás deles; mas rodeia-os por detrás, e vem a eles por defronte das amoreiras;
¹⁵ E há de ser que, ouvindo tu um ruído de marcha pelas copas das amoreiras, então sairás à peleja; porque Deus terá saído diante de ti, para ferir o exército dos filisteus.
¹⁶ E fez Davi como Deus lhe ordenara; e feriram o exército dos filisteus desde Gibeom até Gezer.
¹⁷ Assim se espalhou o nome de Davi por todas aquelas terras; e o Senhor pôs o temor dele sobre todas aquelas nações.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual sinal Deus deu a Davi para que ele atacasse os filisteus na segunda batalha?",
                        opcoes: [
                            { numero: 1, texto: "Um trovão no céu", correta: false },
                            { numero: 2, texto: "Um estrondo de marcha pelas copas das amoreiras", correta: true },
                            { numero: 3, texto: "Uma chuva de pedras", correta: false },
                            { numero: 4, texto: "O eclipse do sol", correta: false }
                        ],
                        explicacao: "1 Crônicas 14:15 - E há de ser que, ouvindo tu um estrondo de marcha pelas copas das amoreiras, então sai à peleja...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        15: {
            titulo: "A Arca chega a Jerusalém",
            texto: ` ¹ Davi também fez casa para si na cidade de Davi; e preparou um lugar para a arca de Deus, e armou-lhe uma tenda.
² Então disse Davi: Ninguém pode levar a arca de Deus, senão os levitas; porque o Senhor os escolheu, para levar a arca de Deus, e para o servirem eternamente.
³ E Davi convocou a todo o Israel em Jerusalém, para fazer subir a arca do Senhor ao seu lugar, que lhe tinha preparado.
⁴ E Davi reuniu os filhos de Arão e os levitas:
⁵ Dos filhos de Coate: Uriel, o chefe, e de seus irmãos cento e vinte.
⁶ Dos filhos de Merari: Asaías, o chefe, e de seus irmãos duzentos e vinte.
⁷ Dos filhos de Gérson: Joel, o chefe, e de seus irmãos cento e trinta.
⁸ Dos filhos de Elizafã: Semaías, o chefe, e de seus irmãos duzentos.
⁹ Dos filhos de Hebrom: Eliel, o chefe, e de seus irmãos oitenta.
¹⁰ Dos filhos de Uziel: Aminadabe, o chefe, e de seus irmãos cento e doze.
¹¹ E chamou Davi os sacerdotes Zadoque e Abiatar, e os levitas, Uriel, Asaías, Joel, Semaías, Eliel, e Aminadabe.
¹² E disse-lhes: Vós sois os chefes dos pais entre os levitas; santificai-vos, vós e vossos irmãos, para que façais subir a arca do Senhor Deus de Israel, ao lugar que lhe tenho preparado.
¹³ Porquanto vós não a levastes na primeira vez, o Senhor nosso Deus fez rotura em nós, porque não o buscamos segundo a ordenança.
¹⁴ Santificaram-se, pois, os sacerdotes e os levitas, para fazerem subir a arca do Senhor Deus de Israel.
¹⁵ E os filhos dos levitas trouxeram a arca de Deus sobre os seus ombros, pelas varas que nela havia, como Moisés tinha ordenado conforme a palavra do Senhor.
¹⁶ E disse Davi aos chefes dos levitas que constituíssem, de seus irmãos, cantores, para que com instrumentos musicais, com alaúdes, harpas e címbalos, se fizessem ouvir, levantando a voz com alegria.
¹⁷ Designaram, pois, os levitas a Hemã, filho de Joel; e dos seus irmãos, Asafe, filho de Berequias; e dos filhos de Merari, seus irmãos, Etã, filho de Cusaías.
¹⁸ E com eles a seus irmãos da segunda ordem: a Zacarias, Bene, Jaaziel, Semiramote, Jeiel, Uni, Eliabe, Benaia, Maaseias, Matitias, Elifeleu, Micneias, Obede-Edom, e Jeiel, os porteiros.
¹⁹ E os cantores, Hemã, Asafe e Etã, se faziam ouvir com címbalos de metal;
²⁰ E Zacarias, Aziel, Semiramote, Jeiel, Uni, Eliabe, Maaseias, e Benaia, com alaúdes, sobre Alamote:
²¹ E Matitias, Elifeleu, Micneias, Obede-Edom, Jeiel, e Azazias, com harpas, sobre Seminite, para sobressaírem.
²² E Quenanias, chefe dos levitas, tinha o encargo de dirigir o canto; ensinava-os a entoá-lo, porque era entendido.
²³ E Berequias e Elcana eram porteiros da arca.
²⁴ E Sebanias, Jeosafá, Netanel, Amasai, Zacarias, Benaia, e Eliezer, os sacerdotes, tocavam as trombetas perante a arca de Deus; e Obede-Edom e Jeías eram porteiros da arca.
²⁵ Sucedeu, pois, que Davi e os anciãos de Israel, e os capitães dos milhares, foram, com alegria, para fazer subir a arca da aliança do Senhor, da casa de Obede-Edom.
²⁶ E sucedeu que, ajudando Deus os levitas que levavam a arca da aliança do Senhor, sacrificaram sete novilhos e sete carneiros.
²⁷ E Davi ia vestido de um manto de linho fino, como também todos os levitas que levavam a arca, e os cantores, e Quenanias, mestre dos cantores; também Davi levava sobre si um éfode de linho,
²⁸ E todo o Israel fez subir a arca da aliança do Senhor, com júbilo, e ao som de cornetas, e de trombetas, e de címbalos, fazendo ressoar alaúdes e harpas.
²⁹ E sucedeu que, chegando a arca da aliança do Senhor à cidade de Davi, Mical, a filha de Saul, olhou de uma janela, e, vendo a Davi dançar e tocar, o desprezou no seu coração.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Segundo Davi, quem eram os únicos autorizados a levar a Arca de Deus?",
                        opcoes: [
                            { numero: 1, texto: "Os soldados mais fortes", correta: false },
                            { numero: 2, texto: "Os levitas", correta: true },
                            { numero: 3, texto: "O próprio rei", correta: false },
                            { numero: 4, texto: "Qualquer israelita", correta: false }
                        ],
                        explicacao: "1 Crônicas 15:2 - Então disse Davi: Ninguém pode levar a arca de Deus, senão os levitas...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Mical, filha de Saul, sentiu ao ver Davi saltando e alegrando-se diante da Arca?",
                        opcoes: [
                            { numero: 1, texto: "Muita alegria", correta: false },
                            { numero: 2, texto: "Orgulho de seu marido", correta: false },
                            { numero: 3, texto: "Desprezou-o no seu coração", correta: true },
                            { numero: 4, texto: "Medo", correta: false }
                        ],
                        explicacao: "1 Crônicas 15:29 - ...Mical, a filha de Saul... viu ao rei Davi saltando e tocando; e o desprezou no seu coração.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/primeiro_cronicas.js (Parte 4: Capítulos 16-20)

        16: {
            titulo: "O Salmo de Gratidão e o Louvor Contínuo",
            texto: `¹ Trouxeram, pois, a arca de Deus, e a puseram no meio da tenda que Davi lhe tinha armado; e ofereceram holocaustos e sacrifícios pacíficos perante Deus.
² E, acabando Davi de oferecer os holocaustos e sacrifícios pacíficos, abençoou o povo em nome do Senhor.
³ E repartiu a todos em Israel, tanto a homens como a mulheres, a cada um, um pão, e um bom pedaço de carne, e um frasco de vinho.
⁴ E pôs alguns dos levitas por ministros perante a arca do Senhor; isto para recordarem, e louvarem, e celebrarem ao Senhor Deus de Israel.
⁵ Era Asafe, o chefe, e Zacarias o segundo depois dele; Jeiel, e Semiramote, e Jeiel, e Matitias, e Eliabe, e Benaia, e Obede-Edom, e Jeiel, com alaúdes e com harpas; e Asafe se fazia ouvir com címbalos;
⁶ Também Benaia, e Jaaziel, os sacerdotes, continuamente tocavam trombetas, perante a arca da aliança de Deus.
⁷ Então naquele mesmo dia Davi, em primeiro lugar, deu o seguinte salmo para que, pelo ministério de Asafe e de seus irmãos, louvassem ao Senhor;
⁸ Louvai ao Senhor, invocai o seu nome, fazei conhecidas as suas obras entre os povos.
⁹ Cantai-lhe, salmodiai-lhe, atentamente falai de todas as suas maravilhas.
¹⁰ Gloriai-vos no seu santo nome; alegre-se o coração dos que buscam ao Senhor.
¹¹ Buscai ao Senhor e a sua força; buscai a sua face continuamente.
¹² Lembrai-vos das maravilhas que fez, de seus prodígios, e dos juízos da sua boca;
¹³ Vós, semente de Israel, seus servos, vós, filhos de Jacó, seus escolhidos.
¹⁴ Ele é o Senhor nosso Deus; os seus juízos estão em toda a terra.
¹⁵ Lembrai-vos perpetuamente da sua aliança e da palavra que prescreveu para mil gerações;
¹⁶ Da aliança que fez com Abraão, e do seu juramento a Isaque;
¹⁷ O qual também a Jacó confirmou por estatuto, e a Israel por aliança eterna,
¹⁸ Dizendo: A ti te darei a terra de Canaã, quinhão da vossa herança.
¹⁹ Quando eram poucos homens em número, sim, mui poucos, e estrangeiros nela,
²⁰ Quando andavam de nação em nação, e de um reino para outro povo,
²¹ A ninguém permitiu que os oprimisse, e por amor deles repreendeu reis, dizendo:
²² Não toqueis os meus ungidos, e aos meus profetas não façais mal.
²³ Cantai ao Senhor em toda a terra; anunciai de dia em dia a sua salvação.
²⁴ Contai entre as nações a sua glória, entre todos os povos as suas maravilhas.
²⁵ Porque grande é o Senhor, e mui digno de louvor, e mais temível é do que todos os deuses.
²⁶ Porque todos os deuses dos povos são ídolos; porém o Senhor fez os céus.
²⁷ Louvor e majestade há diante dele, força e alegria no seu lugar.
²⁸ Tributai ao Senhor, ó famílias dos povos, tributai ao Senhor glória e força.
²⁹ Tributai ao Senhor a glória de seu nome; trazei presentes, e vinde perante ele; adorai ao Senhor na beleza da sua santidade.
³⁰ Trema perante ele, trema toda a terra; pois o mundo se firmará, para que não se abale.
³¹ Alegrem-se os céus, e regozije-se a terra; e diga-se entre as nações: O Senhor reina.
³² Brame o mar com a sua plenitude; exulte o campo com tudo o que nele há;
³³ Então jubilarão as árvores dos bosques perante o Senhor; porquanto vem julgar a terra.
³⁴ Louvai ao Senhor, porque é bom; pois a sua benignidade dura perpetuamente.
³⁵ E dizei: Salva-nos, ó Deus da nossa salvação, e ajunta-nos, e livra-nos das nações, para que louvemos o teu santo nome, e nos gloriemos no teu louvor.
³⁶ Bendito seja o Senhor Deus de Israel, de eternidade a eternidade. E todo o povo disse: Amém! E louvou ao Senhor.
³⁷ Então Davi deixou ali, diante da arca da aliança do Senhor, a Asafe e a seus irmãos, para ministrarem continuamente perante a arca, segundo se ordenara para cada dia.
³⁸ E mais a Obede-Edom, com seus irmãos, sessenta e oito; a este Obede-Edom, filho de Jedutum, e a Hosa, deixou por porteiros.
³⁹ E deixou a Zadoque, o sacerdote, e a seus irmãos, os sacerdotes, diante do tabernáculo do Senhor, no alto que está em Gibeom,
⁴⁰ Para oferecerem holocaustos ao Senhor continuamente, pela manhã e à tarde, sobre o altar dos holocaustos; e isto segundo tudo o que está escrito na lei do Senhor que tinha prescrito a Israel.
⁴¹ E com eles a Hemã, e a Jedutum, e aos mais escolhidos, que foram apontados pelos seus nomes, para louvarem ao Senhor, porque a sua benignidade dura perpetuamente.
⁴² Com eles, pois, estavam Hemã e Jedutum, com trombetas e címbalos, para os que haviam de tocar, e com outros instrumentos de música de Deus; porém os filhos de Jedutum estavam à porta.
⁴³ Então todo o povo se retirou, cada um para a sua casa; e voltou Davi, para abençoar a sua casa.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Davi repartiu a todo o Israel, tanto a homens quanto a mulheres, após colocar a Arca na tenda?",
                        opcoes: [
                            { numero: 1, texto: "Moedas de ouro", correta: false },
                            { numero: 2, texto: "Um pão, um pedaço de carne e um frasco de vinho (ou passas)", correta: true },
                            { numero: 3, texto: "Túnicas brancas", correta: false },
                            { numero: 4, texto: "Espadas e escudos", correta: false }
                        ],
                        explicacao: "1 Crônicas 16:3 - E repartiu a todos em Israel... a cada um um pão, e um bom pedaço de carne, e um frasco de vinho.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "A quem Davi entregou, pela primeira vez, o salmo para louvar ao Senhor?",
                        opcoes: [
                            { numero: 1, texto: "A Joabe", correta: false },
                            { numero: 2, texto: "A Salomão", correta: false },
                            { numero: 3, texto: "A Asafe e a seus irmãos", correta: true },
                            { numero: 4, texto: "Aos sacerdotes de Gate", correta: false }
                        ],
                        explicacao: "1 Crônicas 16:7 - Então naquele dia Davi entregou pela primeira vez este salmo para louvarem ao Senhor, pelo ministério de Asafe e de seus irmãos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        17: {
            titulo: "A Aliança de Deus com Davi",
            texto: `¹ Sucedeu, pois, que, morando Davi já em sua casa, disse Davi ao profeta Natã: Eis que moro em casa de cedro, mas a arca da aliança do Senhor está debaixo de cortinas.
² Então Natã disse a Davi: Tudo quanto tens no teu coração faze, porque Deus é contigo.
³ Mas sucedeu, na mesma noite, que a palavra de Deus veio a Natã, dizendo:
⁴ Vai, e dize a Davi meu servo: Assim diz o Senhor: Tu não me edificarás uma casa para eu morar;
⁵ Porque em casa nenhuma morei, desde o dia em que fiz subir a Israel até ao dia de hoje; mas fui de tenda em tenda, e de tabernáculo em tabernáculo.
⁶ Por todas as partes por onde andei com todo o Israel, porventura falei alguma palavra a algum dos juízes de Israel, a quem ordenei que apascentasse o meu povo, dizendo: Por que não me edificais uma casa de cedro?
⁷ Agora, pois, assim dirás a meu servo Davi: Assim diz o Senhor dos Exércitos: Eu te tirei do curral, de detrás das ovelhas, para que fosses chefe do meu povo Israel.
⁸ E estive contigo por toda a parte, por onde foste, e de diante de ti exterminei todos os teus inimigos, e te fiz um nome como o nome dos grandes que estão na terra,
⁹ E ordenarei um lugar para o meu povo Israel, e o plantarei, para que habite no seu lugar, e nunca mais seja removido de uma para outra parte; e nunca mais os filhos da perversidade o debilitarão como dantes,
¹⁰ E desde os dias em que ordenei juízes sobre o meu povo Israel. Assim abaterei a todos os teus inimigos; também te faço saber que o Senhor te edificará uma casa.
¹¹ E há de ser que, quando forem cumpridos os teus dias, para ires a teus pais, suscitarei a tua descendência depois de ti, um dos teus filhos, e estabelecerei o seu reino.
¹² Este me edificará casa; e eu confirmarei o seu trono para sempre.
¹³ Eu lhe serei por pai, e ele me será por filho; e a minha benignidade não retirarei dele, como a tirei daquele, que foi antes de ti.
¹⁴ Mas o confirmarei na minha casa e no meu reino para sempre, e o seu trono será firme para sempre.
¹⁵ Conforme todas estas palavras, e conforme toda esta visão, assim falou Natã a Davi.
¹⁶ Então entrou o rei Davi, e ficou perante o Senhor; e disse: Quem sou eu, Senhor Deus? E qual é a minha casa, para que me tenhas trazido até aqui?
¹⁷ E ainda isto, ó Deus, foi pouco aos teus olhos; pelo que falaste da casa de teu servo para tempos distantes; e trataste-me como a um homem ilustre, ó Senhor Deus.
¹⁸ Que mais te dirá Davi, acerca da honra feita a teu servo? Porém tu conheces bem a teu servo.
¹⁹ Ó Senhor, por amor de teu servo, e segundo o teu coração, fizeste toda esta grandeza, para fazer notória todas estas grandes coisas.
²⁰ Senhor, ninguém há como tu, e não há Deus fora de ti, segundo tudo quanto ouvimos com os nossos ouvidos.
²¹ E quem há como o teu povo Israel, única gente na terra, a quem Deus foi resgatar para seu povo, fazendo-te nome com coisas grandes e temerosas, lançando as nações de diante do teu povo, que resgataste do Egito?
²² E confirmaste o teu povo Israel para ser teu povo para sempre; e tu, Senhor, lhe foste por Deus.
²³ Agora, pois, Senhor, a palavra que falaste de teu servo, e acerca da sua casa, confirma-a para sempre; e faze como falaste.
²⁴ Confirme-se e engrandeça-se o teu nome para sempre, e diga-se: O Senhor dos Exércitos é o Deus de Israel, é Deus para Israel; e permaneça firme diante de ti a casa de Davi, teu servo.
²⁵ Porque tu, Deus meu, revelaste ao ouvido de teu servo que lhe edificarias casa; pelo que o teu servo achou confiança para orar em tua presença.
²⁶ Agora, pois, Senhor, tu és o mesmo Deus, e falaste este bem acerca de teu servo.
²⁷ Agora, pois, foste servido abençoar a casa de teu servo, para que permaneça para sempre diante de ti: porque tu, Senhor, a abençoaste, e ficará abençoada para sempre.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual era o desejo de Davi que o profeta Natã inicialmente aprovou, mas Deus redirecionou?",
                        opcoes: [
                            { numero: 1, texto: "Conquistar o Egito", correta: false },
                            { numero: 2, texto: "Edificar uma casa (Templo) para o Senhor", correta: true },
                            { numero: 3, texto: "Casar-se novamente", correta: false },
                            { numero: 4, texto: "Escrever um livro de leis", correta: false }
                        ],
                        explicacao: "1 Crônicas 17:1 - ...Eis que eu moro em casa de cedro, mas a arca da aliança do Senhor está debaixo de cortinas.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Deus prometeu a Davi através do profeta Natã?",
                        opcoes: [
                            { numero: 1, texto: "Que ele viveria mil anos", correta: false },
                            { numero: 2, texto: "Que ele nunca teria inimigos", correta: false },
                            { numero: 3, texto: "Que Deus edificaria a casa de Davi e confirmaria seu trono para sempre", correta: true },
                            { numero: 4, texto: "Que ele seria o último rei de Israel", correta: false }
                        ],
                        explicacao: "1 Crônicas 17:14 - Mas o confirmarei na minha casa e no meu reino para sempre, e o seu trono será firme para sempre.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        18: {
            titulo: "As Vitórias e o Governo de Davi",
            texto: ` ¹ E depois disto aconteceu que Davi derrotou os filisteus, e os sujeitou; e tomou a Gate, e os lugares da sua jurisdição, da mão dos filisteus.
² Também derrotou os moabitas; e os moabitas ficaram por servos de Davi, pagando tributos.
³ Também Davi derrotou a Hadar-Ezer, rei de Zobá, junto a Hamate, quando ele ia estabelecer o seu domínio sobre o rio Eufrates.
⁴ E Davi lhe tomou mil carros, e sete mil cavaleiros, e vinte mil homens de pé; e Davi jarretou todos os cavalos dos carros; porém reservou deles para cem carros.
⁵ E vieram os sírios de Damasco a socorrer a Hadar-Ezer, rei de Zobá; porém Davi feriu dos sírios vinte e dois mil homens.
⁶ E Davi pôs guarnições na Síria de Damasco, e os sírios ficaram por servos de Davi, pagando-lhe tributo; e o Senhor guardava a Davi, por onde quer que ia.
⁷ E Davi tomou os escudos de ouro, que tinham os servos de Hadar-Ezer, e os trouxe a Jerusalém.
⁸ Também de Tibate, e de Cum, cidades de Hadar-Ezer, tomou Davi muitíssimo cobre, de que Salomão fez o mar de cobre, e as colunas, e os utensílios de cobre.
⁹ E ouvindo Toí, rei de Hamate, que Davi destruíra todo o exército de Hadar-Ezer, rei de Zobá,
¹⁰ Mandou seu filho Hadorão a Davi, para lhe perguntar como estava, e para o abençoar, por haver pelejado contra Hadar-Ezer, e por havê-lo ferido (porque Hadar-Ezer fazia guerra a Toí), enviando-lhe também toda a sorte de vasos de ouro, e de prata, e de cobre.
¹¹ Os quais Davi também consagrou ao Senhor, juntamente com a prata e ouro que trouxera de todas as demais nações: dos edomeus, e dos moabitas, e dos filhos de Amom, e dos filisteus, e dos amalequitas.
¹² Também Abisai, filho de Zeruia, feriu a dezoito mil edomeus no Vale do Sal.
¹³ E pôs guarnições em Edom, e todos os edomeus ficaram por servos de Davi; e o Senhor guardava a Davi, por onde quer que ia.
¹⁴ E Davi reinou sobre todo o Israel; e fazia juízo e justiça a todo o seu povo.
¹⁵ E Joabe, filho de Zeruia, comandava o exército; Jeosafá, filho de Ailude, era cronista.
¹⁶ E Zadoque, filho de Aitube, e Abimeleque, filho de Abiatar, eram sacerdotes; e Savsa escrivão.
¹⁷ E Benaia, filho de Joiada, estava sobre os quereteus e peleteus; porém os filhos de Davi eram os primeiros junto ao rei.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Davi fez com o ouro, a prata e o bronze tomados das nações conquistadas?",
                        opcoes: [
                            { numero: 1, texto: "Consagrou ao Senhor para o futuro Templo", correta: true },
                            { numero: 2, texto: "Distribuiu entre seus soldados", correta: false },
                            { numero: 3, texto: "Fez uma estátua de si mesmo", correta: false },
                            { numero: 4, texto: "Enterrou no deserto", correta: false }
                        ],
                        explicacao: "1 Crônicas 18:11 - Também estes o rei Davi consagrou ao Senhor, com a prata e o ouro que trouxera de todas as nações...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        19: {
            titulo: "A Guerra contra os Amonitas e Sírios",
            texto: ` ¹ E aconteceu, depois disto que Naás, rei dos filhos de Amom, morreu; e seu filho reinou em seu lugar.
² Então disse Davi: Usarei de benevolência com Hanum, filho de Naás, porque seu pai usou de benevolência comigo. Por isso Davi enviou mensageiros para o consolarem acerca de seu pai. E, chegando os servos de Davi à terra dos filhos de Amom, a Hanum, para o consolarem,
³ Disseram os príncipes dos filhos de Amom a Hanum: Pensas, porventura, que foi para honrar teu pai aos teus olhos, que Davi te mandou consoladores? Não vieram seus servos a ti, a esquadrinhar, e a transtornar, e a espiar a terra?
⁴ Por isso Hanum tomou os servos de Davi, e raspou-os, e cortou-lhes as vestes no meio até à coxa da perna, e os despediu.
⁵ E foram-se, e avisaram a Davi acerca daqueles homens; e enviou ele mensageiros a encontrá-los; porque aqueles homens estavam sobremaneira envergonhados. Disse, pois, o rei: Deixai-vos ficar em Jericó, até que vos torne a crescer a barba, e então voltai.
⁶ Vendo, pois, os filhos de Amom que se tinham feito odiosos para com Davi, enviou Hanum, e os filhos de Amom, mil talentos de prata para alugarem para si carros e cavaleiros da Mesopotâmia, e da Síria de Maaca, e de Zobá.
⁷ E alugaram para si trinta e dois mil carros, e o rei de Maaca e o seu povo, e eles vieram, e se acamparam diante de Medeba; também os filhos de Amom se ajuntaram das suas cidades, e vieram para a guerra.
⁸ O que ouvindo Davi, enviou Joabe e todo o exército dos homens valentes.
⁹ E, saindo os filhos de Amom, ordenaram a batalha à porta da cidade; porém os reis que vieram se puseram à parte no campo.
¹⁰ E, vendo Joabe que a batalha estava preparada contra ele, pela frente e pela retaguarda, separou dentre os mais escolhidos de Israel, e os ordenou contra os sírios.
¹¹ E o resto do povo entregou na mão de Abisai, seu irmão; e puseram-se em ordem de batalha contra os filhos de Amom.
¹² E disse: Se os sírios forem mais fortes do que eu, tu virás socorrer-me; e, se os filhos de Amom forem mais fortes do que tu, então eu te socorrerei.
¹³ Esforça-te, e esforcemo-nos pelo nosso povo, e pelas cidades do nosso Deus, e faça o Senhor o que parecer bem aos seus olhos.
¹⁴ Então se chegou Joabe, e o povo que tinha consigo, diante dos sírios, para a batalha; e fugiram de diante dele.
¹⁵ Vendo, pois, os filhos de Amom que os sírios fugiram, também eles fugiram de diante de Abisai, seu irmão, e entraram na cidade; e veio Joabe para Jerusalém.
¹⁶ E, vendo os sírios que foram derrotados diante de Israel, enviaram mensageiros, e fizeram sair os sírios que habitavam do outro lado do rio; e Sofaque, capitão do exército de Hadar-Ezer, marchava diante deles.
¹⁷ Do que avisado Davi, ajuntou a todo o Israel, e passou o Jordão, e foi ter com eles, e ordenou contra eles a batalha; e, tendo Davi ordenado a batalha contra os sírios, pelejaram contra ele.
¹⁸ Porém os sírios fugiram de diante de Israel, e feriu Davi, dos sírios, os homens de sete mil carros, e quarenta mil homens de pé; e a Sofaque, capitão do exército, matou.
¹⁹ Vendo, pois, os servos de Hadar-Ezer que tinham sido feridos diante de Israel, fizeram paz com Davi, e o serviram; e os sírios nunca mais quiseram socorrer os filhos de Amom.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como os príncipes dos amonitas humilharam os mensageiros de paz enviados por Davi?",
                        opcoes: [
                            { numero: 1, texto: "Prenderam-nos em celas", correta: false },
                            { numero: 2, texto: "Roubaram seus cavalos", correta: false },
                            { numero: 3, texto: "Cortaram-lhes as vestes pelo meio e rasparam-lhes metade da barba", correta: true },
                            { numero: 4, texto: "Obrigaram-nos a trabalhar no campo", correta: false }
                        ],
                        explicacao: "1 Crônicas 19:4 - Pelo que Hanum tomou os servos de Davi, e os rapou, e lhes cortou as vestes pelo meio... e os despediu.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        20: {
            titulo: "A Queda de Rabá e a Morte dos Gigantes",
            texto: ` ¹ Aconteceu que, no decurso de um ano, no tempo em que os reis costumam sair para a guerra, Joabe levou as forças do exército, e destruiu a terra dos filhos de Amom, e veio, e cercou a Rabá; porém Davi ficou em Jerusalém; e Joabe feriu a Rabá, e a destruiu.
² E Davi tirou a coroa da cabeça do rei deles, e achou nela o peso de um talento de ouro, e havia nela pedras preciosas; e foi posta sobre a cabeça de Davi; e levou da cidade mui grande despojo.
³ Também levou o povo que estava nela, e os fez trabalhar com a serra, e com talhadeiras de ferro e com machados; e assim fez Davi com todas as cidades dos filhos de Amom; então voltou Davi, com todo o povo, para Jerusalém.
⁴ E, depois disto, aconteceu que, levantando-se guerra em Gezer, com os filisteus, então Sibecai, o husatita, feriu a Sipai, dos filhos do gigante; e ficaram subjugados.
⁵ E tornou a haver guerra com os filisteus; e El-Hanã, filho de Jair, feriu a Lami, irmão de Golias, o giteu, cuja haste da lança era como eixo de tecelão.
⁶ E houve ainda outra guerra em Gate; onde havia um homem de grande estatura, e tinha vinte e quatro dedos, seis em cada mão, e seis em cada pé, e que também era filho do gigante.
⁷ E injuriou a Israel; porém Jônatas, filho de Simei, irmão de Davi, o feriu;
⁸ Estes nasceram ao gigante em Gate; e caíram pela mão de Davi e pela mão dos seus servos.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual era a característica física incomum do gigante de Gate que foi morto por Jonatã, sobrinho de Davi?",
                        opcoes: [
                            { numero: 1, texto: "Tinha três olhos", correta: false },
                            { numero: 2, texto: "Tinha seis dedos em cada mão e em cada pé (vinte e quatro ao todo)", correta: true },
                            { numero: 3, texto: "Era feito de bronze", correta: false },
                            { numero: 4, texto: "Tinha asas", correta: false }
                        ],
                        explicacao: "1 Crônicas 20:6 - ...havia um homem de grande estatura, e tinha vinte e quatro dedos, seis em cada mão, e seis em cada pé...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/primeiro_cronicas.js (Parte Final: Capítulos 21-29)

        21: {
            titulo: "O Censo e a Eira de Ornã",
            texto: ` ¹ Então Satanás se levantou contra Israel, e incitou Davi a numerar a Israel.
² E disse Davi a Joabe e aos maiorais do povo: Ide, numerai a Israel, desde Berseba até Dã; e trazei-me a conta para que saiba o número deles.
³ Então disse Joabe: O Senhor acrescente ao seu povo cem vezes tanto como é; porventura, ó rei meu senhor, não são todos servos de meu senhor? Por que procura isto o meu senhor? Porque seria isto causa de delito para com Israel.
⁴ Porém a palavra do rei prevaleceu contra Joabe; por isso saiu Joabe, e passou por todo o Israel; então voltou para Jerusalém.
⁵ E Joabe deu a Davi a soma do número do povo; e era todo o Israel um milhão e cem mil homens, dos que arrancavam da espada; e de Judá quatrocentos e setenta mil homens, dos que arrancavam da espada.
⁶ Porém os de Levi e Benjamim não contou entre eles, porque a palavra do rei foi abominável a Joabe.
⁷ E este negócio também pareceu mau aos olhos de Deus; por isso feriu a Israel.
⁸ Então disse Davi a Deus: Gravemente pequei em fazer este negócio; porém agora sê servido tirar a iniquidade de teu servo, porque procedi mui loucamente.
⁹ Falou, pois, o Senhor a Gade, o vidente de Davi, dizendo:
¹⁰ Vai, e fala a Davi, dizendo: Assim diz o Senhor: Três coisas te proponho; escolhe uma delas, para que eu ta faça.
¹¹ E Gade veio a Davi, e lhe disse: Assim diz o Senhor: Escolhe para ti,
¹² Ou três anos de fome, ou que três meses sejas consumido diante dos teus adversários, e a espada de teus inimigos te alcance, ou que três dias a espada do Senhor, isto é, a peste na terra, e o anjo do Senhor destrua todos os termos de Israel; vê, pois, agora, que resposta hei de levar a quem me enviou.
¹³ Então disse Davi a Gade: Estou em grande angústia; caia eu, pois, nas mãos do Senhor, porque são muitíssimas as suas misericórdias; mas que eu não caia nas mãos dos homens.
¹⁴ Mandou, pois, o Senhor a peste a Israel; e caíram de Israel setenta mil homens.
¹⁵ E Deus mandou um anjo a Jerusalém para a destruir; e, destruindo-a ele, o Senhor olhou, e se arrependeu daquele mal, e disse ao anjo destruidor: Basta, agora retira a tua mão. E o anjo do Senhor estava junto à eira de Ornã, o jebuseu.
¹⁶ E, levantando Davi os seus olhos, viu o anjo do Senhor, que estava entre a terra e o céu, com a sua espada desembainhada na sua mão estendida contra Jerusalém; então Davi e os anciãos, cobertos de sacos, se prostraram sobre os seus rostos.
¹⁷ E disse Davi a Deus: Não sou eu o que disse que se contasse o povo? E eu mesmo sou o que pequei, e fiz muito mal; mas estas ovelhas que fizeram? Ah! Senhor, meu Deus, seja a tua mão contra mim, e contra a casa de meu pai, e não para castigo de teu povo.
¹⁸ Então o anjo do Senhor ordenou a Gade que dissesse a Davi para subir e levantar um altar ao Senhor na eira de Ornã, o jebuseu.
¹⁹ Subiu, pois, Davi, conforme a palavra de Gade, que falara em nome do Senhor.
²⁰ E, virando-se Ornã, viu o anjo, e esconderam-se seus quatro filhos que estavam com ele; e Ornã estava trilhando o trigo.
²¹ E Davi veio a Ornã; e olhou Ornã, e viu a Davi, e saiu da eira, e se prostrou perante Davi com o rosto em terra.
²² E disse Davi a Ornã: Dá-me este lugar da eira, para edificar nele um altar ao Senhor; dá-mo pelo seu valor, para que cesse este castigo sobre o povo.
²³ Então disse Ornã a Davi: Toma-o para ti, e faça o rei meu senhor dele o que parecer bem aos seus olhos; eis que dou os bois para holocaustos, e os trilhos para lenha, e o trigo para oferta de alimentos; tudo dou.
²⁴ E disse o rei Davi a Ornã: Não, antes, pelo seu valor, a quero comprar; porque não tomarei o que é teu, para o Senhor, para que não ofereça holocausto sem custo.
²⁵ E Davi deu a Ornã, por aquele lugar, o peso de seiscentos siclos de ouro.
²⁶ Então Davi edificou ali um altar ao Senhor, e ofereceu nele holocaustos e sacrifícios pacíficos; e invocou o Senhor, o qual lhe respondeu com fogo do céu sobre o altar do holocausto.
²⁷ E o Senhor deu ordem ao anjo, e ele tornou a sua espada à bainha.
²⁸ Vendo Davi, no mesmo tempo, que o Senhor lhe respondera na eira de Ornã, o jebuseu, sacrificou ali.
²⁹ Porque o tabernáculo do Senhor, que Moisés fizera no deserto, e o altar do holocausto, estavam naquele tempo no alto de Gibeom.
³⁰ E não podia Davi ir perante ele consultar a Deus; porque estava aterrorizado por causa da espada do anjo do Senhor.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem incitou Davi a numerar a Israel, cometendo um pecado de orgulho?",
                        opcoes: [
                            { numero: 1, texto: "O profeta Natã", correta: false },
                            { numero: 2, texto: "Satanás", correta: true },
                            { numero: 3, texto: "Joabe", correta: false },
                            { numero: 4, texto: "O rei do Egito", correta: false }
                        ],
                        explicacao: "1 Crônicas 21:1 - Então Satanás se levantou contra Israel, e incitou Davi a numerar a Israel.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Davi comprou de Ornã, o jebuseu, para edificar ali um altar ao Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Um palácio", correta: false },
                            { numero: 2, texto: "Uma carruagem de ouro", correta: false },
                            { numero: 3, texto: "A eira, pelo preço de seiscentos siclos de ouro", correta: true },
                            { numero: 4, texto: "Um rebanho de ovelhas", correta: false }
                        ],
                        explicacao: "1 Crônicas 21:25 - E Davi deu a Ornã por aquele lugar o peso de seiscentos siclos de ouro.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        22: {
            titulo: "Preparativos para o Templo",
            texto: ` ¹ E disse Davi: Esta será a casa do Senhor Deus, e este será o altar do holocausto para Israel.
² E deu ordem Davi que se ajuntassem os estrangeiros que estavam na terra de Israel; e ordenou cortadores de pedras, para que lavrassem pedras de cantaria, para edificar a casa de Deus.
³ E aparelhou Davi ferro em abundância, para os pregos das portas das entradas, e para as junturas; como também cobre em abundância, que não foi pesado;
⁴ E madeira de cedro sem conta; porque os sidônios e tírios traziam a Davi madeira de cedro em abundância.
⁵ Porque dizia Davi: Salomão, meu filho, ainda é moço e tenro, e a casa que se há de edificar para o Senhor deve ser magnífica em excelência, para nome e glória em todas as terras; eu, pois, agora lhe prepararei materiais. Assim preparou Davi materiais em abundância, antes da sua morte.
⁶ Então chamou a Salomão seu filho, e lhe ordenou que edificasse uma casa ao Senhor Deus de Israel.
⁷ E disse Davi a Salomão: Filho meu, quanto a mim, tive em meu coração o propósito de edificar uma casa ao nome do Senhor meu Deus.
⁸ Porém, veio a mim a palavra do Senhor, dizendo: Tu derramaste sangue em abundância, e fizeste grandes guerras; não edificarás casa ao meu nome; porquanto muito sangue tens derramado na terra, perante mim.
⁹ Eis que o filho que te nascer será homem de repouso; porque repouso lhe hei de dar de todos os seus inimigos ao redor; portanto, Salomão será o seu nome, e paz e descanso darei a Israel nos seus dias.
¹⁰ Ele edificará uma casa ao meu nome, e me será por filho, e eu lhe serei por pai, e confirmarei o trono de seu reino sobre Israel, para sempre.
¹¹ Agora, pois, meu filho, o Senhor seja contigo; e prospera, e edifica a casa do Senhor teu Deus, como ele disse de ti.
¹² O Senhor te dê tão somente prudência e entendimento, e te instrua acerca de Israel; e isso para guardar a lei do Senhor teu Deus.
¹³ Então prosperarás, se tiveres cuidado de cumprir os estatutos e os juízos, que o Senhor mandou a Moisés acerca de Israel; esforça-te, e tem bom ânimo; não temas, nem tenhas pavor.
¹⁴ Eis que na minha aflição preparei para a casa do Senhor cem mil talentos de ouro, e um milhão de talentos de prata, e de cobre e de ferro que não se pesou, porque era em abundância; também madeira e pedras preparei, e tu suprirás o que faltar.
¹⁵ Também tens contigo obreiros em grande número, cortadores e artífices em obra de pedra e madeira; e toda a sorte de peritos em toda a espécie de obra.
¹⁶ Do ouro, da prata, e do cobre, e do ferro não há conta. Levanta-te, pois, e faze a obra, e o Senhor seja contigo.
¹⁷ E Davi deu ordem a todos os príncipes de Israel que ajudassem a Salomão, seu filho, dizendo:
¹⁸ Porventura não está convosco o Senhor vosso Deus, e não vos deu repouso ao redor? Porque entregou na minha mão os moradores da terra; e a terra foi sujeita perante o Senhor e perante o seu povo.
¹⁹ Disponde, pois, agora o vosso coração e a vossa alma para buscardes ao Senhor vosso Deus; e levantai-vos, e edificai o santuário do Senhor Deus, para que a arca da aliança do Senhor, e os vasos sagrados de Deus se tragam a esta casa, que se há de edificar ao nome do Senhor.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual motivo Deus deu a Davi para ele não edificar o Templo, deixando a tarefa para seu filho?",
                        opcoes: [
                            { numero: 1, texto: "Porque Davi era muito pobre", correta: false },
                            { numero: 2, texto: "Porque Davi derramou muito sangue e fez grandes guerras", correta: true },
                            { numero: 3, texto: "Porque Davi não sabia construir", correta: false },
                            { numero: 4, texto: "Porque o Templo deveria ser no deserto", correta: false }
                        ],
                        explicacao: "1 Crônicas 22:8 - ...Tu derramaste sangue em abundância e fizeste grandes guerras; não edificarás casa ao meu nome...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        23: {
            titulo: "As Funções dos Levitas",
            texto: `¹ Sendo, pois, Davi já velho, e cheio de dias, fez a Salomão, seu filho, rei sobre Israel.
² E reuniu a todos os príncipes de Israel, como também aos sacerdotes e levitas.
³ E foram contados os levitas de trinta anos para cima; e foi o número deles, segundo as suas cabeças, trinta e oito mil homens.
⁴ Destes havia vinte e quatro mil, para promoverem a obra da casa do Senhor, e seis mil oficiais e juízes,
⁵ E quatro mil porteiros, e quatro mil para louvarem ao Senhor com os instrumentos, que eu fiz para o louvar, disse Davi.
⁶ E Davi os repartiu por turnos, segundo os filhos de Levi, Gérson, Coate e Merari.
⁷ Dos gersonitas: Ladã e Simei.
⁸ Os filhos de Ladã: Jeiel, o chefe, e Zetã, e Joel, três.
⁹ Os filhos de Simei: Selomite, Haziel, e Harã, três; estes foram os chefes dos pais de Ladã.
¹⁰ E os filhos de Simei: Jaate, Ziza, Jeús, e Berias; estes foram os filhos de Simei, quatro.
¹¹ E Jaate era o chefe, e Ziza o segundo, mas Jeús e Berias não tiveram muitos filhos; por isso estes, sendo contados juntos se tornaram uma só família.
¹² Os filhos de Coate: Anrão, Izar, Hebrom, e Uziel, quatro.
¹³ Os filhos de Anrão: Arão e Moisés; e Arão foi separado para santificar o santo dos santos, ele e seus filhos, eternamente; para incensar diante do Senhor, para o servirem, e para darem a bênção em seu nome eternamente.
¹⁴ E, quanto a Moisés, homem de Deus, seus filhos foram contados entre os da tribo de Levi.
¹⁵ Foram, pois, os filhos de Moisés, Gérson e Eliézer.
¹⁶ Dos filhos de Gérson foi Sebuel o chefe.
¹⁷ E, quanto aos filhos de Eliézer, foi Reabias o chefe; e Eliézer não teve outros filhos; porém os filhos de Reabias foram muitos.
¹⁸ Dos filhos de Izar foi Selomite o chefe.
¹⁹ Quanto aos filhos de Hebrom, foram Jerias o primeiro, Amarias o segundo, Jaaziel o terceiro, e Jecameão o quarto.
²⁰ Quanto aos filhos de Uziel, Mica o chefe, e Issias o segundo.
²¹ Os filhos de Merari: Mali, e Musi; os filhos de Mali: Eleazar e Quis.
²² E morreu Eleazar, e não teve filhos, porém filhas; e os filhos de Quis, seus parentes, as tomaram por mulheres.
²³ Os filhos de Musi: Mali, e Eder, e Jeremote, três.
²⁴ Estes são os filhos de Levi, segundo a casa de seus pais, chefes dos pais, conforme foram contados pelos seus nomes, segundo as suas cabeças, que faziam a obra do ministério da casa do Senhor, desde a idade de vinte anos para cima.
²⁵ Porque disse Davi: O Senhor Deus de Israel deu repouso ao seu povo, e habitará em Jerusalém para sempre.
²⁶ E também, quanto aos levitas, que nunca mais levassem o tabernáculo, nem algum de seus aparelhos pertencentes ao seu ministério.
²⁷ Porque, segundo as últimas palavras de Davi, foram contados os filhos de Levi da idade de vinte anos para cima:
²⁸ Porque o seu cargo era assistir aos filhos de Arão no ministério da casa do Senhor, nos átrios, e nas câmaras, e na purificação de todas as coisas sagradas, e na obra do ministério da casa de Deus.
²⁹ A saber: para os pães da proposição, e para a flor de farinha, para a oferta de alimentos, e para os coscorões ázimos, e para as sertãs, e para o tostado, e para todo o peso e medida;
³⁰ E para estarem cada manhã em pé para louvarem e celebrarem ao Senhor; e semelhantemente à tarde;
³¹ E para oferecerem os holocaustos do Senhor, aos sábados, nas luas novas, e nas solenidades, segundo o seu número e costume, continuamente perante o Senhor;
³² E para que tivessem cuidado da guarda da tenda da congregação, e da guarda do santuário, e da guarda dos filhos de Arão, seus irmãos, no ministério da casa do Senhor.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "A partir de qual idade os levitas começaram a servir na obra do ministério da casa do Senhor?",
                        opcoes: [
                            { numero: 1, texto: "De vinte anos para cima", correta: true },
                            { numero: 2, texto: "De cinquenta anos para cima", correta: false },
                            { numero: 3, texto: "Apenas aos trinta anos", correta: false },
                            { numero: 4, texto: "Desde o nascimento", correta: false }
                        ],
                        explicacao: "1 Crônicas 23:24 - ...que faziam a obra do ministério... da idade de vinte anos para cima.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        24: {
            titulo: "As Turmas dos Sacerdotes",
            texto: ` E quanto aos filhos de Arão, estas foram as suas divisões: os filhos de Arão: Nadabe, Abiú, Eleazar e Itamar.
² E morreram Nadabe e Abiú antes de seu pai, e não tiveram filhos; e Eleazar e Itamar administravam o sacerdócio.
³ E Davi, com Zadoque, dos filhos de Eleazar, e Aimeleque, dos filhos de Itamar, dividiu-os segundo o seu ofício no seu ministério.
⁴ E acharam-se muito mais chefes dos pais entre os filhos de Eleazar do que entre os filhos de Itamar, quando os repartiram; dos filhos de Eleazar dezesseis chefes das casas paternas, mas dos filhos de Itamar, segundo as casas paternas, oito.
⁵ E os repartiram por sortes, uns com os outros; porque houve governadores do santuário e governadores da casa de Deus, assim dentre os filhos de Eleazar, como dentre os filhos de Itamar.
⁶ E Semaías, filho de Natanael, o escrivão dentre os levitas, os registrou perante o rei, e os príncipes, e Zadoque, o sacerdote, e Aimeleque, filho de Abiatar, e os chefes dos pais entre os sacerdotes, e entre os levitas; dentre as casas dos pais tomou-se uma para Eleazar, e outra para Itamar.
⁷ E saiu a primeira sorte a Jeoiaribe, a segunda a Jedaías,
⁸ A terceira a Harim, a quarta a Seorim,
⁹ A quinta a Malquias, a sexta a Miamim,
¹⁰ A sétima a Hacoz, a oitava a Abias,
¹¹ A nona a Jesua, a décima a Secanias,
¹² A undécima a Eliasibe, a duodécima a Jaquim,
¹³ A décima terceira a Hupa, a décima quarta a Jesebeabe,
¹⁴ A décima quinta a Bilga, a décima sexta a Imer,
¹⁵ A décima sétima a Hezir, a décima oitava a Hapizes,
¹⁶ A décima nona a Petaías, a vigésima a Jeezquel,
¹⁷ A vigésima primeira a Jaquim, a vigésima segunda a Gamul,
¹⁸ A vigésima terceira a Delaías, a vigésima quarta a Maazias.
¹⁹ O ofício destes no seu ministério era entrar na casa do Senhor, segundo lhes fora ordenado por Arão seu pai, como o Senhor Deus de Israel lhe tinha mandado.
²⁰ E do restante dos filhos de Levi: dos filhos de Anrão, Subael; dos filhos de Subael, Jedias.
²¹ Quanto a Reabias: dos filhos de Reabias, Issias era o primeiro;
²² Dos izaritas, Selomote; dos filhos de Selomote, Jaate;
²³ E dos filhos de Hebrom, Jerias o primeiro, Amarias o segundo, Jaaziel o terceiro, Jecameão o quarto;
²⁴ Dos filhos de Uziel, Mica; dos filhos de Mica, Samir;
²⁵ O irmão de Mica, Issias; dos filhos de Issias, Zacarias;
²⁶ Os filhos de Merari, Mali e Musi; dos filhos de Jaazias, Beno;
²⁷ Os filhos de Merari: de Jaazias, Beno, e Soão, e Zacur, e Ibri;
²⁸ De Mali, Eleazar; e este não teve filhos.
²⁹ Quanto a Quis: dos filhos de Quis, Jerameel;
³⁰ E os filhos de Musi: Mali, e Eder, e Jerimote; estes foram os filhos dos levitas, segundo as suas casas paternas.
³¹ Estes também lançaram sortes como seus irmãos, os filhos de Arão, perante o rei Davi, e Zadoque, e Aimeleque, e os chefes das famílias entre os sacerdotes e entre os levitas; assim fizeram, tanto os pais principais como os irmãos menores.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como foram divididos os filhos de Arão para o serviço do santuário?",
                        opcoes: [
                            { numero: 1, texto: "Por votação popular", correta: false },
                            { numero: 2, texto: "Por sorteio (sortes)", correta: true },
                            { numero: 3, texto: "Pela altura de cada um", correta: false },
                            { numero: 4, texto: "Por ordem de riqueza", correta: false }
                        ],
                        explicacao: "1 Crônicas 24:5 - E os repartiram por sortes, uns com os outros...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        25: {
            titulo: "Os Músicos do Templo",
            texto: `¹ E Davi, juntamente com os capitães do exército, separou para o ministério os filhos de Asafe, e de Hemã, e de Jedutum, para profetizarem com harpas, com címbalos, e com saltérios; e este foi o número dos homens aptos para a obra do seu ministério:
² Dos filhos de Asafe: Zacur, José, Netanias, e Asarela, filhos de Asafe; a cargo de Asafe, que profetizava debaixo das ordens do rei Davi.
³ Quanto a Jedutum, os filhos: Gedalias, Zeri, Jesaías, Hasabias, e Matitias, seis, a cargo de seu pai, Jedutum, o qual profetizava com a harpa, louvando e dando graças ao Senhor.
⁴ Quanto a Hemã, os filhos: Buquias, Matanias, Uziel, Sebuel, Jerimote, Hananias, Hanani, Eliata, Gidalti, Romanti-Ezer, Josbecasa, Maloti, Hotir, e Maaziote.
⁵ Todos estes foram filhos de Hemã, o vidente do rei nas palavras de Deus, para exaltar o seu poder; porque Deus dera a Hemã catorze filhos e três filhas.
⁶ Todos estes estavam sob a direção de seu pai, para a música da casa do Senhor, com saltérios, címbalos e harpas, para o ministério da casa de Deus; e Asafe, Jedutum, e Hemã, estavam sob as ordens do rei.
⁷ E era o número deles, juntamente com seus irmãos instruídos no canto ao Senhor, todos eles mestres, duzentos e oitenta e oito.
⁸ E deitaram sortes acerca da guarda igualmente, assim o pequeno como o grande, o mestre juntamente com o discípulo.
⁹ Saiu, pois, a primeira sorte a Asafe, a saber a José; a segunda a Gedalias; e ele, e seus irmãos, e seus filhos, ao todo eram doze.
¹⁰ A terceira a Zacur, seus filhos, e seus irmãos, doze.
¹¹ A quarta a Izri, seus filhos, e seus irmãos, doze.
¹² A quinta a Netanias, seus filhos, e seus irmãos, doze.
¹³ A sexta a Buquias, seus filhos, e seus irmãos, doze.
¹⁴ A sétima a Jesarela, seus filhos, e seus irmãos, doze.
¹⁵ A oitava a Jesaías, seus filhos, e seus irmãos, doze.
¹⁶ A nona a Matanias, seus filhos, e seus irmãos, doze.
¹⁷ A décima a Simei, seus filhos, e seus irmãos, doze.
¹⁸ A undécima a Azareel, seus filhos, e seus irmãos, doze.
¹⁹ A duodécima a Hasabias, seus filhos, e seus irmãos, doze.
²⁰ A décima terceira a Subael, seus filhos, e seus irmãos, doze.
²¹ A décima quarta a Matitias, seus filhos, e seus irmãos, doze.
²² A décima quinta a Jeremote, seus filhos, e seus irmãos, doze.
²³ A décima sexta a Hananias, seus filhos, e seus irmãos, doze.
²⁴ A décima sétima a Josbecasa, seus filhos, e seus irmãos, doze.
²⁵ A décima oitava a Hanani, seus filhos, e seus irmãos, doze.
²⁶ A décima nona a Maloti, seus filhos, e seus irmãos, doze.
²⁷ A vigésima a Eliata, seus filhos, e seus irmãos, doze.
²⁸ A vigésima primeira a Hotir, seus filhos, e seus irmãos, doze.
²⁹ A vigésima segunda a Gidalti, seus filhos, e seus irmãos, doze.
³⁰ A vigésima terceira a Maaziote, seus filhos, e seus irmãos, doze.
³¹ A vigésima quarta a Romanti-Ezer, seus filhos, e seus irmãos, doze.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual era o total de músicos instruídos no canto ao Senhor no tempo de Davi?",
                        opcoes: [
                            { numero: 1, texto: "Cem músicos", correta: false },
                            { numero: 2, texto: "Dois mil", correta: false },
                            { numero: 3, texto: "Duzentos e oitenta e oito", correta: true },
                            { numero: 4, texto: "Doze mil", correta: false }
                        ],
                        explicacao: "1 Crônicas 25:7 - E o número deles... instruídos no canto ao Senhor... foi de duzentos e oitenta e oito.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        26: {
            titulo: "Os Porteiros e Tesoureiros",
            texto: ` ¹ Quanto às divisões dos porteiros: dos coraítas: Meselemias, filho de Coré, dos filhos de Asafe.
² E foram os filhos de Meselemias: Zacarias o primogênito, Jediael o segundo, Zebadias o terceiro, Jatniel o quarto,
³ Elão o quinto, Joanã o sexto, Elioenai o sétimo.
⁴ E os filhos de Obede-Edom foram: Semaías o primogênito, Jozabade o segundo, Joá o terceiro, e Sacar o quarto, e Natanael o quinto,
⁵ Amiel o sexto, Issacar o sétimo, Peuletai o oitavo; porque Deus o tinha abençoado.
⁶ Também a seu filho Semaías nasceram filhos, que dominaram sobre a casa de seu pai; porque foram homens valentes.
⁷ Os filhos de Semaías: Otni, Rafael, Obede, e Elzabade, com seus irmãos, homens valentes, Eliú e Semaquias.
⁸ Todos estes foram dos filhos de Obede-Edom; eles e seus filhos, e seus irmãos, homens valentes e de força para o ministério; ao todo sessenta e dois, de Obede-Edom.
⁹ E os filhos e os irmãos de Meselemias, homens valentes, foram dezoito.
¹⁰ E de Hosa, dentre os filhos de Merari, foram filhos: Sinri o chefe (ainda que não era o primogênito, contudo seu pai o constituiu chefe),
¹¹ Hilquias o segundo, Tebalias o terceiro, Zacarias o quarto; todos os filhos e irmãos de Hosa foram treze.
¹² Destes se fizeram as turmas dos porteiros, alternando os principais dos homens da guarda, juntamente com os seus irmãos, para ministrarem na casa do Senhor.
¹³ E lançaram sortes, assim os pequenos como os grandes, segundo as casas de seus pais, para cada porta.
¹⁴ E caiu a sorte do oriente a Selemias; e lançou-se a sorte por seu filho Zacarias, conselheiro entendido, e saiu-lhe a do norte.
¹⁵ E para Obede-Edom a do sul; e para seus filhos a casa dos depósitos.
¹⁶ Para Supim e Hosa a do ocidente, junto a porta Salequete, perto do caminho da subida; uma guarda defronte de outra guarda.
¹⁷ Ao oriente seis levitas; ao norte quatro por dia, ao sul quatro por dia, porém para as casas dos depósitos de dois em dois.
¹⁸ Em Parbar, ao ocidente, quatro junto ao caminho, e dois junto a Parbar.
¹⁹ Estas são as turmas dos porteiros dentre os filhos dos coraítas, e dentre os filhos de Merari.
²⁰ E dos levitas: Aías tinha cargo dos tesouros da casa de Deus e dos tesouros das coisas sagradas.
²¹ Quanto aos filhos de Ladã, os filhos dos gersonitas que pertencem a Ladã, chefes das casas paternas do gersonita Ladã: Jeieli.
²² Os filhos de Jeieli: Zetã e Joel, seu irmão; estes tinham cargo dos tesouros da casa do Senhor,
²³ Dos anramitas, dos izaritas, dos hebronitas, dos uzielitas.
²⁴ E Sebuel, filho de Gérson, o filho de Moisés, era o chefe dos tesouros.
²⁵ E seus irmãos foram, do lado de Eliézer, Reabias seu filho, e Jesaías seu filho, e Jorão seu filho, e Zicri seu filho, e Selomite, seu filho.
²⁶ Este Selomite e seus irmãos tinham a seu cargo todos os tesouros das coisas dedicadas que o rei Davi e os chefes das casas paternas, capitães de milhares, e de centenas, e capitães do exército tinham consagrado.
²⁷ Dos despojos das guerras dedicaram ofertas para repararem a casa do Senhor.
²⁸ Como também tudo quanto tinha consagrado Samuel, o vidente, e Saul filho de Quis, e Abner filho de Ner, e Joabe filho de Zeruia; tudo que qualquer havia dedicado estava debaixo da mão de Selomite e seus irmãos.
²⁹ Dos izaritas, Quenanias e seus filhos foram postos sobre Israel como oficiais e como juízes, dos negócios externos.
³⁰ Dos hebronitas foram Hasabias e seus irmãos, homens valentes, mil e setecentos, que tinham a superintendência sobre Israel, além do Jordão para o ocidente, em toda a obra do Senhor, e para o serviço do rei.
³¹ Dos hebronitas, Jerias era o chefe entre os hebronitas, segundo as suas gerações conforme as suas famílias. No ano quarenta do reino de Davi se buscaram e acharam entre eles homens valentes em Jazer de Gileade.
³² E seus irmãos, homens valentes, dois mil e setecentos, chefes dos pais; e o rei Davi os constituiu sobre os rubenitas e os gaditas, e a meia tribo dos manassitas, para todos os negócios de Deus, e para todos os negócios do rei.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como eram escolhidos os portões que cada família de porteiros deveria guardar?",
                        opcoes: [
                            { numero: 1, texto: "Lançando sortes para cada porta", correta: true },
                            { numero: 2, texto: "Os mais velhos escolhiam primeiro", correta: false },
                            { numero: 3, texto: "Por ordem do rei", correta: false },
                            { numero: 4, texto: "Cada um guardava a porta de sua casa", correta: false }
                        ],
                        explicacao: "1 Crônicas 26:13 - E lançaram sortes, assim os pequenos como os grandes... para cada porta.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        27: {
            titulo: "Os Oficiais e Administradores",
            texto: `¹ Estes são os filhos de Israel segundo o seu número, os chefes dos pais, e os capitães dos milhares e das centenas, com os seus oficiais, que serviam ao rei em todos os negócios das turmas que entravam e saíam de mês em mês, em todos os meses do ano; cada turma de vinte e quatro mil.
² Sobre a primeira turma do primeiro mês estava Jasobeão, filho de Zabdiel; e em sua turma havia vinte e quatro mil.
³ Era este dos filhos de Perez, chefe de todos os capitães dos exércitos, para o primeiro mês,
⁴ E sobre a turma do segundo mês estava Dodai, o aoíta, com a sua turma, cujo líder era Miclote; também em sua turma havia vinte e quatro mil.
⁵ O terceiro capitão do exército, para o terceiro mês, era Benaia, filho de Joiada, chefe dos sacerdotes; também em sua turma havia vinte e quatro mil.
⁶ Era este Benaia valente entre os trinta, e sobre os trinta; e na sua turma estava Amizabade, seu filho.
⁷ O quarto, do quarto mês, era Asael, irmão de Joabe, e depois dele Zebadias, seu filho; também em sua turma havia vinte e quatro mil.
⁸ O quinto, do quinto mês, Samute, o israíta; também em sua turma havia vinte e quatro mil.
⁹ O sexto, do sexto mês, Ira, filho de Iques, o tecoíta; também em sua turma havia vinte e quatro mil.
¹⁰ O sétimo, do sétimo mês, Helez, o pelonita, dos filhos de Efraim; também em sua turma havia vinte e quatro mil.
¹¹ O oitavo, do oitavo mês, Sibecai, o husatita, dos zeraítas; também em sua turma havia vinte e quatro mil.
¹² O nono, do nono mês, Abiezer, o anatotita, dos benjamitas; também em sua turma havia vinte e quatro mil.
¹³ O décimo, do décimo mês, Maarai, o netofatita, dos zeraítas; também em sua turma havia vinte e quatro mil.
¹⁴ O undécimo, do undécimo mês, Benaia, o piratonita, dos filhos de Efraim; também em sua turma havia vinte e quatro mil.
¹⁵ O duodécimo, do duodécimo mês, Heldai, o netofatita, de Otniel; também em sua turma havia vinte e quatro mil.
¹⁶ Sobre as tribos de Israel estavam: sobre os rubenitas era líder Eliezer, filho de Zicri; sobre os simeonitas, Sefatias, filho de Maaca.
¹⁷ Sobre os levitas, Hasabias, filho de Quemuel; sobre os aronitas, Zadoque;
¹⁸ Sobre Judá, Eliú, dos irmãos de Davi; sobre Issacar, Onri, filho de Micael;
¹⁹ Sobre Zebulom, Ismaías, filho de Obadias; sobre Naftali, Jerimote, filho de Azriel;
²⁰ Sobre os filhos de Efraim, Oseias, filho de Azazias; sobre a meia tribo de Manassés, Joel, filho de Pedaías;
²¹ Sobre a outra meia tribo de Manassés em Gileade, Ido, filho de Zacarias; sobre Benjamim, Jaasiel, filho de Abner;
²² Sobre Dã, Azarel, filho de Jeroão. Estes eram os príncipes das tribos de Israel.
²³ Não tomou, porém, Davi o número dos de vinte anos para baixo, porquanto o Senhor tinha falado que havia de multiplicar a Israel como as estrelas do céu.
²⁴ Joabe, filho de Zeruia, tinha começado a numerá-los, porém não acabou; porquanto viera por isso grande ira sobre Israel; assim o número não se pôs no registro das crônicas do rei Davi.
²⁵ E sobre os tesouros do rei estava Azmavete, filho de Adiel; e sobre os tesouros dos campos, das cidades, e das aldeias, e das torres, Jônatas, filho de Uzias.
²⁶ E sobre os que faziam a obra do campo, na lavoura da terra, Ezri, filho de Quelube.
²⁷ E sobre as vinhas, Simei, o ramatita; porém sobre o que das vides entrava nas adegas do vinho, Zabdi, o sifmita.
²⁸ E sobre os olivais e sicômoros que havia nas campinas, Baal-Hanã, o gederita; porém Joás sobre os armazéns do azeite.
²⁹ E sobre os gados que pastavam em Sarom, Sitrai, o saronita; porém, sobre os gados dos vales, Safate, filho de Adlai.
³⁰ E sobre os camelos, Obil, o ismaelita; e sobre as jumentas, Jedias, o meronotita.
³¹ E sobre o gado miúdo, Jaziz, o hagrita; todos esses eram administradores da fazenda que tinha o rei Davi.
³² E Jônatas, tio de Davi, era do conselho, homem entendido, e também escriba; e Jeiel, filho de Hacmoni, estava com os filhos do rei.
³³ E Aitofel era do conselho do rei; e Husai, o arquita, amigo do rei.
³⁴ E depois de Aitofel, Joiada, filho de Benaia, e Abiatar; porém Joabe era o general do exército do rei.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "De quanto em quanto tempo se revezavam os turnos das turmas de vinte e quatro mil homens que serviam ao rei?",
                        opcoes: [
                            { numero: 1, texto: "Todos os dias", correta: false },
                            { numero: 2, texto: "De ano em ano", correta: false },
                            { numero: 3, texto: "Mês a mês", correta: true },
                            { numero: 4, texto: "A cada semana", correta: false }
                        ],
                        explicacao: "1 Crônicas 27:1 - ...em todos os negócios das turmas que entravam e saíam de mês em mês, em todos os meses do ano...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        28: {
            titulo: "Exortação de Davi a Salomão",
            texto: `¹ Então Davi reuniu em Jerusalém todos os príncipes de Israel, os príncipes das tribos, e os capitães das turmas, que serviam o rei, e os capitães dos milhares, e os capitães das centenas, e os administradores de toda a fazenda e possessão do rei, e de seus filhos, como também os oficiais, os poderosos, e todo o homem valente.
² E pôs-se o rei Davi em pé, e disse: Ouvi-me, irmãos meus, e povo meu; em meu coração propus eu edificar uma casa de repouso para a arca da aliança do Senhor e para o estrado dos pés do nosso Deus, e eu tinha feito o preparo para a edificar.
³ Porém Deus me disse: Não edificarás casa ao meu nome, porque és homem de guerra, e derramaste muito sangue.
⁴ E o Senhor Deus de Israel escolheu-me de toda a casa de meu pai, para que eternamente fosse rei sobre Israel; porque a Judá escolheu por soberano, e a casa de meu pai na casa de Judá; e entre os filhos de meu pai se agradou de mim para me fazer reinar sobre todo o Israel.
⁵ E, de todos os meus filhos (porque muitos filhos me deu o Senhor), escolheu ele o meu filho Salomão para se assentar no trono do reino do Senhor sobre Israel.
⁶ E me disse: Teu filho Salomão, ele edificará a minha casa e os meus átrios; porque o escolhi para filho, e eu lhe serei por pai.
⁷ E estabelecerei o seu reino para sempre, se perseverar em cumprir os meus mandamentos e os meus juízos, como até ao dia de hoje.
⁸ Agora, pois, perante os olhos de todo o Israel, a congregação do Senhor, e perante os ouvidos de nosso Deus, guardai e buscai todos os mandamentos do Senhor vosso Deus, para que possuais esta boa terra, e a façais herdar a vossos filhos depois de vós, para sempre.
⁹ E tu, meu filho Salomão, conhece o Deus de teu pai, e serve-o com um coração perfeito e com uma alma voluntária; porque esquadrinha o Senhor todos os corações, e entende todas as imaginações dos pensamentos; se o buscares, será achado de ti; porém, se o deixares, rejeitar-te-á para sempre.
¹⁰ Olha, pois, agora, porque o Senhor te escolheu para edificares uma casa para o santuário; esforça-te, e faze a obra.
¹¹ E deu Davi a Salomão, seu filho, a planta do alpendre com as suas casas, e as suas tesourarias, e os seus cenáculos, e as suas recâmaras interiores, como também da casa do propiciatório.
¹² E também a planta de tudo quanto tinha em mente, a saber: dos átrios da casa do Senhor, e de todas as câmaras ao redor, para os tesouros da casa de Deus, e para os tesouros das coisas sagradas;
¹³ E para as turmas dos sacerdotes, e para os levitas, e para toda a obra do ministério da casa do Senhor, e para todos os utensílios do ministério da casa do Senhor.
¹⁴ E deu ouro, segundo o peso do ouro, para todos os utensílios de cada ministério; também a prata, por peso, para todos os utensílios de prata, para todos os utensílios de cada ministério.
¹⁵ E o peso para os castiçais de ouro, e suas candeias de ouro segundo o peso de cada castiçal e as suas candeias; também para os castiçais de prata, segundo o peso do castiçal e as suas candeias, segundo o uso de cada castiçal.
¹⁶ Também deu o ouro por peso para as mesas da proposição, para cada mesa; como também a prata para as mesas de prata.
¹⁷ E ouro puro para os garfos, e para as bacias, e para os jarros, e para as taças de ouro, para cada taça seu peso; como também para as taças de prata, para cada taça seu peso.
¹⁸ E para o altar do incenso, ouro purificado, por seu peso; como também o ouro para o modelo do carro, a saber, dos querubins, que haviam de estender as asas, e cobrir a arca da aliança do Senhor.
¹⁹ Tudo isto, disse Davi, fez-me entender o Senhor, por escrito da sua mão, a saber, todas as obras desta planta.
²⁰ E disse Davi a Salomão seu filho: Esforça-te e tem bom ânimo, e faze a obra; não temas, nem te apavores; porque o Senhor Deus, meu Deus, há de ser contigo; não te deixará, nem te desamparará, até que acabes toda a obra do serviço da casa do Senhor.
²¹ E eis que aí tens as turmas dos sacerdotes e dos levitas para todo o ministério da casa de Deus; estão também contigo, para toda a obra, voluntários com sabedoria de toda a espécie para todo o ministério; como também todos os príncipes, e todo o povo, para todos os teus mandados.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Davi entregou a Salomão em relação à construção do Templo?",
                        opcoes: [
                            { numero: 1, texto: "Uma sacola de sementes", correta: false },
                            { numero: 2, texto: "A planta (o modelo) de tudo o que ele tinha em mente pelo Espírito", correta: true },
                            { numero: 3, texto: "Apenas uma pedra", correta: false },
                            { numero: 4, texto: "O seu testamento político", correta: false }
                        ],
                        explicacao: "1 Crônicas 28:11-12 - E deu Davi a Salomão, seu filho, a planta do alpendre... e também a planta de tudo quanto tinha no seu pensamento...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        29: {
            titulo: "Ofertas para o Templo e Morte de Davi",
            texto: ` ¹ Disse mais o rei Davi a toda a congregação: Salomão, meu filho, o único a quem Deus escolheu, é ainda moço e tenro, e esta obra é grande; porque não é o palácio para homem, mas para o Senhor Deus.
² Eu, pois, com todas as minhas forças já tenho preparado para a casa de meu Deus ouro para as obras de ouro, e prata para as de prata, e cobre para as de cobre, ferro para as de ferro e madeira para as de madeira, pedras de ônix, e as de engaste, e pedras ornamentais, e pedras de diversas cores, e toda a sorte de pedras preciosas, e pedras de mármore em abundância.
³ E ainda, porque tenho afeto à casa de meu Deus, o ouro e prata particular que tenho eu dou para a casa do meu Deus, afora tudo quanto tenho preparado para a casa do santuário:
⁴ Três mil talentos de ouro de Ofir; e sete mil talentos de prata purificada, para cobrir as paredes das casas.
⁵ Ouro para os objetos de ouro, e prata para os de prata; e para toda a obra de mão dos artífices. Quem, pois, está disposto a encher a sua mão, para oferecer hoje voluntariamente ao Senhor?
⁶ Então os chefes dos pais, e os príncipes das tribos de Israel, e os capitães de mil e de cem, até os chefes da obra do rei, voluntariamente contribuíram.
⁷ E deram para o serviço da casa de Deus cinco mil talentos de ouro, e dez mil dracmas, e dez mil talentos de prata, e dezoito mil talentos de cobre, e cem mil talentos de ferro.
⁸ E os que possuíam pedras preciosas, deram-nas para o tesouro da casa do Senhor, a cargo de Jeiel o gersonita.
⁹ E o povo se alegrou porque contribuíram voluntariamente; porque, com coração perfeito, voluntariamente deram ao Senhor; e também o rei Davi se alegrou com grande alegria.
¹⁰ Por isso Davi louvou ao Senhor na presença de toda a congregação; e disse Davi: Bendito és tu, Senhor Deus de Israel, nosso pai, de eternidade em eternidade.
¹¹ Tua é, Senhor, a magnificência, e o poder, e a honra, e a vitória, e a majestade; porque teu é tudo quanto há nos céus e na terra; teu é, Senhor, o reino, e tu te exaltaste por cabeça sobre todos.
¹² E riquezas e glória vêm de diante de ti, e tu dominas sobre tudo, e na tua mão há força e poder; e na tua mão está o engrandecer e o dar força a tudo.
¹³ Agora, pois, ó Deus nosso, graças te damos, e louvamos o nome da tua glória.
¹⁴ Porque quem sou eu, e quem é o meu povo, para que pudéssemos oferecer voluntariamente coisas semelhantes? Porque tudo vem de ti, e do que é teu to damos.
¹⁵ Porque somos estrangeiros diante de ti, e peregrinos como todos os nossos pais; como a sombra são os nossos dias sobre a terra, e sem ti não há esperança.
¹⁶ Senhor, nosso Deus, toda esta abundância, que preparamos, para te edificar uma casa ao teu santo nome, vem da tua mão, e é toda tua.
¹⁷ E bem sei eu, Deus meu, que tu provas os corações, e que da sinceridade te agradas; eu também na sinceridade de meu coração voluntariamente dei todas estas coisas; e agora vi com alegria que o teu povo, que se acha aqui, voluntariamente te deu.
¹⁸ Senhor Deus de Abraão, Isaque, e Israel, nossos pais, conserva isto para sempre no intento dos pensamentos do coração de teu povo; e encaminha o seu coração para ti.
¹⁹ E a Salomão, meu filho, dá um coração perfeito, para guardar os teus mandamentos, os teus testemunhos, e os teus estatutos; e para fazer tudo, e para edificar este palácio que tenho preparado.
²⁰ Então disse Davi a toda a congregação: Agora louvai ao Senhor vosso Deus. Então toda a congregação louvou ao Senhor Deus de seus pais, e inclinaram-se, e prostraram-se perante o Senhor, e o rei.
²¹ E ao outro dia imolaram sacrifícios ao Senhor, e ofereceram holocaustos ao Senhor, mil bezerros, mil carneiros, mil cordeiros, com as suas libações; e sacrifícios em abundância por todo o Israel.
²² E comeram e beberam naquele dia perante o Senhor, com grande gozo; e a segunda vez fizeram rei a Salomão filho de Davi, e o ungiram ao Senhor por líder, e a Zadoque por sacerdote.
²³ Assim Salomão se assentou no trono do Senhor, como rei, em lugar de Davi seu pai, e prosperou; e todo o Israel lhe obedecia.
²⁴ E todos os príncipes, e os grandes, e até todos os filhos do rei Davi, se submeteram ao rei Salomão.
²⁵ E o Senhor magnificou a Salomão grandissimamente, perante os olhos de todo o Israel; e deu-lhe majestade real, qual antes dele não teve nenhum rei em Israel.
²⁶ Assim Davi, filho de Jessé, reinou sobre todo o Israel.
²⁷ E foram os dias que reinou sobre Israel, quarenta anos; em Hebrom reinou sete anos, e em Jerusalém reinou trinta e três.
²⁸ E morreu numa boa velhice, cheio de dias, riquezas e glória; e Salomão, seu filho, reinou em seu lugar.
²⁹ Os atos, pois, do rei Davi, assim os primeiros como os últimos, eis que estão escritos nas crônicas de Samuel, o vidente, e nas crônicas do profeta Natã, e nas crônicas de Gade, o vidente,
³⁰ Juntamente com todo o seu reinado e o seu poder; e os tempos que passaram sobre ele, e sobre Israel, e sobre todos os reinos daquelas terras.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como o povo ofertou para a construção do Templo do Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Com tristeza", correta: false },
                            { numero: 2, texto: "Por obrigação e impostos", correta: false },
                            { numero: 3, texto: "Com alegria e voluntariamente", correta: true },
                            { numero: 4, texto: "O povo não ofertou nada", correta: false }
                        ],
                        explicacao: "1 Crônicas 29:9 - E o povo se alegrou do que deram voluntariamente; porque com coração perfeito voluntariamente deram ao Senhor...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Davi morreu em 'boa velhice', cheio de quais três coisas?",
                        opcoes: [
                            { numero: 1, texto: "Dias, riquezas e glória", correta: true },
                            { numero: 2, texto: "Dores, lutas e cansaço", correta: false },
                            { numero: 3, texto: "Ouro, prata e bronze", correta: false },
                            { numero: 4, texto: "Palácios, cavalos e soldados", correta: false }
                        ],
                        explicacao: "1 Crônicas 29:28 - E morreu numa boa velhice, cheio de dias, riquezas e glória...",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};