const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.gap = "15px";


// Create button elements
const resizeBtn = document.createElement("button");
resizeBtn.textContent = "Resize / Clear";

// Create menu div
const menu = document.createElement('div');
menu.style.display = "flex";
menu.style.width = '300px';
menu.style.flexWrap = 'wrap';
menu.style.gap = "10px";
menu.style.padding = "5px";
menu.style.backgroundColor = "burlywood";
menu.style.color = "black";
menu.style.alignItems = "center";
menu.style.justifyContent = "space-around";
menu.style.borderRadius = '5px';

// Create opacity slider and label
const slider = document.createElement('input');
const sliderLabel = document.createElement('label');
const sliderDiv = document.createElement('div');
let sliderOpacityVal = 10;
slider.id = 'slider';
slider.type = 'range';
slider.min = '0';
slider.max = '10';
slider.value = `${sliderOpacityVal}`;
slider.addEventListener('input', (e)=> {
    sliderOpacityVal = e.target.value
});
sliderLabel.for = "slider";
sliderLabel.textContent = 'Opacity: ';
sliderDiv.appendChild(sliderLabel);
sliderDiv.appendChild(slider);

// Create width input element and label, set placeholder
const widthDiv = document.createElement('div');
const inputX = document.createElement('input');
inputX.id = 'inputX';
inputX.type = 'number';
const inputXLabel = document.createElement('label');
inputXLabel.for = "inputX";
inputXLabel.textContent = 'Width:'
inputX.placeholder = "300";
widthDiv.appendChild(inputXLabel);
widthDiv.appendChild(inputX);

// Create height input element and label, set placeholder
const heightDiv = document.createElement('div');
const inputY = document.createElement('input');
inputY.id = 'inputY'
inputY.type = 'number';
const inputYLabel = document.createElement('label');
inputYLabel.for = "inputY";
inputYLabel.textContent = 'Height:'
inputY.placeholder = "300";
heightDiv.appendChild(inputYLabel);
heightDiv.appendChild(inputY);

// Append button, label and input elements to menu
body.appendChild(menu);
menu.appendChild(resizeBtn);
menu.appendChild(sliderDiv);
menu.appendChild(widthDiv);
menu.appendChild(heightDiv);


let setWidth = 300;
let setHeight = 300;
let pixelSize = 10;
let pixelCount = 256; // This is 16 x 16

function drawCanvas(x, y) {
    const canvas = document.createElement("div");
    canvas.style.width = `${x}px`;
    canvas.style.height = `${y}px`;
    canvas.style.backgroundColor = "black";
    canvas.id = "canvas";
    canvas.style.display = "flex";
    canvas.style.flexWrap = "wrap";
    canvas.style.border = '10px groove burlywood';
    canvas.style.borderRadius = '15px';
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
        let opacity = 1;
        pixel.addEventListener('pointerenter', ()=>{
            if (opacity > 0) {
                pixel.style.opacity = opacity -= (sliderOpacityVal / 10);
            }
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