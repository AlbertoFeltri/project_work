const arguments = document.getElementsByClassName(".arguments argument");
const jumbotron = document.getElementById("jumbotron");


const animation = (fish, x, y, id) => {

    const refreshrate = 1000 / 60;
    const speed = 1;
    const $opacity = 0.01
    let pos = x;
    let posY = y
    let opacity = 0
    const interval = window.setInterval(() => {
        pos += speed;
        posY -= speed/4
        opacity += $opacity
        if (pos > window.innerWidth - (window.innerWidth / 100) * 5 -30 || posY < 15)  {
            fish.parentNode.removeChild(fish);
            generateFish(id);
            clearInterval(interval);
        }
        if(opacity <= 1){
            fish.style.opacity = opacity
        }
        fish.style.left = pos + "px";
        fish.style.top = posY + "px";
    }, refreshrate);
}

const generateXY = (fish, id) => {
    const generateNumber = () => {
        return Math.floor(Math.random() * 1000);
    };
    let x = generateNumber();
    let y = generateNumber();

    while (x > window.innerWidth / 4) {
        x = generateNumber();
    }
    while (y > window.innerHeight - 44 || y < 44) {
        y = generateNumber();
    }
    if(id%2 == 0){
        fish.style.backgroundImage = 'url(images/FishWhite.svg)'
    } else {
        fish.style.transform = 'rotate(-10deg)'
    }
    fish.style.top = y + "px";
    fish.style.left = x + "px";
    fish.style.opacity = 0;

    jumbotron.appendChild(fish);
    animation(fish, x, y, id)
};

const generateFish = (id) => {
    let fish = document.createElement("div");
    fish.classList.add("fish");
    fish.id = "fish1";
    
    generateXY(fish, id);
};

if (arguments[0]) {
	arguments[0].style.marginLeft = "40px";
	arguments[arguments.length - 1].style.marginRight = "40px";
}

for (let i = 0; i < 20; i++) {
    generateFish(i);
}
