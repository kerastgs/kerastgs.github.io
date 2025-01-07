AOS.init();

// Variabel untuk file audio
var musik = "";

var audio = document.querySelector(".audio");
if (musik) {
    audio.src = musik;
}

// Fungsi untuk memulai tampilan
function mulai() {
    audio.play();
    window.scrollTo(0, 0); // Scroll ke atas
    document.querySelector(".open").style.opacity = "0"; // Hilangkan layar pembuka
    document.body.style.overflowY = "scroll"; // Aktifkan scroll
    setTimeout(function () {
        document.querySelector(".open").style.display = "none";
    }, 1200); // Sembunyikan layar pembuka setelah 1,2 detik
}
