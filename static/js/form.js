// 'use strict'
//
// const expresiones = {
//     nombres: /^[a-zA-ZÀ-ÿ\s]{1,75}$/, // Letras y espacios, pueden llevar acentos.
//     colegio: /^[a-zA-ZÀ-ÿ\s\d\-]{4,50}$/, // Letras, números, espacios,  guion, guion_bajo, pueden llevar acentos 1-50
//     numRoman: /^M?M?M?(CM|CD|D?C?C?C?)(XC|XL|L?X?X?X?)(IX|IV|V?I?I?I?)$/,
//     //Valida el ingreso de números romanos
//     parroquia: /^[a-zA-ZÀ-ÿ\s\d\-]{4,150}$/, // Letras, números, espacios,  guion, guion_bajo, pueden llevar acentos 1-150
//     numerosTelf: /^([09]){2}\d{8}$/, // Que empiece con 09 y siga con 8 numeros.
//     numerosCedu: /^\d{10}$/, // Que empiece con 09 y siga con 8 numeros.
//     numHij: /^\d{1,2}$/, // 2 numeros.
//     numeros: /^\d+$/, // 1 o más números.
//     fecha: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
//     // fecha valida la fecha
// }
//
// const filtroDeItemPregunta = () => { //FUNCIÓN PARA FILTRAR UN ITEM DE PREGUNTA Y EXCLUIRLO
//     let itemClases = [];
//     Object.values(items).forEach((item) => {
//         if (Object.values(items)[1] != item) {
//             itemClases.push(item)
//         }
//     })
//     return itemClases
// }
//
// const formulario = document.getElementById('formulario');
// const inputs = document.querySelectorAll('#formulario .datos')
// const items = document.querySelectorAll('#formulario .item')
// const itemsFiltrados = filtroDeItemPregunta()
// let contenedorPadre, messageEscogido;
// let fe_bautizo = 3; // 0 significa que no se bautizó, 1 que si, 2 que no escogió respuesta y 3 que si escogió
// // let niños, fe_bautizo_pregunta, fe_bautizo, padres, num_hijos, nivel_catequista;
//
// //Se pone tabindex en -1 para evitar el movimiento entre inputs con tab del teclado
// document.getElementsByName('radios').forEach((item) => { //para los radio
//     item.setAttribute('tabindex', '-1')
// })
// inputs.forEach((item, index) => { //para los inputs
//     Object.values(item.children).forEach((input) => {
//         if (input.localName == 'input' || input.localName == 'select') {
//             input.setAttribute('tabindex', '-1');
//         }
//     })
// })
//
// const grande = document.querySelector('.grande')
// const next = document.querySelector('.next')
// const back = document.querySelector('.back')
// const prog_bar = document.querySelector('.progress-bar')
// let porcentaje = parseInt(prog_bar.style.width)
// let num_items = items.length - 1
// let pos = 1
// let oper = 0
//
// // Para deshabilitar y habilitar los botones siguiente y atrás cuando se llega al ultimo item o se están en el primero
// function visiblesButtons() {
//     if (pos == 1) {
//         back.setAttribute('disabled', 'true')
//     } else {
//         back.removeAttribute('disabled')
//     }
//
//     if (pos == num_items) {
//         next.setAttribute('disabled', 'true')
//     } else {
//         next.removeAttribute('disabled')
//     }
// }
//
// function mostrarItems(item, index, pos_item, bandera) { // Aquí
//     if (index == pos_item) {
//         if (bandera == "avanzo") {
//             console.log("se mostró")
//             console.log("item a ocultar", itemsFiltrados[index - 2])
//             console.log("item a mostrar", item)
//             item.classList.add('mostrando')
//             itemsFiltrados[index - 2].classList.remove('mostrando')
//         }
//
//         if (bandera == "retrocedo") {
//             console.log("se ocultó")
//             console.log("item a ocultar", itemsFiltrados[index] - 2)
//             console.log("item a mostrar", item)
//             item.classList.add('mostrando')
//             itemsFiltrados[index + 2].classList.remove('mostrando')
//         }
//     }
// }
//
// function iteradorItems(pos_item, bandera, completado = "") { // Como dice, muestra el item a rellenar
//     console.log("reset", pos_item, ":pos enviado", pos, ":pos guardado")
//     itemsFiltrados.forEach((item, index) => {
//         if (item.className != "item fe_bautizo") {
//             mostrarItems(item, index + 1, pos_item, bandera)
//         } else {
//             if (fe_bautizo == 3 && pos == 2) {
//                 console.log('No mostrará nada por que es bautizo con 3')
//             }
//         }
//     })
// }
//
// const comprobacionItems = (pos) => {
//     if (pos == 1) {
//         console.log('Es el item de bautizo')
//         return true
//     }
//     let ItemSelected = itemsFiltrados[pos]
//     let contenidoItem = Object.values(Object.values(ItemSelected.children)[1].children)
//     let numItems = contenidoItem.length, //numero de datos a rellenar por item
//         contadorCompletados = 0,
//         contadorNoCompletados; // contador para los datos con correcto-control
//     numItems = pos == 2 ? numItems - 2 : numItems; // Como tiene dos check de tutor, se los resta y en otra parte se los valida
//     contenidoItem.forEach((item) => {
//         let listaClases = Object.values(item.children[0].classList)
//         if (listaClases.find(element => element == "correcto-control") == "correcto-control") {
//             contadorCompletados += 1
//         } else {
//             item.children[0].classList.add('error-control')
//         }
//     })
//     if (contadorCompletados == numItems) {
//         return true
//     } else {
//         alert("Rellene todos los datos y verifique que estén correctos")
//         return false
//     }
//
//
// }
//
// function desplazoItems(avance) { // Calcula el translateX a mover el contenedor de items(grande) y así mismo lo desplaza
//     if (pos == 2 && avance) {
//         document.querySelector('.aviso2').classList.add('mostrar')
//         console.log('No se desplazará')
//     } else {
//         if (avance) { // desplazo por avance (true)
//             porcentaje += (100 / num_items)
//             prog_bar.style.width = `${porcentaje.toString()}%`
//             oper = pos * -(100 / num_items)
//             grande.style.transform = `translateX(${oper}%)`
//             pos += 1
//         } else { // desplazo por retroceso (false)
//             porcentaje -= (100 / num_items)
//             prog_bar.style.width = `${porcentaje.toString()}%`
//             oper = oper + (100 / num_items)
//             grande.style.transform = `translateX(${oper}%)`
//             pos -= 1
//         }
//     }
// }
//
// // Para el nivel de porcentaje cada que se de en siguiente
// next.addEventListener('click', () => {
//     if (comprobacionItems(pos - 1)) {
//
//         if (pos != 1) {
//             console.log("No es el item de bautizo")
//             desplazoItems(true)
//             iteradorItems(pos, "avanzo")
//             visiblesButtons()
//         } else {
//             document.querySelector('.aviso2').classList.remove('mostrar')
//             if (fe_bautizo == 1) { // REVISAR
//                 console.log('si se bautizó')
//                 desplazoItems(true)
//                 iteradorItems(pos, "avanzo")
//                 visiblesButtons()
//             } else if (fe_bautizo == 0) {
//                 console.log('No se bautizó')
//                 desplazoItems(true)
//                 iteradorItems(pos, "avanzo")
//                 visiblesButtons()
//             } else if (fe_bautizo == 3 && pos == 1) {
//                 console.log('No ha escogido respuesta', pos)
//                 desplazoItems(true)
//                 iteradorItems(pos, "avanzo")
//                 visiblesButtons()
//             }
//         }
//         // && document.querySelector('.btn_no').className != "btn btn-outline-success btn_no"
//     }
//
//
//     // if (pos == 2 && fe_bautizo) {
//     //     desplazoItems(true)
//     // } else {
//     //     if (pos == 2 && !fe_bautizo) {
//     //         if (document.querySelector('.btn_yes').className != "btn btn-outline-success btn_yes" ||
//     //             document.querySelector('.btn_no').className != "btn btn-outline-success btn_no") {
//     //             document.querySelector('.aviso2').classList.add('mostrar')
//     //         } else {
//     //             document.querySelector('.aviso2').classList.remove('mostrar')
//     //             desplazoItems(true)
//     //         }
//     //     } else {
//     //         if (comprobacionItems(pos - 1)) {
//     //             desplazoItems(true)
//     //             iteradorItems(pos, "avanzo")
//     //             visiblesButtons()
//     //         }
//     //     }
//     //
//     // }
//
// })
// // Para el nivel de porcentaje cada que se de atrás
// back.addEventListener('click', () => {
//     desplazoItems(false)
//     iteradorItems(pos, "retrocedo")
//     visiblesButtons()
// })
//
// function showIconIncorrect(field) {
//     document.getElementById(`${field}`).classList.add('error-control');
//     document.getElementById(`${field}`).classList.remove('correcto-control');
//     document.querySelector(`#${field} i`).classList.remove('fa-check-circle');
//     document.querySelector(`#${field} i`).classList.add('fa-times-circle');
// }
//
// function hideIconIncorrect(field) {
//     document.getElementById(`${field}`).classList.remove('error-control');
//     document.getElementById(`${field}`).classList.add('correcto-control');
//     document.querySelector(`#${field} i`).classList.add('fa-check-circle');
//     document.querySelector(`#${field} i`).classList.remove('fa-times-circle');
// }
//
// function normalIcon(field) {
//     document.getElementById(`${field}`).classList.remove('error-control');
//     document.getElementById(`${field}`).classList.remove('correcto-control');
//     document.querySelector(`#${field} i`).classList.remove('fa-check-circle');
//     document.querySelector(`#${field} i`).classList.remove('fa-times-circle');
// }
//
// function validDateNac(e, field) { //Validamos el input date de la edad para que no sean menores a 7
//     if (e.target.value && field == 'fecha_nac') {
//         // let fecha_nac = formato(e.target.value)
//         let fecha_nac = e.target.value // Recordar que la fecha_nac está en formato 'yyyy-mm-dd'
//         let separador = /\W/g;
//         const yearNow = new Date();
//         const tiempoMs = Date.parse(yearNow) - Date.parse(fecha_nac);
//         const fechaEdad = Math.trunc(tiempoMs / 1000 / 3600 / 24 / 365)
//         if (fechaEdad > 7) {
//             if (separador.test(fecha_nac)) {
//                 hideIconIncorrect(field)
//             } else {
//                 showIconIncorrect(field)
//             }
//         } else {
//             showIconIncorrect(field)
//         }
//     } else {
//         showIconIncorrect(field)
//     }
// }
//
// const catchContPadre = (e) => {
//     inputs.forEach((item, index) => {
//         Object.values(item.children).forEach((input) => {
//             if (input == e.target) {
//                 contenedorPadre = Object.values(item.children)
//                 contenedorPadre.forEach((message) => {
//                     if (message.className == 'form-error') {
//                         // console.log(input)
//                         // console.log(e.target)
//                         let widthMessage = e.target.offsetWidth + 10
//                         messageEscogido = Object.values(message.children)[1]
//                         messageEscogido.style.width = `${widthMessage}px`
//                         // messageEscogido.children[0].style.transform = `translateY(${messageEscogido.children[0].offsetHeight}px)`
//                         // messageEscogido.style.transform = `translateY(${e.target.offsetWidth}px)`
//                         //Le doy el tamaño del input al message
//                     } else {
//
//                     }
//                 })
//             } //Aquí doy el tamaño del input exacto que se hace focus o blur al message
//         })
//     })
// }
//
// function convertirCaracterAEntero(caracter) {
//     switch (caracter) {
//         case 'I':
//             return 1;
//         case 'V':
//             return 5;
//         case 'X':
//             return 10;
//         case 'L':
//             return 50;
//         case 'C':
//             return 100;
//         case 'D':
//             return 500;
//         case 'M':
//             return 1000;
//         default:
//             return -1;
//     }
// }
//
// function convertirRomanoAEntero(romano) {
//     if (typeof romano != 'string') {
//         return null;
//     }
//
//     let numero = convertirCaracterAEntero(romano.charAt(0));
//     let anterior;
//     let actual;
//
//     for (let i = 1; i < romano.length; ++i) {
//         actual = convertirCaracterAEntero(romano.charAt(i));
//         anterior = convertirCaracterAEntero(romano.charAt(i - 1));
//
//         if (actual <= anterior) {
//             numero += actual;
//         } else {
//             numero = numero - anterior * 2 + actual;
//         }
//     }
//
//     return numero;
// }
//
//
// //------------------------------------------------------------------Validaciones del formulario
// const validForm = (e) => {
//     contenedorPadre = ''
//     catchContPadre(e) // Aquí capturamos el contenedor padre seleccionado
//
//     switch (e.target.name) {
//         case "nombres":
//             validField(expresiones.nombres, e.target, 'nombres')
//             break;
//         case "apellidos":
//             validField(expresiones.nombres, e.target, 'apellidos')
//             break;
//         case "edad":
//             validEdad(expresiones.numHij, e.target, 'edad')
//             break;
//         case "fecha_nac":
//             validDateNac(e, 'fecha_nac')
//             break;
//         case "cedula":
//             validField(expresiones.numerosCedu, e.target, 'cedula')
//             break;
//         case "colegio":
//             validField(expresiones.colegio, e.target, 'colegio')
//             break;
//         case "parroquia":
//             validFieldNo_Obliga(e.target, expresiones.parroquia)
//             break;
//         case "fecha_Baut":
//             validFieldNo_Obliga(e.target)
//             break;
//         case "tomo":
//             let tomo;
//             if (e.target.value) {
//                 if (!/^\d+$/.test(e.target.value)) {
//                     validField(expresiones.numRoman, e.target, 'tomo')
//                     tomo = convertirRomanoAEntero(e.target.value)
//                 } else {
//                     validField(expresiones.numeros, e.target, 'tomo')
//                     tomo = parseInt(e.target.value)
//                 }
//             } else {
//                 normalIcon(e.target.name)
//             }
//             break;
//         case "pagina":
//             validFieldNo_Obliga(e.target, expresiones.numeros)
//             break;
//         case "acta":
//             validFieldNo_Obliga(e.target, expresiones.numeros)
//             break;
//         case "nom_papa":
//             validField(expresiones.nombres, e.target, 'nom_papa')
//             break;
//         case "ape_papa":
//             validField(expresiones.nombres, e.target, 'ape_papa')
//             break;
//         case "ced_papa":
//             validField(expresiones.numerosCedu, e.target, 'ced_papa')
//             break;
//         case "cel_papa":
//             validField(expresiones.numerosTelf, e.target, 'cel_papa')
//             break;
//         case "nom_mama":
//             validField(expresiones.nombres, e.target, 'nom_mama')
//             break;
//         case "ape_mama":
//             validField(expresiones.nombres, e.target, 'ape_mama')
//             break;
//         case "ced_mama":
//             validField(expresiones.numerosCedu, e.target, 'ced_mama')
//             break;
//         case "cel_mama":
//             validField(expresiones.numerosTelf, e.target, 'cel_mama')
//             break;
//         case "num_hijos":
//             validField(expresiones.numHij, e.target, 'num_hijos')
//             break;
//         case "catequista":
//             validField(expresiones.nombres, e.target, 'catequista')
//             break;
//     }
// }
//
// const validField = (expresion, input, field) => {
//     let widthMessage = input.offsetWidth
//     document.querySelector('.message')
//     if (expresion.test(input.value)) {
//         hideIconIncorrect(field)
//         // messageEscogido.classList.add('--animation-desplazo')
//     } else {
//         showIconIncorrect(field)
//     }
// }
//
// const validNormal = (expresion, e) => {
//     if (expresion.test(e.value)) {
//         hideIconIncorrect(e.name)
//     } else {
//         showIconIncorrect(e.name)
//     }
// }
//
// const validFieldNo_Obliga = (e, expresion = -1) => {
//     if (e.value) {
//         if (expresion == -1) { //No se envió un de regex
//             if (e.name == 'fecha_Baut') {
//                 hideIconIncorrect(e.name)
//             } else {
//                 if (contenedorPadre[0].options[contenedorPadre[0].selectedIndex].value != 0) {
//                     hideIconIncorrect(e.name)
//                 }
//             }
//         } else { // Si se envió un regex
//             validNormal(expresion, e)
//         }
//     } else {
//         normalIcon(e.name)
//     }
// }
//
//
// // ----------------------------------------------------------- Casos puntuales
// const validEdad = (expresion, input, field) => {
//     if (parseInt(input.value) < 8 || !input.value || !expresion.test(input.value)) {
//         showIconIncorrect(field)
//         document.querySelector(`#${field} i`).classList.remove('fa-circle-exclamation');
//     } else {
//         document.getElementById(`${field}`).classList.remove('error-control');
//         document.getElementById(`${field}`).classList.add('correcto-control');
//         if (parseInt(input.value) > 7 && parseInt(input.value) <= 18) {
//             document.querySelector(`#${field} i`).classList.add('fa-check-circle');
//             document.querySelector(`#${field} i`).classList.remove('fa-circle-exclamation');
//             document.querySelector(`#${field} i`).classList.remove('fa-times-circle');
//         } else {
//             document.querySelector(`#${field} i`).classList.add('fa-circle-exclamation');
//             document.querySelector(`#${field} i`).classList.remove('fa-check-circle');
//             document.querySelector(`#${field} i`).classList.remove('fa-times-circle');
//         }
//     }
// }
//
// const validSelect = (e) => {
//     catchContPadre(e)
//     let indice = contenedorPadre[0].selectedIndex
//     let value = contenedorPadre[0].options[indice].value
//     if (e.target.name == "provincia" || e.target.name == "canton") {
//         console.log(e.target)
//         validFieldNo_Obliga(e.target)
//     } else {
//         if (contenedorPadre[0].options[indice].value != 0) {
//             hideIconIncorrect(contenedorPadre[0].name)
//         } else {
//             showIconIncorrect(contenedorPadre[0].name)
//         }
//     }
//
// }
//
// // function formato(texto) {
// //     return texto.replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1');
// // }
//
//
// inputs.forEach((item, index) => {
//     Object.values(item.children).forEach((input) => {
//         if (input.localName == 'input') {
//             input.addEventListener('keyup', validForm);
//             input.addEventListener('blur', validForm);
//             // input.addEventListener('mouseover', showMessage);
//         }
//         if (input.localName == 'select') {
//             input.addEventListener('blur', validSelect)
//             input.addEventListener('change', validSelect)
//         }
//     })
// })
//
// formulario.addEventListener('submit', (e) => {
//     e.preventDefault()
//
// })
//
//
// document.addEventListener('click', (e) => {
//     if (e.target.matches('.btn_yes')) {
//         fe_bautizo = 1
//         document.querySelector('.btn_yes').classList.add('activo')
//         document.querySelector('.btn_yes2').classList.add('activo')
//         document.querySelector('.btn_no').classList.remove('activo')
//         document.querySelector('.fe_bautizo_pregunta').classList.remove('mostrando')
//         document.querySelector('.fe_bautizo').classList.add('mostrando')
//         document.querySelector('.aviso2').classList.remove('mostrar')
//
//     }
//     if (e.target.matches('.btn_no')) {
//         document.querySelector('.btn_yes').classList.remove('activo')
//         document.querySelector('.btn_no').classList.add('activo')
//         document.querySelector('.aviso2').classList.remove('mostrar')
//         desplazoItems(true) //mandamos true porque vamos al siguiente item
//         iteradorItems(pos, "avanzo")
//         fe_bautizo = 0
//         visiblesButtons()
//     }
//
//     // if (e.target.matches('.btn_yes2')) {
//     //     fe_bautizo = false
//     //     document.querySelector('.fe_bautizo_pregunta').classList.remove('mostrando')
//     //     document.querySelector('.fe_bautizo').classList.add('mostrando')
//     // }
//     if (e.target.matches('.btn_no2')) {
//         desplazoItems(true) //mandamos true porque vamos al siguiente item
//         fe_bautizo = 0
//         document.querySelector('.btn_no').classList.add('activo')
//         document.querySelector('.btn_yes').classList.remove('activo')
//         document.querySelector('.fe_bautizo_pregunta').classList.add('mostrando')
//         document.querySelector('.fe_bautizo').classList.remove('mostrando')
//         document.querySelector('.aviso2').classList.remove('mostrar')
//         iteradorItems(pos, "avanzo")
//         visiblesButtons()
//     }
// })