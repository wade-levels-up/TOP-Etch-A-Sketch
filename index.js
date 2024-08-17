const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.gap = "15px";

// Create button element
const resizeBtn = document.createElement("button");
resizeBtn.textContent = "Resize Canvas";
resizeBtn.style.marginBottom = '10px';

// Create width input element and label, set placeholder
const inputX = document.createElement('input');
inputX.id = 'inputX';
const inputXLabel = document.createElement('label');
inputXLabel.for = "inputX";
inputXLabel.textContent = 'Width:'
inputX.placeholder = "160";

// Create height input element and label, set placeholder
const inputY = document.createElement('input');
inputY.id = 'inputY'
const inputYLabel = document.createElement('label');
inputYLabel.for = "inputY";
inputYLabel.textContent = 'Height:'
inputY.placeholder = "160";

// Append button, label and input elements to body
body.appendChild(resizeBtn);
body.appendChild(inputXLabel);
body.appendChild(inputX);
body.appendChild(inputYLabel);
body.appendChild(inputY);

let pixelCount = 256; // This is 16 x 16
let setWidth = 160;
let setHeight = 160;

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

function populateCanvas() {
    for (let i = 0; i < pixelCount; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        canvas.appendChild(pixel);
    }
}

resizeBtn.addEventListener('click', ()=> {
    canvas.remove();
    drawCanvas(setWidth, setHeight); 
    populateCanvas();
})

inputX.addEventListener('input', (e)=>{
    setWidth = e.target.value;
})

inputY.addEventListener('input', (e)=>{
    setHeight = e.target.value;
})


drawCanvas(setWidth, setHeight);
populateCanvas();