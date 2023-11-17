import { getPets, getWalkers } from "./database.js"

const pets = getPets()
const walkers = getWalkers()

document.addEventListener("click", (event) => {
    const clickedPetsEl = event.target
    const walkerMatch = walkers.find((walker) => walker.id === parseInt(clickedPetsEl.dataset.walkerfk))
    if (clickedPetsEl.dataset.type === "pet") {
        window.alert(`${clickedPetsEl.innerHTML} is being walked by ${walkerMatch.name}`)
    }
})

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li data-type="pet" data-walkerfk="${pet.walkerId}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

