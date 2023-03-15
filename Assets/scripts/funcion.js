import data from "./main.js";
const events = data.events

const contenedor = document.getElementById('card')
/* const contenedorCheck = document.getElementById('checkContainer')

contenedorCheck.addEventListener('change', superFiltro)
 */
/* function superFiltro() {
    let primerFiltro = filtrarPorTexto(events, input.value)
    let segundoFiltro = filtrarCategoria(primerFiltro)
    pintarTarjetas(segundoFiltro)
} */

/* export function crearCheckBoxes(array) {
    let arrayCountrys = array.map(tarjeta => tarjeta.category)
    let setCountry = new Set(arrayCountrys)
    let arrayChecks = Array.from(setCountry)
    let checkboxes = ''
    arrayChecks.forEach(category => {
        checkboxes += `<div class="form-check">
                <input class="form-check-input" type="checkbox" id="${category}" value="${category}">
                <label class="form-check-label" for="${category}">${category}</label>
              </div>`
    })
    contenedorCheck.innerHTML = checkboxes
} */

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
                <a href="../pages/details.html" class="btn btn-primary">More Info</a>
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

