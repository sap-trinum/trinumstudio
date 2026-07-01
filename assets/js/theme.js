/* ===========================
   DARK MODE
=========================== */

const themeBtn = document.querySelector("#theme-btn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        themeBtn.innerHTML =
            document.body.classList.contains("dark-mode")
            ? "☀️"
            : "🌙";

    });

}