const fullDisplay = document.getElementById("fullMenu");
const menuList = document.querySelector(".main_menu_box__drop");
const dropBoxArea = document.querySelector(".drop-box-area");

menuList.style.maxHeight = "0px";
menuList.style.borderWidth = "0px";
let menuOpen = false;

function closeMenu() {
  menuList.style.maxHeight = "0px";

  setTimeout(function () {
    menuList.style.borderWidth = "0px";
    menuList.style.borderTopWidth = "0px";
  }, 350);
  menuOpen = false;
}

function menuAppear() {
  if (menuOpen === false) {
    menuList.style.maxHeight = "150px";
    menuList.style.borderWidth = "1px";
    menuList.style.borderTopWidth = "3px";
    menuOpen = true;
    console.log(dropBoxArea);
    dropBoxArea.addEventListener("mouseleave", closeMenu);
  } else {
    closeMenu();
  }
}
function init() {
  fullDisplay.addEventListener("click", menuAppear);
}

init();
