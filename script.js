var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var bothColors = document.querySelector('h3');
var body = document.getElementById("gradient");
var button = document.querySelector("button");

bothColors.textContent = "linear-gradient(to right, #F80000, #F8CD00);";

 function setGradient(){
	body.style.background = 
		"linear-gradient(to right," 
		+ color1.value + 
		"," 
		+ color2.value + ")";

	bothColors.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function random() {
	// body...
}