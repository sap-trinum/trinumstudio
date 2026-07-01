/* ===========================
   FAQ ACCORDION
=========================== */


const faqButtons =
document.querySelectorAll(".faq-question");



faqButtons.forEach(button=>{


button.addEventListener("click",()=>{


const item =
button.parentElement;



item.classList.toggle("active");



});


});