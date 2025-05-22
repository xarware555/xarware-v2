// Preloader
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.style.opacity = "0";
        setTimeout(() => preloader.style.display = "none", 500);
    }, 3500); // Delay 3.5 detik sebelum mulai fade out
});

// Mobile nav toggle
const toggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
toggle.onclick = () => {
    navbar.classList.toggle('active');
};