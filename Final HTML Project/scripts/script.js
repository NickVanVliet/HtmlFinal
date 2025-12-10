//script page
var figElement = document.getElementById("secret");
var imgSource = document.getElementById("image");
var figCap = document.querySelector ("figcaption");

function Baking(){
	imgSource.src = "images/Cookies.jpg";
	imgSource.alt = "Christmas cookies";
	figElement.style.display = "block";
	figCap.textContent = "My favorite activity is baking!";
}
