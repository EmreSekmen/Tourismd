const Container = document.querySelector("#placesContainer");
const SearchInput = document.querySelector("#searchInput");
const searchMessage = document.querySelector("#noResults");




function renderPlaces(placeList) {

    placeList.forEach(place => {


        const card = document.createElement("div")
        card.classList.add("kesfetkart");

        const img = document.createElement("img")
        img.src = place.image

        const info = document.createElement("div")
        info.classList.add("info")

        const tittle = document.createElement("h4")
        tittle.textContent = place.name

        const location = document.createElement("p")
        location.textContent = place.location

        const stars = document.createElement("div")
        stars.classList.add("stars")
        stars.textContent = place.rating

        info.appendChild(tittle)
        info.appendChild(location)
        info.appendChild(stars)

        card.appendChild(img)
        card.appendChild(info)

        card.addEventListener("click", () => { window.location.href = `Detay.html?id=${place.id}` })

        Container.appendChild(card)
    })






}


renderPlaces(places)


SearchInput.addEventListener("input", () => {

    const filteredPlaces = places.filter(place => {
        return place.name.toLowerCase().includes(SearchInput.value.toLowerCase())
            || place.location.toLowerCase().includes(SearchInput.value.toLowerCase())
            || place.category.toLowerCase().includes(SearchInput.value.toLowerCase())
    })

    if (filteredPlaces.length === 0) {
        searchMessage.textContent = "Sonuç Bulunamadı"
    }
    else {
        searchMessage.textContent = "";
    }

    Container.innerHTML = ""
    renderPlaces(filteredPlaces)

})