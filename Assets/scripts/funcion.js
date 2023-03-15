const contenedor = document.getElementById('card')

export function pintarTarjetas(array) {
    const fragment = document.createDocumentFragment();
    if (array.length === 0) {
        contenedor.innerHTML = `<h5 class="display-3">your search had no matches</h5>`
        return;
    }
    array.forEach(tarjeta => {
        const card = document.createElement('div');
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
    const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    const checkedValues = Array.from(checkboxes).map(checkbox => checkbox.value);
    return checkedValues.length > 0 ? array.filter(elemento => checkedValues.includes(elemento.category)) : array;
}

