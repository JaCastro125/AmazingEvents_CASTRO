import { viejasTarjetas, tarjetasPasadas } from "./functions.js"

const newCards = document.getElementById('card');

let cardnew = viejasTarjetas(tarjetasPasadas, newCards)