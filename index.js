var underline = document.getElementById('underline');

function init(){ 
    setTimeout(function() {
       underline.classList.remove("hide");
    }, 1000);
}

init()