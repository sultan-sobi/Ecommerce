var icon = document.getElementById("menu-icon");
var menu = document.getElementById("menu");
icon.addEventListener("click", () => {
  if (menu.className === "hidden") {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
var bigImage = document.getElementById("bigImage");
const setImage1 = () => {
  bigImage.src = "images/glass.jpg";
};
const setImage2 = () => {
  bigImage.src = "images/shoe2.jpg";
};
const setImage4 = () => {
  bigImage.src = "images/images.jpeg";
};
const setImage3 = () => {
  bigImage.src = "images/profile.jpeg";
};
