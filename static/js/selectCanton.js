document.addEventListener("DOMContentLoaded", evt => {
    const $slcCanton = document.querySelector('.canton');
    let numProvi = 0
    // const $slcprovi = document.querySelector('.provincia')

    document.addEventListener('change', (evt) => {
        let option = evt.target;
        if (evt.target.matches('.provincia')) {
            if (option.value != "Non") {
                $slcCanton.removeAttribute('disabled');
                normalIcon('canton')
                $slcCanton.innerHTML = '';
                $slcCanton.innerHTML = '<option value="0" selected disabled>Escoja el Cantón</option>'
                $slcCanton.innerHTML += '<option value="Non">No recuerdo</option>'

                numProvi = option.value

                listCanton.forEach((item) => {
                    if (numProvi == item.provincia_id) {
                        $slcCanton.innerHTML += `<option>${item.nombre}</option>`
                    }

                })

            } else {
                normalIcon('canton')
                $slcCanton.setAttribute('disabled', 'true');
                $slcCanton.innerHTML = '';
                $slcCanton.innerHTML = '<option value="0" selected>Escoja el Cantón</option>'
            }
        }
    })

})