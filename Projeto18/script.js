// Seleciona o elemento de áudio e o ícone de controle
var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");
var volumeSlider = document.getElementById("volumeSlider");

// Define a função que será executada ao clicar no ícone
icon.onclick = function() {
    // Verifica se a música está pausada
    if (mySong.paused) {
        mySong.play(); // Toca a música
        icon.src = "img/pause.png"; // Altera a imagem para o ícone de "Pause"
    } else {
        mySong.pause(); // Pausa a música
        icon.src = "img/play.png"; // Altera a imagem para o ícone de "Play"
    }
}

volumeSlider.oninput = function() {
    mySong.volume = this.value;
};