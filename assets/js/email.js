/* ===========================
   EMAILJS
=========================== */

if (typeof emailjs !== "undefined") {

    emailjs.init("G7k46oDPpT23VlZfV");

    const contactForm = document.querySelector("#contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const msg = document.querySelector("#form-message");

            emailjs.sendForm(
                "service_q3qxj0k",
                "template_nwsbmge",
                this
            )

            .then(() => {

                if (msg) {

                    msg.innerHTML = "✅ Votre message a été envoyé avec succès !";
                    msg.style.color = "green";

                }

                contactForm.reset();

            })

            .catch((error) => {

                console.error(error);

                if (msg) {

                    msg.innerHTML = "❌ Erreur lors de l'envoi";
                    msg.style.color = "red";

                }

            });

        });

    }

}