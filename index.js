const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.gap = "15px";

const resizeBtn = document.createElement("button");
resizeBtn.textContent = "Resize Canvas";
resizeBtn.style.marginBottom = '10px';

const inputX = document.createElement('input');
inputX.id = 'inputX';
const inputXLabel = document.createElement('label');
inputXLabel.for = "inputX";
inputXLabel.textContent = 'Width:'
inputX.placeholder = "160";

const inputY = document.createElement('input');
inputY.id = 'inputY'
const inputYLabel = document.createElement('label');
inputYLabel.for = "inputY";
inputYLabel.textContent = 'Height:'
inputY.placeholder = "160";

body.appendChild(resizeBtn);
body.appendChild(inputXLabel);
body.appendChild(inputX);
body.appendChild(inputYLabel);
body.appendChild(inputY);


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