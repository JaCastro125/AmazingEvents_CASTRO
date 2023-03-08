import { todasLasTarjetas, tarjetasHome } from "./functions.js"

const newCards = document.getElementById('card')

let cardhome = todasLasTarjetas(tarjetasHome, newCards)