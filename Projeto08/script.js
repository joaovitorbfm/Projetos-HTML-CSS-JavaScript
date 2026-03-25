var hero = document.getElementById("hero");
var next = document.getElementById("next");
var back = document.getElementById("back");
var thumbnail = document.getElementsByClassName("thumbnail");

// Array com os caminhos das imagens
var bgImages = ["img/bg1.png", "img/bg2.png", "img/bg3.png", "img/bg4.png", "img/bg5.png"];
let i = 0;

next.onclick = function() {
    if (i < 4) {
        hero.style.backgroundImage = 'url("' + bgImages[i + 1] + '")';
        thumbnail[i + 1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i++;
    }
}

back.onclick = function() {
    if (i > 0) {
        hero.style.backgroundImage = 'url("' + bgImages[i - 1] + '")';
        thumbnail[i - 1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;
    }
}