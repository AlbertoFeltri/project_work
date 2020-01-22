const arguments = document.getElementsByClassName(".arguments argument");
const jumbotron = document.getElementById("jumbotron");

const animation = (fish, x, y, id) => {
	const refreshrate = 1000 / 60;
	const speed = id % 2 == 0 ? -1 : 1;
	const $opacity = 0.01;
	let pos = x;
	let posY = y;
	let opacity = 0;
	if (id % 2 == 0) {
		const interval2 = window.setInterval(() => {
			pos += speed;
			posY += speed / 4;
			opacity += $opacity;
			if (pos < 44 || posY < 15) {
				fish.parentNode.removeChild(fish);
				generateFish(id);
				clearInterval(interval2);
			}
			if (opacity <= 1) {
				fish.style.opacity = opacity;
			}
			fish.style.left = pos + "px";
			fish.style.top = posY + "px";
		}, refreshrate);
	} else {
		const interval = window.setInterval(() => {
			pos += speed;
			posY -= speed / 4;
			opacity += $opacity;
			if (
				pos > window.innerWidth - (window.innerWidth / 100) * 5 - 30 ||
				posY < 15
			) {
				fish.parentNode.removeChild(fish);
				generateFish(id);
				clearInterval(interval);
			}
			if (opacity <= 1) {
				fish.style.opacity = opacity;
			}
			fish.style.left = pos + "px";
			fish.style.top = posY + "px";
		}, refreshrate);
	}
};

const generateXY = (fish, id) => {
	const generateNumber = () => {
		return Math.floor(Math.random() * 1000);
	};
	let x = generateNumber();
	let y = generateNumber();
	if (id % 2 != 0) {
		while (x > window.innerWidth / 4) {
			x = generateNumber();
		}
		fish.style.transform = "rotate(-10deg)";
		if (id % 3 == 0) {
			fish.style.transform = "rotate(0deg)";
		}
	}

	while (y > window.innerHeight - 250 || y < 44) {
			y = generateNumber();
		}

	if (id % 3 == 0) {
		fish.style.backgroundImage = "url(images/FishWhite.svg)";
		if (id % 2 == 0) {
			fish.style.transform = "rotate(-165deg)";
		}
	} else if (id % 2 == 0) {
		fish.style.transform = "rotate(-175deg)";
	}

	fish.style.top = y + "px";
	fish.style.left = x + "px";
	fish.style.opacity = 0;

	jumbotron.appendChild(fish);
	animation(fish, x, y, id);
};

const generateFish = id => {
	let fish = document.createElement("div");
	fish.classList.add("fish");

	generateXY(fish, id);
};

if (arguments[0]) {
	arguments[0].style.marginLeft = "40px";
	arguments[arguments.length - 1].style.marginRight = "40px";
}

for (let i = 0; i < 15; i++) {
	generateFish(i);
}
