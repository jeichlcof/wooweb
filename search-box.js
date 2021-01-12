const searchBar = document.querySelector(".search_box__input");
const body = document.querySelector("body");
const searchIcon = document.querySelector(".fa-search");
console.log(searchIcon);

function hideIcon() {
  searchIcon.style.display = "none";
  setTimeout(function () {
    body.addEventListener("click", showIcon);
  }, 200);
}

function showIcon() {
  searchIcon.style.display = "block";
  console.log("ggggg");
}
function init() {
  searchIcon.addEventListener("click", hideIcon);
}

init();
