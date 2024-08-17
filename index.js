const body = document.querySelector("body");

const resizeBtn = document.createElement("button");
resizeBtn.textContent = "Resize Canvas";
resizeBtn.style.marginBottom = '10px';

body.appendChild(resizeBtn);

function drawCanvas(x, y) {
    const canvas = document.createElement("div");
    canvas.style.width = `${x}px`;
    canvas.style.height = `${y}px`;
    canvas.style.backgroundColor = "red";
    canvas.id = "canvas";
    canvas.style.display = "flex";
    canvas.style.flexWrap = "wrap";
    body.appendChild(canvas);
}

drawCanvas(160, 160);

let pixelCount = 256;
let pixelSize = 10;

function populatePixelsMainDiv() {
    for (let i = 0; i < pixelCount; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        canvas.appendChild(pixel);
    }
}




populatePixelsMainDiv();