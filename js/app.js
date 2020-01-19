const arguments = document.getElementsByClassName(".arguments argument");
const jumbotron = document.getElementById("jumbotron");


const animation = (fish, x, y) => {

    const refreshrate = 1000 / 60;
    const speed = 1;
    let pos = x;
    let posY = y
    const interval = window.setInterval(() => {
        pos += speed;
        posY -= speed/3
        if (pos > window.innerWidth - (window.innerWidth / 100) * 5 || posY < 0)  {
            fish.parentNode.removeChild(fish);
            generateFish();
            clearInterval(interval);
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

    while (x > window.innerWidth / 3) {
        x = generateNumber();
    }
    while (y > window.innerHeight - 44 || y < 44) {
        y = generateNumber();
    }

    fish.style.top = y + "px";
    fish.style.left = x + "px";

    jumbotron.appendChild(fish);

    animation(fish, x, y)
};

const generateFish = () => {
    let fish = document.createElement("div");
    fish.classList.add("fish");
    fish.id = "fish1";

    generateXY(fish, 1);
};

if (arguments[0]) {
	arguments[0].style.marginLeft = "40px";
	arguments[arguments.length - 1].style.marginRight = "40px";
}

for (let i = 0; i < 10; i++) {
    generateFish();
}
