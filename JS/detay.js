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
let wantToVisit = JSON.parse(localStorage.getItem("wanttovisit")) || []
let isİnVisited = JSON.parse(localStorage.getItem("isVisited")) || []
let ratings = JSON.parse(localStorage.getItem("ratings")) || []



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
    visitedBtn.textContent = "❌ Visited"

    const ratingContainer = document.createElement("div")
    ratingContainer.classList.add("ratingContainer")

    const ratingButtons = []


    for (let i = 1; i <= 5; i++) {
        const ratingButon = document.createElement("button")
        ratingButon.textContent = "☆"

        ratingContainer.appendChild(ratingButon)

        ratingButtons.push(ratingButon)


        ratingButon.addEventListener("click", () => {

            ratingButtons.forEach((button, index) => {
                if (index < i) {
                    button.textContent = "★"
                }
                else {
                    button.textContent = "☆"
                }
            })


            const NewRatings = {
                placeId: place.id,
                rating: i
            }

            const existingRating = ratings.find(item => {
                return item.placeId === place.id
            })

            if(existingRating){
                existingRating.rating = i
            }
            else{
                ratings.push(NewRatings)
                
            }


            localStorage.setItem("ratings", JSON.stringify(ratings))
        })

    }



    const rewiewBtn = document.createElement("button")
    rewiewBtn.textContent = "📝 Review"

    const addToListBtn = document.createElement("button")
    addToListBtn.textContent = "➕ Add to List"

    userActions.appendChild(favoriteBtn)
    userActions.appendChild(WantToVısıtBtn)
    userActions.appendChild(visitedBtn)
    userActions.appendChild(ratingContainer)
    userActions.appendChild(rewiewBtn)
    userActions.appendChild(addToListBtn)

    const aboutTitle = document.createElement("h2");
    aboutTitle.textContent = "About: ";

    const description = document.createElement("p")
    description.textContent = place.description;

    about.appendChild(aboutTitle)
    about.appendChild(description)


    const isFavorited = favorites.some(favorite => {
        return favorite.id === place.id;
    });

    if (isFavorited) {
        favoriteBtn.textContent = "✅ Favorited";
    }

    const isAlreadyInWantToVisit = wantToVisit.some(wanttovisit => {
        return wanttovisit.id === place.id;
    });


    if (isAlreadyInWantToVisit) {
        WantToVısıtBtn.textContent = "in Want to visit list"

    }

    const isVisited = isİnVisited.some(isVisited => {
        return isVisited.id === place.id
    })

    if (isVisited) {
        visitedBtn.textContent = "✅ Visited"
    }







    favoriteBtn.addEventListener("click", () => {

        const isAlreadyFavorited = favorites.some(favorite => {
            return favorite.id === place.id
        })


        if (isAlreadyFavorited) {
            favorites = favorites.filter(favorite => {
                return favorite.id !== place.id
            })

            favoriteBtn.textContent = "❤️ Favorite"
            localStorage.setItem("favorites", JSON.stringify(favorites))
        }


        if (!isAlreadyFavorited) {
            favorites.push(place)
            favoriteBtn.textContent = "✅ Favorited"



            console.log(isAlreadyFavorited)

            localStorage.setItem("favorites", JSON.stringify(favorites))

            console.log(favorites)


        }


    })



    WantToVısıtBtn.addEventListener("click", () => {

        const isAlreadyInWantToVisit = wantToVisit.some(wanttovisit => {
            return wanttovisit.id === place.id;
        });

        if (isAlreadyInWantToVisit) {
            wantToVisit = wantToVisit.filter(wanttovisit => {
                return wanttovisit.id !== place.id
            })

            WantToVısıtBtn.textContent = "✈️ Want to visit"
            localStorage.setItem("wanttovisit", JSON.stringify(wantToVisit))
        }

        if (!isAlreadyInWantToVisit) {

            wantToVisit.push(place)
            WantToVısıtBtn.textContent = "in Want to visit list"


            localStorage.setItem("wanttovisit", JSON.stringify(wantToVisit))


        }


    })

    visitedBtn.addEventListener("click", () => {
        const isVisited = isİnVisited.some(isVisited => {
            return isVisited.id === place.id
        })

        if (isVisited) {
            isİnVisited = isİnVisited.filter(isVisited => {
                return isVisited.id !== place.id
            })

            visitedBtn.textContent = "❌ Visited"
            localStorage.setItem("isVisited", JSON.stringify(isİnVisited))
        }

        if (!isVisited) {
            isİnVisited.push(place)
            visitedBtn.textContent = "✅ Visited"

            localStorage.setItem("isVisited", JSON.stringify(isİnVisited))
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


