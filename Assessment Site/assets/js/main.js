const BASE_URL = "https://api.unsplash.com/"
const SUNGLASSES_PATH = "search/photos?query=sunglasses"
const ART_PATH = "search/photos?query=art"
const PROMISES_PATH = "search/photos/?query=sunglasses-accessory"
const ACCESS_KEY = "dk7QTw70p5K8kW9Db-HCea0TMpIYQiM4o_DbhXioOJU"
const KEY_PATH = `&client_id=${ACCESS_KEY}`

let sunImages = document.querySelectorAll(".sunglasses")
let artImages = document.querySelectorAll(".art")
let promisesImages = document.querySelectorAll(".promise")

//Fetch the chosen images and populate array
let getImages = async (path, imageArray) => {
    let newImages = []

    await fetch(`${BASE_URL + path + KEY_PATH}`)
        .then(res => res.json())
        .then(data => {
            let results = data.results

            results.forEach(e => {
                let url = e.urls.full
                newImages.push(url)
            })

            for(let i = 0; i < newImages.length; i++){
                imageArray[i].src = `${newImages[i]}`
            }
        }
    ),{
        headers: {
            Authorisation: "Client-ID rMnoSKFgiWs_tcG540QQv9Mr-uourlR4FE-QHl1_yHw"
    }};

    fillImages(imageArray, newImages)
}

//Replace the URLS of the images
let fillImages = (imageArray, newImages) => {
    for(let i = 0; i < newImages.length; i++){
        imageArray[i].src = `${newImages[i]}`
    }
}

getImages(SUNGLASSES_PATH, sunImages);
getImages(ART_PATH, artImages);
getImages(PROMISES_PATH, promisesImages)


//Updates the tips at the top of the page
//NOT WORKING CORRECTLY - Only updates to last array item
let tipsText = document.querySelector(".tipsWords p")
let tips = ["Hello", "this", "is", "a", "test", "Not updating correctly"]

setTimeout(() => {
    for(let i = 0; i < tips.length; i++){
        setTimeout(() => {updateTips(i)}, 100)
    }
}, 100);

let updateTips = (index) => {
    tipsText.innerHTML = `🌐 ${tips[index]}`
}
