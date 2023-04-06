const grande = document.querySelector('.grande')
const next = document.querySelector('.next')
const back = document.querySelector('.back')
let pos = 1
let oper = 0

function visibles() {
    if (pos == 1) {
        back.setAttribute('disabled', 'true')
    } else {
        back.removeAttribute('disabled')
    }

    if (pos == 4) {
        next.setAttribute('disabled', 'true')
    } else {
        next.removeAttribute('disabled')
    }

}

next.addEventListener('click', () => {
    oper = pos * - 25
    grande.style.transform = `translateX(${oper}%)`
    pos += 1
    visibles()
})

back.addEventListener('click', () => {
    oper = oper + 25
    grande.style.transform = `translateX(${oper}%)`
    pos -= 1
    visibles()
})
