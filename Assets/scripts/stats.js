import { highestAttendancePercentage, lowestAssistancePercentage, findMaxCapacityEvent, statsPasado, statsFuturo, pintarFilas } from "./funcion.js"

let arrayResults

const highest = document.getElementById('r1')
const lowest = document.getElementById('r2')
const larger = document.getElementById('r3')
const statsUp = document.getElementById('statsUpcoming')
const statsPass = document.getElementById('statsPassEvents')

fetch('../Assets/json/amazing.json')
    .then((response) => response.json())
    .then(results => {

        arrayResults = results

        const events = arrayResults.events
        const currentDate = arrayResults.currentDate
        const tarjetasPasadasArray = events.filter((event) => event.date < currentDate)
        const tarjetasFuturasArray = events.filter((event) => event.date > currentDate)

        highestAttendancePercentage(events)
        const eventWithHighestAttendancePercentage = highestAttendancePercentage(events)
        highest.innerHTML = `${eventWithHighestAttendancePercentage.name}`

        lowestAssistancePercentage(events)
        const eventWithLowestAttendancePercentage = lowestAssistancePercentage(events)
        lowest.innerHTML = `${eventWithLowestAttendancePercentage.name}`

        findMaxCapacityEvent(events)
        const maxCapacityEvent = findMaxCapacityEvent(events)
        larger.innerHTML = `${maxCapacityEvent.name}`

        statsPasado(tarjetasPasadasArray)
        const statsP = statsPasado(tarjetasPasadasArray)
        pintarFilas(statsP, statsPass)
        
        statsFuturo(tarjetasFuturasArray)
        const statsU = statsFuturo(tarjetasFuturasArray)
        pintarFilas(statsU, statsUp)
    })

    .catch((error) => {
        console.log(error)
    })


