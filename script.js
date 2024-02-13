const hexBtn = document.querySelector(".hex-btn");
const hexColorValue = document.querySelector(".hex-color-value");
const hexColorContainer = document.querySelector(".hex-color-container");

// create random hex color
hexBtn.addEventListener("click", () => {
    let characterSet = "0123456789ABCDEF";
    let hexColorOutput = "";

    for (let i = 0, charSetLength = characterSet.length; i < 6; ++i) {
        hexColorOutput += characterSet.charAt(Math.floor(Math.random() * charSetLength));
    }

    hexColorValue.innerHTML = `#${hexColorOutput}`;
    hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;
    hexBtn.style.color = `#${hexColorOutput}`;
});

// rgb color
const rgbColorValue = document.querySelector(".rgb-color-value");
const rgbBtn = document.querySelector(".rgb-btn");
const getRedInputRange = document.querySelector("#red");
const getGreenInputRange = document.querySelector("#green");
const getBlueInputRange = document.querySelector("#blue");
const rgbColorContainer = document.querySelector(".rgb-color-container");

rgbBtn.addEventListener("click", () => {
    let extractRedValue = getRedInputRange.value;
    let extractGreenValue = getGreenInputRange.value;
    let extractBlueValue = getBlueInputRange.value;
    rgbColorValue.textContent = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;

    rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
    rgbBtn.style.color = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
});

const hexCopyBtn = document.querySelector('.hex-copy-color');
const rgbCopyBtn = document.querySelector('.rgb-copy-color');

function copyHexColorToClipboard() {
    navigator.clipboard.writeText(hexColorValue.textContent);
    alert('Hex color is copied to clipboard');
}

function copyRgbColorToClipboard() {
    navigator.clipboard.writeText(rgbColorValue.textContent);
    alert('RGB color is copied to clipboard');
}

// Example using button click events
hexCopyBtn.addEventListener('click', () => {
    copyHexColorToClipboard();
});

rgbCopyBtn.addEventListener('click', () => {
    copyRgbColorToClipboard();
});

