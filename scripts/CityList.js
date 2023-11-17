import { getWalkers } from "./database.js"

const walkers = getWalkers()


export const CityList = () => {
    let citiesHTML = "<ul>"
    
    document.addEventListener("click", (event) => {
        const clickedCityEl = event.target
        if (clickedCityEl.dataset.type === "city") {
            window.alert(`${clickedCityEl.innerHTML} is being serviced by ${clickedCityEl.dataset.walkername}`)
        }
    })

    for (const walker of walkers) {
        citiesHTML += `<li data-type="city" data-walkername="${walker.name}">${walker.city}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

