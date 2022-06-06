var currentColor = "lightskyblue"
var colors = ["lightblue",
    "lightcoral",
    "lightcyan",
    "lightgreen",
    "lightpink",
    "lightgrey",
    "lightseagreen",
    "lightyellow"];
function getRandomColor() {
    let randomIndex = Math.floor(Math.random() * colors.length);
    let newColor = colors[randomIndex];
    colors.splice(randomIndex, 1);
    colors.push(currentColor);
    currentColor = newColor;
    return newColor;
}

let ready = false

window.addEventListener("imagesReady", event => {
    ready = true;
})

function changeBackground() {
    if (ready) {
        window.requestAnimationFrame(function () {
            document.body.style.backgroundColor = getRandomColor();
        });
    }
}

setInterval(changeBackground, 350);