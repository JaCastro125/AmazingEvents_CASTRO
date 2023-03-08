import data from "./main.js";

const events = data.events
const newCards = document.getElementById('card');

function filtrarTarjetas() {
  let home = []
  for (let i = 0; i < data.events.length; i++) {
      home.push(data.events[i])
  }
  return home;
}

function nuevasTarjetas(array, contenedor){
  let fragment = document.createDocumentFragment()

  for (let tarjeta of filtrarTarjetas()){
    let div = document.createElement('div')
    div.classList = 'card shadow p-3 bg-body-tertiary rounded' 
    div.style = 'width: 18rem;'
    div.innerHTML = `
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
    fragment.appendChild(div)
  }
  contenedor.appendChild(fragment)
}

let card = nuevasTarjetas(filtrarTarjetas, newCards)

