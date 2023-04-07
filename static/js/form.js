const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')
const selects = document.querySelectorAll('#formulario select')

const expresiones = {
    nombres: /^[a-zA-ZÀ-ÿ\s]{1,75}$/, // Letras y espacios, pueden llevar acentos.
    colegio: /^[a-zA-ZÀ-ÿ\s\d\_\-]{1,50}$/, // Letras, números, espacios,  guion, guion_bajo  pueden llevar acentos
    parroquia: /^[a-zA-ZÀ-ÿ\s\d\_\-]{1,150}$/, // Letras, números, espacios,  guion, guion_bajo  pueden llevar acentos
    password: /^.{4,12}$/, // 4 a 12 digitos.
    numerosCelTelf: /^\d{10}$/, // 10 numeros.
    numHij: /^\d{1,2}$/ // 2 numeros.
}

const grande = document.querySelector('.grande')
const next = document.querySelector('.next')
const back = document.querySelector('.back')
const prog_bar = document.querySelector('.progress-bar')
let porcentaje = parseInt(prog_bar.style.width)
let num_items = document.querySelectorAll('.item').length
let pos = 1
let oper = 0

function visibles() {
    if (pos == 1) {
        back.setAttribute('disabled', 'true')
    } else {
        back.removeAttribute('disabled')
    }

    if (pos == num_items) {
        next.setAttribute('disabled', 'true')
    } else {
        next.removeAttribute('disabled')
    }

}

next.addEventListener('click', () => {

    porcentaje += (100 / num_items)
    prog_bar.style.width = `${porcentaje.toString()}%`
    oper = pos * -(100 / num_items)
    grande.style.transform = `translateX(${oper}%)`
    pos += 1
    visibles()
})

back.addEventListener('click', () => {
    porcentaje -= (100 / num_items)
    prog_bar.style.width = `${porcentaje.toString()}%`

    oper = oper + (100 / num_items)
    grande.style.transform = `translateX(${oper}%)`
    pos -= 1
    visibles()
})


const validForm = (e) => {
    switch (e.target.name) {
        case "nombres":
            validField(expresiones.nombres, e.target, 'nombres')
            break;
        case "apellidos":
            validField(expresiones.nombres, e.target, 'apellidos')
            break;
        case "edad":

            break;
        case "fecha_nac":

            break;
        case "cedula":
            validField(expresiones.numerosCelTelf, e.target, 'cedula')
            break;
        case "colegio":
            validField(expresiones.colegio, e.target, 'colegio')
            break;
        case "provincia":

            break;
        case "canton":

            break;
        case "parroquia":
            validField(expresiones.parroquia, e.target, 'parroquia')
            break;
        case "fecha_Baut":

            break;
        case "tomo":
            validField(expresiones.nombres, e.target, 'tomo')
            break;
        case "pagina":
            validField(expresiones.numerosCelTelf, e.target, 'pagina')
            break;
        case "acta":

            break;
        case "archivosubido":

            break;
        case "nom_papa":
            validField(expresiones.nombres, e.target, 'nom_papa')
            break;
        case "ape_papa":
            validField(expresiones.nombres, e.target, 'ape_papa')
            break;
        case "ced_papa":
            validField(expresiones.numerosCelTelf, e.target, 'ced_papa')
            break;
        case "cel_papa":
            validField(expresiones.numerosCelTelf, e.target, 'cel_papa')
            break;
        case "estado_civ_pa":

            break;
        case "radios":

            break;
        case "nom_mama":
            validField(expresiones.nombres, e.target, 'nom_mama')
            break;
        case "ape_mama":
            validField(expresiones.nombres, e.target, 'ape_mama')
            break;
        case "ced_mama":
            validField(expresiones.numerosCelTelf, e.target, 'ced_mama')
            break;
        case "cel_mama":
            validField(expresiones.numerosCelTelf, e.target, 'cel_mama')
            break;
        case "estado_civ_ma":

            break;
        case "radios":

            break;
        case "num_hijos":
            validField(expresiones.numHij, e.target, 'num_hijos')
            break;
    }
}

const validField = (expresion, input, field) => {
    if (expresion.test(input.value)) {
        document.getElementById(`${field}`).classList.remove('error-control');
        document.getElementById(`${field}`).classList.add('correcto-control');
        document.querySelector(`#${field} i`).classList.add('fa-check-circle');
        document.querySelector(`#${field} i`).classList.remove('fa-times-circle');
    } else {
        document.getElementById(`${field}`).classList.add('error-control');
        document.getElementById(`${field}`).classList.remove('correcto-control');
        document.querySelector(`#${field} i`).classList.remove('fa-check-circle');
        document.querySelector(`#${field} i`).classList.add('fa-times-circle');
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validForm);
    input.addEventListener('blur', validForm);
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

})