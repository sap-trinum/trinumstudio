/* ===========================
   COMPTEURS ANIMÉS
=========================== */

document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = parseInt(counter.dataset.target);
        let count = 0;

        const increment = Math.max(1, Math.ceil(target / 100));

        function updateCounter() {

            count += increment;

            if (count >= target) {

                counter.textContent = target;

            } else {

                counter.textContent = count;

                requestAnimationFrame(updateCounter);

            }

        }

        updateCounter();

    });

});