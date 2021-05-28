const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");
const pokes = document.querySelectorAll(".name-list li");

changeColor.addEventListener("click", function() {
	text.classList.toggle("change");
});


for(pokemon of pokes){
	pokemon.addEventListener("click", function() {
		this.style.color = "red";
	});
}