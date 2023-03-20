const contenedor = document.getElementById('card')

export function pintarTarjetas(array) {
    const fragment = document.createDocumentFragment();
    if (array.length === 0) {
        contenedor.innerHTML = `<h5 class="display-3">your search had no matches</h5>`
        return
    }
    array.forEach(tarjeta => {
        const card = document.createElement('div')
        card.className = 'card shadow p-3 bg-body-tertiary rounded'
        card.style = 'width: 18rem;'

        card.innerHTML = `
            <img src="${tarjeta.image}" 
                class="card-img-top cajafotos" 
                alt="${tarjeta.category}">
            <div class="card-body d-flex flex-column justify-content-between flex-grow-1">
                <p class="card-text"><strong>${tarjeta.name}</strong></p>
                <p class="card-text">Description: ${tarjeta.description}</p>
                <p class="card-text">Category: ${tarjeta.category}</p>
                <p class="card-text">Place: ${tarjeta.place}</p>
                <div class="card-footer d-flex justify-content-center align-items-end mt-auto">
                    <a href="../pages/details.html?id=${tarjeta._id}" class="btn btn-primary">More Info</a>
                </div>
            </div>`

        fragment.appendChild(card)
    });

    contenedor.innerHTML = ''
    contenedor.appendChild(fragment)
}

export function filtrarPorTexto(array, texto) {
    let arrayFiltrado = array.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
    return arrayFiltrado
}

export function filtrarCategoria(array) {
    const checkboxes = document.querySelectorAll("input[type='checkbox']:checked")
    const checkedValues = Array.from(checkboxes).map(checkbox => checkbox.value)
    return checkedValues.length > 0 ? array.filter(elemento => checkedValues.includes(elemento.category)) : array
}

export function highestAttendancePercentage(evento) {
    let highestAttendancePercentage = 0
    let eventWithHighestAttendancePercentage = null;
    for (let i = 0; i < evento.length; i++) {
        const attendancePercentage = ((evento[i].assistance || evento[i].estimate)/ evento[i].capacity) * 100
        if (attendancePercentage > highestAttendancePercentage) {
            highestAttendancePercentage = attendancePercentage
            eventWithHighestAttendancePercentage = evento[i];
        }
    }
    return eventWithHighestAttendancePercentage
}

export function lowestAssistancePercentage(evento) {
    let lowestAssistancePercentage = Infinity
    let eventWithLowestAttendancePercentage = null
    for (let i = 0; i < evento.length; i++) {
        const assistancePercentage = ((evento[i].assistance || evento[i].estimate )/ evento[i].capacity) * 100
        if (assistancePercentage < lowestAssistancePercentage) {
            lowestAssistancePercentage = assistancePercentage
            eventWithLowestAttendancePercentage = evento[i]
        }
    }
    return eventWithLowestAttendancePercentage;
}

export function findMaxCapacityEvent(evento) {
    return evento.find(event => event.capacity === Math.max(...evento.map(event => event.capacity)))
}

export function statsPasado(datos) {
    let categorias = []
    let ganancias = []
    let porcentajes = []

    datos.forEach(dato => {
        if (!categorias.includes(dato.category)) {
            categorias.push(dato.category)
            ganancias[dato.category] = 0
            porcentajes[dato.category] = 0
        }
        ganancias[dato.category] += dato.price * dato.assistance
        porcentajes[dato.category] += dato.assistance / dato.capacity * 100

    })

    categorias.forEach(categoria => {
        ganancias[categoria] = ganancias[categoria]
        porcentajes[categoria] = (porcentajes[categoria] / datos.filter(dato => dato.category === categoria).length)
    });

    return { categorias, ganancias, porcentajes }
}
export function statsFuturo(datos) {
    let categorias = []
    let ganancias = []
    let porcentajes = []

    datos.forEach(dato => {
        if (!categorias.includes(dato.category)) {
            categorias.push(dato.category)
            ganancias[dato.category] = 0
            porcentajes[dato.category] = 0
        }
        ganancias[dato.category] += dato.price * dato.estimate
        porcentajes[dato.category] += dato.estimate / dato.capacity * 100
    })

    categorias.forEach(categoria => {
        ganancias[categoria] = ganancias[categoria]
        porcentajes[categoria] = (porcentajes[categoria] / datos.filter(dato => dato.category === categoria).length)
    })

    return { categorias, ganancias, porcentajes }
}

export function pintarFilas(dato, constante) {
    let filas = ''
    dato.categorias.forEach(categoria => {
        filas += `
            <tr>
                <td>${categoria}</td>
                <td>$ ${dato.ganancias[categoria].toFixed(2)}</td>
                <td>${dato.porcentajes[categoria].toFixed(2)} %</td>
            </tr>`
    })
    constante.innerHTML = filas
}