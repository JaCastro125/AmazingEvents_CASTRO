import { pintarTarjetas, filtrarPorTexto, filtrarCategoria } from "./funcion.js"

//constantes que me permiten llamar al hmtl, en especifico a la estructura que los contiene para
//buscar || agregar
const input = document.querySelector('input')
const contenedorCheck = document.getElementById('checkContainer')

let arrayResults
let Url='../Assets/json/amazing.json'

//fetch nos permite traer de una Url, en este caso un json, todos los datos
//la funcion .then nos permite obtener datos del array eventos que se encuentra dentro del json
fetch(Url)
    .then((response) => response.json())
    .then(results => {

        arrayResults = results

        //se crean las constantes para llamarlas de un modo mas facil, acorto caminos
        const events = arrayResults.events
        const currentDate = arrayResults.currentDate

        //esta funcion permite crear un nuevo array con tarjetas que sean posteriores al 
        //currentDate del json
        const tarjetasPasadasArray = events.filter((event) => event.date < currentDate);

        //llamado a las funciones
        pintarTarjetas(tarjetasPasadasArray)
        crearCheckBoxes(tarjetasPasadasArray)
        superFiltro()

        //este evento escucha lo que ingresamos en la barra de search del html
        input.addEventListener('input', superFiltro)
        
        //este evento escucha si existe algun cambio en los checks
        contenedorCheck.addEventListener('change', superFiltro)

        //esta funcion permite filtrar por checks y search y pintar las tarjetas filtradas
        function superFiltro() {
            const resultado = filtrarCategoria(filtrarPorTexto(tarjetasPasadasArray, input.value));
            pintarTarjetas(resultado);
        }


    })
    //.catch nos permite detener todo lo que se ejecuta en el .then en caso de que la 
    //informacion este corrupta
    .catch((error) => {
        console.log(error);
    });

//esta funcion nos permite crear los checkboxes basado en crear array de categorias de los eventos
//con map creamos ese array de categorias
//con set eliminamos del array anterior las repeticiones
//luego con ese nuevo array creamos los checkboxes que insertamos con innerHTML
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