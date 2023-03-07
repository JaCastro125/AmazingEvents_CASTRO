import data from "./main.js";

let upComing = [];
function bring(upComing) {
  for (let i = 0; i < data.events.length; i++) {
    upComing.push(data.events[i]);
  }
  return upComing;
}

const newCards = document.getElementById("card");
upComing = bring(upComing);
let tarjetas = "";
for (const tarjeta of upComing) {
  tarjetas += `
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
}
newCards.innerHTML=tarjetas
