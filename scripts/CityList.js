import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

export const CityList = () => {
    let citiesHTML = "<ul>"
    
    document.addEventListener("click", (event) => {
        const clickedEl = event.target
        if (clickedEl.dataset.type === "city") {
            const cityId = parseInt(clickedEl.dataset.id)
            let walkerNames = []
            for (const walker of walkers) {
                if (cityId === walker.cityId) {
                    walkerNames.push(walker.name)
                }
            }
            let walkerString = ''
            for (let i = 0; i < walkerNames.length; i++) {
                walkerString += `${walkerNames[i]}, `
            }
            const f_walkerString = walkerString.slice(0, -2)
            for (const city of cities) {
                if (cityId === city.id) {
                    window.alert(`${city.name} is being serviced by the following walkers:\n${f_walkerString}`)
                }
            }
        }
    })

    // document.addEventListener("click", (event) => {
    //     const clickedCityEl = event.target
    //     if (clickedCityEl.dataset.type === "city") {
    //         const cityId = parseInt(clickedCityEl.dataset.cityid)
    //         for 
    //         window.alert(`${clickedCityEl.innerHTML} is being serviced by ${clickedCityEl.dataset.walkername}`)
    //     }
    // })

    for (const city of cities) {
        citiesHTML += `<li data-type="city" data-id="${city.id}">${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

