const grande = document.querySelector('.grande')
const next = document.querySelector('.next')
const back = document.querySelector('.back')
let pos = 1
let oper = 0

function visibles() {
    if (pos == 1) {
        back.setAttribute('disabled','true')
    } else {
        back.removeAttribute('disabled')
    }

    if (pos == 3) {
        next.setAttribute('disabled', 'true')
    } else {
        next.removeAttribute('disabled')
    }

}

next.addEventListener('click', () => {
    oper = pos * -33.33
    grande.style.transform = `translateX(${oper}%)`
    pos += 1
visibles()
})

back.addEventListener('click', () => {
    oper = oper + 33.33
    grande.style.transform = `translateX(${oper}%)`
    pos -= 1
visibles()
})


// puntos.forEach((item, i)=>{
//     item.addEventListener('click',()=>{
//         let pos = i
//         let oper = pos * -33.33
//
//         grande.style.transform = `translateX(${oper}%)`
//
//         puntos.forEach((item)=>{
//             item.classList.remove('activo')
//         })
//             puntos[pos].classList.add('activo')
//     })
// })