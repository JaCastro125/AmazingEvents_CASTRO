const contenedor = document.getElementById('card')

export function pintarTarjetas(array) {
    if (array.length == 0) {
        contenedor.innerHTML = `<h5 class="display-3">No se encontraron coincidencias</h5>`
        return
    }
    let tarjetas = ''
    array.forEach(tarjeta => {
        tarjetas += `
        <div class="card shadow p-3 bg-body-tertiary rounded" style="width: 18rem;">
        <img src="${tarjeta.image}" 
            class="card-img-top cajafotos" 
            alt="${tarjeta.category}">
        <div class="card-body">
            <p class="card-text"><strong>${tarjeta.name}</strong></p>
            <p class="card-text">Description: ${tarjeta.description}</p>
            <p class="card-text">Category: ${tarjeta.category}</p>
            <p class="card-text">Place: ${tarjeta.place}</p>
            <div class="card-footer">
                <a href="../pages/details.html?id=${tarjeta._id}" class="btn btn-primary">More Info</a>
            </div>
        </div>
    </div>`
    })
    contenedor.innerHTML = tarjetas
}

export function filtrarPorTexto(array, texto) {
    let arrayFiltrado = array.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
    return arrayFiltrado
}

export function filtrarCategoria(array) {
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    let arrayChecks = Array.from(checkboxes)
    let arrayChecksChecked = arrayChecks.filter(check => check.checked)
    let arrayChecksCheckedValues = arrayChecksChecked.map(checkChecked => checkChecked.value)
    let arrayFiltrado = array.filter(elemento => arrayChecksCheckedValues.includes(elemento.category))
    if (arrayChecksChecked.length > 0) {
        return arrayFiltrado
    }
    return array
}

