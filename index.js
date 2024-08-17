const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.gap = "15px";

// Create button element
const resizeBtn = document.createElement("button");
resizeBtn.textContent = "Resize / Clear";
resizeBtn.style.marginBottom = '10px';

// Create width input element and label, set placeholder
const inputX = document.createElement('input');
inputX.id = 'inputX';
inputX.type = 'number';
const inputXLabel = document.createElement('label');
inputXLabel.for = "inputX";
inputXLabel.textContent = 'Width:'
inputX.placeholder = "500";

// Create height input element and label, set placeholder
const inputY = document.createElement('input');
inputY.id = 'inputY'
inputY.type = 'number';
const inputYLabel = document.createElement('label');
inputYLabel.for = "inputY";
inputYLabel.textContent = 'Height:'
inputY.placeholder = "500";

// Append button, label and input elements to body
body.appendChild(resizeBtn);
body.appendChild(inputXLabel);
body.appendChild(inputX);
body.appendChild(inputYLabel);
body.appendChild(inputY);

let setWidth = 500;
let setHeight = 500;
let pixelSize = 10;
let pixelCount = 256; // This is 16 x 16

function drawCanvas(x, y) {
    const canvas = document.createElement("div");
    canvas.style.width = `${x}px`;
    canvas.style.height = `${y}px`;
    canvas.style.backgroundColor = "red";
    canvas.id = "canvas";
    canvas.style.display = "flex";
    canvas.style.flexWrap = "wrap";
    canvas.style.border = '10px groove burlywood';
    body.appendChild(canvas);
}

function populateCanvas(x, y, size = 10) {
    let xWidth = x / size;
    let yWidth = y / size;
    for (let i = 0; i < xWidth * yWidth; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.width = `${size}px`;
        pixel.style.height = `${size}px`;
        pixel.addEventListener('mouseenter', (e)=>{ 
            pixel.style.backgroundColor = 'black'
        });
        canvas.appendChild(pixel);
    }
}

resizeBtn.addEventListener('click', ()=> {
    if (setWidth % pixelSize === 0 && 
        setHeight % pixelSize === 0 && 
        setHeight < 1000 &&
        setWidth < 1000
        ) {
        canvas.remove();
        drawCanvas(setWidth, setHeight); 
        populateCanvas(setWidth, setHeight, pixelSize);
    } else {
        alert("Please enter a number less than 1000 for width and height that's also divisble by 10");
    }
});

inputX.addEventListener('input', (e)=>{
    setWidth = e.target.value;
})

inputY.addEventListener('input', (e)=>{
    setHeight = e.target.value;
})


drawCanvas(setWidth, setHeight);
populateCanvas(setWidth, setHeight);