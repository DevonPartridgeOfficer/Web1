const BASE_URL = "https://api.unsplash.com/"
const SUNGLASSES_PATH = "search/photos?query=sunglasses"
const ART_PATH = "search/photos?query=art"
const ACCESS_KEY = "dk7QTw70p5K8kW9Db-HCea0TMpIYQiM4o_DbhXioOJU"
const KEY_PATH = `&client_id=${ACCESS_KEY}`
const NSUNGLASSES = 9

let sunImages = document.querySelectorAll(".sunglasses")
let artImages = document.querySelectorAll(".art")

let fillImage = (path, imageArray) => {
    let newImages = []

    //Getting the sunglasses images a filling array
    fetch(`${BASE_URL + path + KEY_PATH}`)
        .then(res => res.json())
        .then(data => {
            let results = data.results
            results.forEach(e => {
                let url = e.urls.full
                newImages.push(url)
            });
            for(let i = 0; i < newImages.length; i++){
                imageArray[i].src = `${newImages[i]}`
            }
        }
    ),{
        headers: {
            Authorisation: "Client-ID rMnoSKFgiWs_tcG540QQv9Mr-uourlR4FE-QHl1_yHw"
    }};

    //Replace the URLS of the images
    for(let i = 0; i < newImages.length; i++){
        imageArray[i].src = `${newImages[i]}`
    }

}

fillImage(SUNGLASSES_PATH, sunImages);
fillImage(ART_PATH, artImages);