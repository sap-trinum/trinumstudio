/* ===========================
   TRINUMSTUDIO - MAIN.JS
=========================== */

// Footer automatique

const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.innerHTML =
        "© " + new Date().getFullYear() + " TrinumStudio - Tous droits réservés";
}

// Message de bienvenue

window.addEventListener("load", () => {
    console.log("Bienvenue chez TrinumStudio 🚀");
});

// Boutons

document.querySelectorAll(".btn").forEach((btn) => {

    btn.addEventListener("click", () => {

        console.log("Merci de votre intérêt pour TrinumStudio");

    });

});

// Menu Hamburger

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}