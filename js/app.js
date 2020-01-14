const arguments = document.getElementsByClassName(".arguments argument");
const jumbotron = document.getElementById("jumbotron");

if (arguments[0]) {
	arguments[0].style.marginLeft = "40px";
	arguments[arguments.length - 1].style.marginRight = "40px";
}

const fishAnimation = () => {
	console.log(window.innerWidth);
	const refreshRate = 1000 / 60;
	const maxXPosition = window.innerWidth;
	let rect = document.getElementById("fish");
	let speedX = 1;
	let x = generateRandomX();
	while (x > maxXPosition) {
		x = generateRandomX();
	}
	let positionX = generateRandomX();
	while (x > positionX || positionX > maxXPosition - 44) {
		positionX = generateRandomX();
	}
	let y = generateRandomX();
	while (y > window.innerHeight - 44) {
		y = generateRandomX();
	}
	let positionY = generateRandomX();
	while (y > positionY || positionY > innerHeight) {
		positionY = generateRandomX();
	}
	let pos = x;
	let posY = y;
	let rotate = true;
	console.log(rect.children);
	window.setInterval(() => {
		pos = pos + speedX;
		posY = posY + speedX;
		if (pos > positionX || pos < x || posY > positionY || posY < y) {
			speedX = speedX * -1;
			console.log(rect.classList)
			if(rect.classList[1] == 'left'){
				rect.classList.remove('left')
				rect.classList.add('right')
			} else {
				rect.classList.remove('right')
				rect.classList.add('left')
			}
			console.log('qui')
			rotate = false;
		}

		rect.style.left = pos + "px";
		rect.style.top = posY + "px";
	}, refreshRate);
};

const generateRandomX = () => {
	let n = Math.round(Math.random() * 1000);
	return n;
};

fishAnimation();
