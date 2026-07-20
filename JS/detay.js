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

const placeId = Number(params.get("id"))

const foundPlaces = places.find(place => {
    return place.id === placeId;
})

console.log(placeId)
console.log(foundPlaces)

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



}



function renderMustVisit(cityId) {
    const placesInCity = places.filter(place => {
        return place.parentId === cityId
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


    })

}


let isMustvisitOpen = false;
mustVisitBtn.addEventListener("click", () => {
    if (isMustvisitOpen) {
        mustVisitContainer.innerHTML = ""
        isMustvisitOpen = false;
    }
    else {
        recentLogContainer.innerHTML = "";
        isRecentLogOpen = false;

        renderMustVisit(foundPlaces.id)
        isMustvisitOpen = true;
    }
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
        if(isRecentLogOpen){
            recentLogContainer.innerHTML = ""
            isRecentLogOpen = false
           
        }
        else{

             mustVisitContainer.innerHTML = "";
             isMustVisitOpen = false;

            renderRecentLogs(foundPlaces.id)
            isRecentLogOpen = true
            i
        }
})



renderDetails(foundPlaces)

