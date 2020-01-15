const arguments = document.getElementsByClassName(".arguments argument");
const jumbotron = document.getElementById("jumbotron");

if (arguments[0]) {
	arguments[0].style.marginLeft = "40px";
	arguments[arguments.length - 1].style.marginRight = "40px";
}

const createCoordinate = () => {
	let to_return = {};
	to_return.x = Math.round(Math.random() * 100);
	while (to_return.x < 44) {
		to_return.x = Math.round(Math.random() * 100);
	}
	to_return.y = Math.floor(Math.random() * 1000) + 1;
	while (to_return.y < 44 || to_return.y > window.innerHeight/2) {
		to_return.y = Math.floor(Math.random() * 1000) + 1;
	}
	to_return.finalX = Math.floor(Math.random() * 1000) + 1;
	while (
		to_return.finalX < window.innerWidth / 2 ||
		to_return.finalX > window.innerWidth - 44
	) {
		to_return.finalX = Math.floor(Math.random() * 1000) + 1;
	}
	return to_return;
};

const fishAnimation = () => {
	const refreshRate = 1000 / 60;
	let rect = document.getElementById("fish");
	let speed = 1;
	let coordinate = createCoordinate();
	let pos = coordinate.x;
	let posY = coordinate.y;
	window.setInterval(() => {
		pos = pos + speed;
		posY = posY + speed;
		if (
			pos > coordinate.finalX ||
			posY > window.innerHeight-44 ||
			pos < coordinate.x ||
			posY < coordinate.y
		) {
			speed = speed * -1;
			if (rect.classList[1] == "left") {
				rect.classList.remove("left");
				rect.classList.add("right");
			} else {
				rect.classList.remove("right");
				rect.classList.add("left");
			}
			rotate = false;
		}

		rect.style.left = pos + "px";
		rect.style.top = posY + "px";
	}, refreshRate);
};

fishAnimation();
