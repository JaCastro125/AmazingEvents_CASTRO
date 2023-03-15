import data from "./main.js";

const events = data.events;
const currentDate = data.currentDate;
const name = data.events.name;
const category = data.events.category;

export function tarjetasPasadas() {
  return events.filter((event) => event.date < currentDate);
}

export function tarjetasFuturas() {
  return events.filter((event) => event.date > currentDate);
}

export function tarjetasHome() {
  let home = [];
  for (let i = 0; i < events.length; i++) {
    home.push(data.events[i]);
  }
  return home;
}

export function nuevasTarjetas(array, contenedor) {
  let fragment = document.createDocumentFragment();

  tarjetasFuturas().forEach((tarjeta) => {
    let div = document.createElement("div");
    div.classList = "card shadow p-3 bg-body-tertiary rounded";
    div.style = "width: 18rem;";
    div.innerHTML = `
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
    fragment.appendChild(div);
  });
  contenedor.appendChild(fragment);
}

export function viejasTarjetas(array, contenedor) {
  let fragment = document.createDocumentFragment();

  tarjetasFuturas().forEach (tarjeta => {
    let div = document.createElement("div");
    div.classList = "card shadow p-3 bg-body-tertiary rounded";
    div.style = "width: 18rem;";
    div.innerHTML = `
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
    fragment.appendChild(div);
  })
  contenedor.appendChild(fragment);
}

export function todasLasTarjetas(array, contenedor) {
  let fragment = document.createDocumentFragment();

  tarjetasHome().forEach(tarjeta => {
    let div = document.createElement("div");
    div.classList = "card shadow p-3 bg-body-tertiary rounded";
    div.style = "width: 18rem;";
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
    </div>`;
    fragment.appendChild(div);
  })
  contenedor.appendChild(fragment);
}

// Usar filter, foreach, map

// Funcion que filtre busqueda por serch
// button --> id: boton
// input --> id: input

/*

*/

// funcion que filtre por checkbox

// funcion que combine ambas anteriores
