document.addEventListener("DOMContentLoaded", evt => {
    const $slcCanton = document.querySelector('.canton');
    let numProvi = 0
    // const $slcprovi = document.querySelector('.provincia')

    document.addEventListener('change', (evt) => {
        let option = evt.target;
        if (evt.target.matches('.provincia')) {
            if (option.value != "0") {
                $slcCanton.removeAttribute('disabled');
                $slcCanton.innerHTML = '';
                $slcCanton.innerHTML = '<option value="0" selected>Escoja el Cantón</option>'

                numProvi = option.value
                listCanton.forEach((item) => {
                    if (numProvi == item.provincia_id) {
                        $slcCanton.innerHTML += `<option>${item.nombre}</option>`
                    }

                })

            } else {
                $slcCanton.setAttribute('disabled', 'true');
                $slcCanton.innerHTML = '';
                $slcCanton.innerHTML = '<option value="0" selected>Escoja el Cantón</option>'
            }
        }
    })

})