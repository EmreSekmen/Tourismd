let activeTab = null

const heroTitle = document.querySelector(".hero-title");
const heroImage = document.querySelector(".hero-image");
const heroInfo = document.querySelector(".hero-info");
const userActions = document.querySelector(".user-actions");
const about = document.querySelector(".about");
const categories = document.querySelector(".categories");
const mustVisit = document.querySelector(".must-visit");
const recentLogs = document.querySelector(".recent-logs");
const recentLogContainer = document.querySelector(".recent-log-container")

const mustVisitBtn = document.querySelector("#mustVisitBtn");
const mustVisitContainer = document.querySelector(".must-visit-container");

const recentLogBtn = document.querySelector("#recentLogsBtn")

const params = new URLSearchParams(window.location.search)
const placeDetails = document.querySelector("#placeDetails")

const breadcrumb = document.querySelector(".breadcrumb")


const filterBtn = document.querySelector("#filterBtn")
const filterContainer = document.querySelector(".filter-container")

const placeId = Number(params.get("id"))

const foundPlaces = places.find(place => {
    return place.id === placeId;
})

console.log(placeId)
console.log(foundPlaces)

let favorites = JSON.parse(localStorage.getItem("favorites")) || []

function renderDetails(place) {

    const img = document.createElement("img")
    img.src = place.image

    const title = document.createElement("h1")
    title.textContent = place.name

    const location = document.createElement("p")
    location.textContent = place.location

    const stars = document.createElement("p")
    stars.textContent = place.rating

    const category = document.createElement("p")
    category.textContent = place.category


    heroImage.appendChild(img)

    heroTitle.appendChild(title)
    heroInfo.appendChild(location)
    heroInfo.appendChild(stars)
    heroInfo.appendChild(category)



    const favoriteBtn = document.createElement("button")
    favoriteBtn.textContent = "❤️ Favorite";

    const WantToVısıtBtn = document.createElement("button")
    WantToVısıtBtn.textContent = "✈️ Want to visit"

    const visitedBtn = document.createElement("button")
    visitedBtn.textContent = "✅ Visited"

    const rateBtn = document.createElement("button")
    rateBtn.textContent = "⭐⭐⭐⭐⭐"

    const rewiewBtn = document.createElement("button")
    rewiewBtn.textContent = "📝 Review"

    const addToListBtn = document.createElement("button")
    addToListBtn.textContent = "➕ Add to List"

    userActions.appendChild(favoriteBtn)
    userActions.appendChild(WantToVısıtBtn)
    userActions.appendChild(visitedBtn)
    userActions.appendChild(rateBtn)
    userActions.appendChild(rewiewBtn)
    userActions.appendChild(addToListBtn)

    const aboutTitle = document.createElement("h2");
    aboutTitle.textContent = "About: ";

    const description = document.createElement("p")
    description.textContent = place.description;

    about.appendChild(aboutTitle)
    about.appendChild(description)







    favoriteBtn.addEventListener("click", () => {

        const isAlreadyFavorited = favorites.some(favorite => {
            return favorite.id === place.id
        })

        if(isAlreadyFavorited){
            favoriteBtn.textContent = "✅ Favorited"
        }

        if (isAlreadyFavorited !== true) {
            favorites.push(place)


            
            console.log(isAlreadyFavorited)

            localStorage.setItem("favorites", JSON.stringify(favorites))

            console.log(favorites)

            localStorage.getItem("favorites")
            JSON.parse(localStorage.getItem("favorites"))
        }


    })

}



function renderMustVisit(cityId, category = "All") {

    mustVisitContainer.innerHTML = "";

    const placesInCity = places.filter(place => {
        const sameCity = place.parentId === cityId

        if (category === "All") {
            return sameCity
        }

        return (
            sameCity &&
            place.category.toLowerCase() === category.toLowerCase()
        );


    })





    placesInCity.forEach(place => {

        const card = document.createElement("div")
        card.classList.add("must-visit-card")

        const img = document.createElement("img")
        img.src = place.image

        const title = document.createElement("h3")
        title.textContent = place.name

        const rating = document.createElement("p")
        rating.textContent = place.rating

        card.appendChild(img)
        card.appendChild(title)
        card.appendChild(rating)

        mustVisitContainer.appendChild(card);

        card.addEventListener("click", () => {
            window.location.href = `Detay.html?id=${place.id}`
        })


    })



}



mustVisitBtn.addEventListener("click", () => {
    if (activeTab === "mustVisit") {
        closeAllTabs();
        return;
    }

    closeAllTabs();
    renderMustVisit(foundPlaces.id);
    activeTab = "mustVisit";
})

function renderRecentLogs(placeId) {
    const logsForPlace = logs.filter(log => {
        return log.placeId === placeId
    })

    logsForPlace.forEach(log => {
        const card = document.createElement("div")
        card.classList.add("log-card")

        const user = document.createElement("h1")
        user.textContent = log.user

        const rating = document.createElement("p")
        rating.textContent = log.rating

        const review = document.createElement("p")
        review.textContent = log.review

        const date = document.createElement("small")
        date.textContent = log.date


        card.appendChild(user);
        card.appendChild(rating);
        card.appendChild(review);
        card.appendChild(date);

        recentLogContainer.appendChild(card)
    })
}

let isRecentLogOpen = false

recentLogBtn.addEventListener("click", () => {
    if (activeTab === "recentLogs") {
        closeAllTabs();
        return;
    }

    closeAllTabs();
    renderRecentLogs(foundPlaces.id);
    activeTab = "recentLogs";
})



renderDetails(foundPlaces)


if (foundPlaces.type !== "city") {
    mustVisitBtn.style.display = "none"
    filterBtn.style.display = "none"
}



function renderFilter() {
    filterContainer.innerHTML = ""

    const categories = [
        "All",
        "Landmark",
        "Nature",
        "Food",
        "Shopping",
        "Beach",
    ]

    categories.forEach(category => {
        const button = document.createElement("button")
        button.classList.add("filter-btn");
        button.textContent = category;



        button.addEventListener("click", () => {
            renderMustVisit(foundPlaces.id, category)
        })


        filterContainer.appendChild(button)
    })


}

filterBtn.addEventListener("click", () => {


    if (activeTab === "filter") {
        closeAllTabs();
        return;
    }

    closeAllTabs();
    renderFilter();
    activeTab = "filter";

})



function closeAllTabs() {
    mustVisitContainer.innerHTML = ""
    recentLogContainer.innerHTML = ""
    filterContainer.innerHTML = ""

    activeTab = null
}



const parentPlaces = places.find(place => {
    return place.id === foundPlaces.parentId;


})

console.log(parentPlaces)

if (parentPlaces) {

    const parentLink = document.createElement("a")
    parentLink.textContent = parentPlaces.name
    parentLink.href = `Detay.html?id=${parentPlaces.id}`


    const currentPlaces = document.createElement("span")
    currentPlaces.textContent = ` > ${foundPlaces.name}`;


    breadcrumb.append(parentLink)
    breadcrumb.append(currentPlaces)
}


