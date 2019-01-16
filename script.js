const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const bothColors = document.querySelector('h4');
const body = document.getElementById("gradient");
const button = document.querySelector("button");

bothColors.textContent = "linear-gradient(to right, #F80000, #F8CD00);";

 const setGradient = () => {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	bothColors.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

const getRandomColor = () => {
	const c = () => {
	  let hex = Math.floor(Math.random()*256).toString(16);
	  return ("0"+String(hex)).substr(-2); // pad with zero
	}
	return "#"+c()+c()+c();
}

const setRandomGradient = () => {
	body.style.background = `linear-gradient(to right, ${getRandomColor()}, ${getRandomColor()})`;
	bothColors.textContent = body.style.background + ";";
}

button.addEventListener("click", setRandomGradient);