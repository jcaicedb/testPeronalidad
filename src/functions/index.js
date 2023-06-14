(() => {
    'use strict'

    const clArrPreguntas = [
        '¿Ama la naturaleza?',
        '¿Sus sentimientos son vivos, móviles, cambiantes, su humor es variable?',
        '¿Es calmado, medido, de humor estable?',
        '¿Le preocupa demasiado ser preciso en sus actividades?',
        '¿Es impulsivo?',
        '¿Tiende a realizar con energía sus ambiciones, es decidido, a veces precipitado?',
        '¿Los demás le consideran como perezoso?',
        '¿Le gusta lo teórico, lo supuesto?',
        '¿Confía más en las experiencias que en las suposiciones?',
        '¿Tiende a la melancolía?',
        '¿Es optimista, generalmente está de buen humor?',
        '¿Es tímido, flojo, indeciso, se desanima fácilmente?',
        '¿Es constante y empeñoso?',
        '¿Es cordial, de carácter demostrativo, es animador en las reuniones?',
        '¿Tiene sentido práctico desarrollado?',
        '¿Tiene poco sentido práctico?',
        '¿Gasta usted el dinero de forma exagerada?',
        '¿Es un buen observador?',
        '¿Los demás lo consideran como una persona autoritaria?',
        '¿Los demás le juzgan armonizador y de buen carácter?',
        '¿Los demás le consideran porfiado/necio/terco?',
        '¿Tiene gusto por la vida mundana, placentera y bulliciosa?',
        '¿Le agrada la soledad?',
        '¿Es muy poco puntual, descuidado?',
        '¿Le gusta comer, beber bien y dormir bastante?',
        '¿Le cuesta trabajo reconciliarse cuando se ha disgustado con alguien?',
        '¿Le gustan los juegos y las diversiones?',
        '¿Es cerrado en sí mismo, poco comunicativo?',
        '¿Acepta fácilmente actuar como todos los demás?',
        '¿Encuentra gusto por las burlas o sátiras dirigidas a usted o a otras personas?',
        '¿Los demás le reconocen su buen sentido del humor?',
        '¿Tiene poco interés por su interior (sentimientos, emociones, ideales)?',
        '¿Los demás reconocen fácilmente su lealtad?',
        '¿Tiene gran capacidad?',
        '¿Respeta los principios, los recuerda constantemente?',
        '¿Tiene gusto muy especial por la poesía y el arte?',
        '¿Los demás lo consideran poco servicial y poco compasivo?',
        '¿Es exigente consigo mismo?',
        '¿Le agrada tener facilidad de la palabra, dar discursos?',
        '¿Es capaz de concentrar su actividad en un objeto elegido especialmente?',
        '¿Tiene necesidad de mucha acción y en diferentes cosas a la vez?',
        '¿Los demás lo reconocen como persona atenta?',
        '¿Es violento, colérico?',
        '¿Le gusta recordar mucho las cosas pasadas?',
        '¿Es indiferente al pasado y al porvenir?',
        '¿Los demás le encuentran interesante, muy agradable y buscan su compañía?',
        '¿Le gustan las novedades?',
        '¿Es una persona de buenas costumbres?',
        '¿Comete muchos errores, por imprudencia, por audacia?',
        '¿Siente gusto por lo extraño, raro?',
        '¿Le gusta una vida simple, dando poca importancia a sus necesidades?',
        '¿Desea causar asombro y atraer la atención hacia usted?',
        '¿Los demás lo consideran como una persona valiente?',
        '¿Tiene apego por la vida familiar, patriótica y religiosa?',
    ];

    const clArrCategoriaEAP = [5, 11, 14, 15, 32, 34, 39, 41, 43, 47];
    const clArrCategoriaEAS = [6, 13, 15, 19, 34, 38, 40, 49, 51, 54];
    const clArrCategoriaEnAP = [2, 4, 16, 27, 36, 43, 46, 47, 50, 52];
    const clArrCategoriaEnAS = [1, 10, 12, 16, 23, 26, 28, 44, 48, 51];
    const clArrCategoriaNeAP = [3, 9, 15, 18, 22, 30, 32, 39, 42, 53];
    const clArrCategoriaNeAS = [3, 8, 12, 18, 31, 33, 35, 48, 51, 53];
    const clArrCategoriaNeNaP = [3, 7, 16, 17, 20, 24, 25, 29, 45, 53];
    const clArrCategoriaNeNaS = [7, 10, 21, 23, 26, 28, 33, 35, 37, 48];

    const clDivPreguntas = document.querySelector('#divPreguntas');
    const clBtnProcesar = document.querySelector('#btnProcesar');
    const clInpNombre = document.querySelector('#inpNombre');

    const clSecModalError = document.querySelector('#secModalError');
    const clErrorTitulo = document.querySelector('#errTitulo');
    const clErrorMensaje = document.querySelector('#errMensaje');
    const clErrorBoton = document.querySelector('#errorBoton');

    const clSecModalResultado = document.querySelector('#secModalResultado');
    const clresultNombre = document.querySelector('#resultNombre');
    const clresultPerfil = document.querySelector('#resultPerfil');
    const clresultRasgo = document.querySelector('#resultRasgo');
    const clResultBoton = document.querySelector('#resultBoton');

    let vlIntContadorEAP = 0;
    let vlIntContadorEAS = 0;
    let vlIntContadorEnAP = 0;
    let vlIntContadorEnAS = 0;
    let vlIntContadorNeAP = 0;
    let vlIntContadorNeAS = 0;
    let vlIntContadorNeNaP = 0;
    let vlIntContadorNeNaS = 0;

    const fnCrearPreguntas = () => {
        let vtIntPuntero = 0;

        for (let vtStrPregunta of clArrPreguntas) {
            let vtDivRow = document.createElement('div');
            let vtDivColNro = document.createElement('div');
            let vtDivColPregunta = document.createElement('div');
            let vtInpPregunta = document.createElement('input');
            let vtStrNombreObjeto = "divRow" + vtIntPuntero;

            vtDivRow.classList.add('row');
            vtDivRow.classList.add('border');
            vtDivRow.classList.add('border-success');
            vtDivRow.id = vtStrNombreObjeto

            vtDivColNro.classList.add('col-1');
            vtDivColNro.classList.add('p-2');
            vtDivColNro.classList.add('mb-2');
            vtDivColNro.textContent = (vtIntPuntero + 1);
            vtDivRow.append(vtDivColNro);

            vtDivColPregunta.classList.add('col');
            vtDivColPregunta.classList.add('p-2');
            vtDivColPregunta.classList.add('mb-2');
            vtDivColPregunta.textContent = vtStrPregunta;

            vtInpPregunta.classList.add('form-check-input');
            vtInpPregunta.type = "checkbox";
            vtInpPregunta.id = "InpRow" + vtIntPuntero;
            vtInpPregunta.value = vtIntPuntero;
            vtDivColPregunta.append(vtInpPregunta);

            vtDivRow.append(vtDivColPregunta);

            clDivPreguntas.append(vtDivRow);

            //console.log('pregunta', vtIntPuntero, vtStrPregunta)
            vtIntPuntero++;
        }
    }

    const fnMensajeResultado = (pStrPersona, pStrPerfil, pStrRasgo) => {

        clresultNombre.textContent = pStrPersona;
        clresultPerfil.textContent = pStrPerfil;
        clresultRasgo.textContent = pStrRasgo;
        clSecModalResultado.classList.add('modal_show');
    }


    const fnTipoPersonalidad = (pStrPersona, pStrTipo) => {
        let vtArrPerfil = {
            'EAS':['APASIONADO', 
                   'Ambicioso y activo. Las dificultades le animan, es tenaz, perseverante y decidido. Experimenta sentimientos duraderos y prolongada repercusión interior. Amante de la vida social, tiene un profundo sentido de la grandeza y es organizador por naturaleza.', 
                   'Le cuesta trabajar en equipo, puede ser orgulloso y tiende a ser excesivamente independiente'],
            'EAP':['COLÉRICO', 
                   'Es emotivo y activo. Vive en el presente, por lo que es poco constante en sus ideas, afectos y proyectos. Extrovertido, generoso, y lleno de vitalidad, mantiene una actividad intensa y febril, pero múltiple sin profundidad y sin orden.',
                   'Improvisa, empieza, se cansa y deja iniciado contentándose con resultados inmediatos'],
            'EnAS':['SENTIMENTAL', 
                    'De naturaleza muy sensible y vulnerable, ama la soledad y la introspección. Sus juicios y su actividad mental están teñidos de sentimientos. Es delicado, constante y fiel en sus afectos, además es honrado y veraz. Posee un vivo sentido de lo bello y de la naturaleza.', 
                    'Es escrupuloso, poco comunicativo, melancólico y a menudo descontento de sí mismo. Busca una vida reposada y regular, tiende a ser egoísta y evita cualquier control ajeno.'],
            'EnAP':['NERVIOSO', 
                    'Vive a merced de sus emociones, numerosas y variables. Inconstante en su conducta, le gusta asombrar y llamar la atención, recurriendo a veces a las extravagancias y a la vanidad. Siente la necesidad de vivir intensa y entusiasmadamente. Es generoso, alegre, optimista y afable.',
                    'Precipitado, superficial, desordenado, trabaja sólo en lo que le gusta, es algo egocéntrico y poco dócil.'],
            'NeAS':['FLEMÁTICO', 
                    'Es una persona de hábitos, respetuoso con sus principios, puntual, objetivo y digno de crédito. En él prevalece el sentido del deber y el respeto a los demás. No improvisa, actúa con convicción y tenacidad, y sin altibajos afectivos.',
                    'Parece impasible y poco expansivo, aunque eso no significa que no tenga sentimientos, simplemente le es difícil exteriorizarlos.'],
            'NeAP':['SANGUÍNEO', 
                    'Extrovertido y optimista, le gusta la vida social, en la que se muestra cortés e ingenioso; sabe manejar a las personas con habilidad y diplomacia. Tolerante y liberal, sabe luchar por el éxito y es perseverante y tenaz. Ama la vida y está en estrecho contacto con la realidad.',
                    'Es muy elemental, a veces egoísta y materialista. Los sentidos le dominan con facilidad, lo que puede dar lugar a fricciones.'],
            'NeNaS':['APÁTICO', 
                     'Hermético, poco comunicativo. Es ecuánime, sincero y honesto, leal y digno de confianza, Disciplinado.',
                     'Es poco flexible, le cuesta trabajo adaptarse a las circunstancias y se deja invadir por el pesimismo y la tristeza.'],
            'NeNaP':['AMORFO', 
                     'Optimista, bondadoso, imperturbable, sociable.',
                     'Inactivo, pereza, incumplidor, impuntual, desordenado, sin iniciativa.']
        }


        //console.log(vtArrPerfil[pStrTipo][0]);
        //console.log(vtArrPerfil[pStrTipo][1]);
        fnMensajeResultado(pStrPersona, vtArrPerfil[pStrTipo][1], vtArrPerfil[pStrTipo][2]);
    }

    const fnMensajeError = (pStrTitulo, pStrMensaje) => {
        clErrorTitulo.textContent = pStrTitulo;
        clErrorMensaje.textContent = pStrMensaje;
        clSecModalError.classList.add('modal_show');
    }

    const fnProcesar = (pStrPersona) => {
        let vtInpPreguntas = document.querySelectorAll('input');
        let vtIntPreguntasSeleccionadas = 0;
        let vtIntNroPregunta = 0;
        let vtStrResultadoTipo = "";
        let vtIntResultadoPuntos = 0;
        
        /*
        let vtArrResultado = {'3':'HO', '1':'LA'}
        
        console.log('clave-valor', vtArrResultado[0])
        */
        for (let vtObjPregunta of vtInpPreguntas) {
            if (vtObjPregunta.checked) {

                vtIntPreguntasSeleccionadas++

                vtIntNroPregunta = vtObjPregunta.value * 1;

                if (clArrCategoriaEAP.indexOf(vtIntNroPregunta) >= 0) { vlIntContadorEAP++ }
                if (clArrCategoriaEAS.indexOf(vtIntNroPregunta) >= 0) { vlIntContadorEAS++ }
                if (clArrCategoriaEnAP.indexOf(vtIntNroPregunta) >= 0) { vlIntContadorEnAP++ }
                if (clArrCategoriaEnAS.indexOf(vtIntNroPregunta) >= 0) { vlIntContadorEnAS++ }
                if (clArrCategoriaNeAP.indexOf(vtIntNroPregunta) >= 0) { vlIntContadorNeAP++ }
                if (clArrCategoriaNeAS.indexOf(vtIntNroPregunta) >= 0) { vlIntContadorNeAS++ }
                if (clArrCategoriaNeNaP.indexOf(vtIntNroPregunta) >= 0) { vlIntContadorNeNaP++ }
                if (clArrCategoriaNeNaS.indexOf(vtIntNroPregunta) >= 0) { vlIntContadorNeNaS++ }
            };
        }

        //vtIntPreguntasSeleccionadas = 29 //para prueba. Se debe borrar

        if (vtIntPreguntasSeleccionadas < 28) {
            //https://www.youtube.com/watch?v=lczv0v7DnYI
            
            if (vtIntPreguntasSeleccionadas == 0) { 
                //alert("Debe seleccionar como mínimo 28 preguntas.\n\nUsted Solo no ha seleccionado preguntas"); 
                console.log('viene por 1');
                fnMensajeError("Error",  "Debe seleccionar como mínimo 28 preguntas. Usted no ha seleccionado ninguna.");
            }
            else { 
                //alert(); 
                console.log('viene por 2');
                fnMensajeError("Error", "Debe seleccionar como mínimo 28 preguntas. Usted Solo ha seleccionado " + vtIntPreguntasSeleccionadas + " preguntas");
            }
        }
        else {
            for (let vtIntContador=0; vtIntContador < 8; vtIntContador++) {
                switch (vtIntContador) {
                    case 0:
                        if (vlIntContadorEAP >= vtIntResultadoPuntos) {
                            vtStrResultadoTipo = "EAP";
                            vtIntResultadoPuntos = vlIntContadorEAP;
                        }
                        break;
    
                    case 1:
                        if (vlIntContadorEnAP >= vtIntResultadoPuntos) {
                            vtStrResultadoTipo = "EnAP";
                            vtIntResultadoPuntos = vlIntContadorEnAP;
                        }
                        break;
    
                    case 2:
                        if (vlIntContadorEAS >= vtIntResultadoPuntos) {
                            vtStrResultadoTipo = "EAS";
                            vtIntResultadoPuntos = vlIntContadorEAS;
                        }
                        break;
    
                    case 3:
                        if (vlIntContadorEnAS >= vtIntResultadoPuntos) {
                            vtStrResultadoTipo = "EnAS";
                            vtIntResultadoPuntos = vlIntContadorEnAS;
                        }
                        break;
        
                    case 4:
                        if (vlIntContadorNeAP >= vtIntResultadoPuntos) {
                            vtStrResultadoTipo = "NeAP";
                            vtIntResultadoPuntos = vlIntContadorNeAP;
                        }
                        break;
    
                    case 5:
                        if (vlIntContadorNeAS >= vtIntResultadoPuntos) {
                            vtStrResultadoTipo = "NeAS";
                            vtIntResultadoPuntos = vlIntContadorNeAS;
                        }
                        break;
    
                    case 6:
                        if (vlIntContadorNeNaP >= vtIntResultadoPuntos) {
                            vtStrResultadoTipo = "NeNaP";
                            vtIntResultadoPuntos = vlIntContadorNeNaP;
                        }
                        break;
                    
                    default:
                        if (vlIntContadorNeNaS >= vtIntResultadoPuntos) {
                            vtStrResultadoTipo = "NeNaS";
                            vtIntResultadoPuntos = vlIntContadorNeNaS;
                        }
                        break;
                }
                //console.log('iteracion', vtIntContador, 'tipo result', vtStrResultadoTipo, 'ptos result', vtIntResultadoPuntos);
            }
            
            /*console.log('resultado Todos', { vlIntContadorEAP }, { vlIntContadorEAS }, { vlIntContadorEnAP },
                { vlIntContadorEnAS }, { vlIntContadorNeAP }, { vlIntContadorNeAS },
                { vlIntContadorNeNaP }, { vlIntContadorNeNaS });        */
    
            fnTipoPersonalidad(pStrPersona, vtStrResultadoTipo);    
        }

    }

    fnCrearPreguntas();

    clBtnProcesar.addEventListener('click', () => {
        if (clInpNombre.value == "") {
            fnMensajeError("Error", "Falta ingresar tu nombre");
        }
        else {
            fnProcesar(clInpNombre.value);
            //rapida --> fnMensajeResultado(clInpNombre.value, "aqui", "estamos");
        }
    });

    clErrorBoton.addEventListener('click', (e) => {
        e.preventDefault();
        clSecModalError.classList.remove('modal_show');
    });

    clResultBoton.addEventListener('click', (e) => {
        e.preventDefault();
        clSecModalResultado.classList.remove('modal_show');
    });
    
})();