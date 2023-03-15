import { pintarTarjetas, filtrarPorTexto, filtrarCategoria  } from "./funcion.js"
import data from "./main.js";

const events = data.events
const input = document.querySelector('input')

input.addEventListener('input', superFiltro)

const contenedorCheck = document.getElementById('checkContainer')

contenedorCheck.addEventListener('change', superFiltro)


pintarTarjetas(events)

crearCheckBoxes(events)

function superFiltro() {
    let primerFiltro = filtrarPorTexto(events, input.value)
    let segundoFiltro = filtrarCategoria(primerFiltro)
    pintarTarjetas(segundoFiltro)
}

function crearCheckBoxes(array) {
    let arrayCategorys = array.map(tarjeta => tarjeta.category)
    let setCategory = new Set(arrayCategorys)
    let arrayChecks = Array.from(setCategory)
    let checkboxes = ''
    arrayChecks.forEach(category => {
        checkboxes += `<div class="form-check me-4">
                <input class="form-check-input" type="checkbox" id="${category}" value="${category}">
                <label class="form-check-label" for="${category}">${category}</label>
              </div>`
    })
    contenedorCheck.innerHTML = checkboxes
}