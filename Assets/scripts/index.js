import { pintarTarjetas, filtrarPorTexto, filtrarCategoria } from "./funcion.js"

const input = document.querySelector('input')

let arrayResults

fetch('../Assets/json/amazing.json')
    .then((response) => response.json())
    .then(results => {

        arrayResults = results

        const events = arrayResults.events
        const currentDate = arrayResults.currentDate
        const tarjetasPasadasArray = events.filter((event) => event.date < currentDate);

        pintarTarjetas(events)

        crearCheckBoxes(events)

        superFiltro(events)

        input.addEventListener('input', superFiltro)

        function superFiltro(valor) {
            let primerFiltro = filtrarPorTexto(events, input.value)
            let segundoFiltro = filtrarCategoria(primerFiltro)
            pintarTarjetas(segundoFiltro)
        }

        contenedorCheck.addEventListener('change', superFiltro)

    })
    .catch((error) => {
        console.log(error);
    });

const contenedorCheck = document.getElementById('checkContainer')

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