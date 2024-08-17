const body = document.querySelector("body");
const mainDiv = document.createElement("div");
mainDiv.setAttribute('id', 'mainDiv');
let pixelCount = 256;
let pixelWidth = 10;
let pixelHeight = 10;

function populatePixelsMainDiv() {
    for (let i = 0; i < pixelCount; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        mainDiv.appendChild(pixel);
    }
}

body.appendChild(mainDiv);

populatePixelsMainDiv();