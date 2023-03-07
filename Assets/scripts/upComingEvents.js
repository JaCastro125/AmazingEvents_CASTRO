import data from "./main.js";

const newCards = document.getElementById('card');

let upcomingEvent = []
function filtrarTarjetas() {
  for (let i = 0; i < data.events.length; i++) {
    if (data.events[i].date > data.currentDate) {
      upcomingEvent.push(data.events[i])
    }
  }
  return upcomingEvent;
}

let fragmento = document.createDocumentFragment();
upcomingEvent = filtrarTarjetas(upcomingEvent)

for (const tarjeta of upcomingEvent) {
  let div = document.createElement("div");
  div.innerHTML = `
    <div class="card shadow p-3 bg-body-tertiary rounded" style="width: 18rem;">
        <img src="${tarjeta.image}" 
            class="card-img-top cajafotos" 
            alt="${tarjeta.category}">
        <div class="card-body">
            <p class="card-text"><strong>${tarjeta.name}</strong></p>
            <p class="card-text">Date: ${tarjeta.date}</p>
            <p class="card-text">Description: ${tarjeta.description}</p>
            <p class="card-text">Category: ${tarjeta.category}</p>
            <p class="card-text">Place: ${tarjeta.place}</p>
            <p class="card-text">Capacity: ${tarjeta.capacity}</p>
            <p class="card-text">Assistance: ${tarjeta.assistance}</p>
            <div class="card-footer">
                <small>$ ${tarjeta.price}</small>
                <a href="../pages/details.html" class="btn btn-primary">Add Cart</a>
            </div>
        </div>
    </div>`;
  fragmento.appendChild(div);
}

newCards.appendChild(fragmento)