/* ===========================
   LOADER PRO 2.5 SECONDES
=========================== */


document.addEventListener("DOMContentLoaded", () => {


    const loader = document.getElementById("loader");


    if(loader){


        setTimeout(() => {


            loader.classList.add("loader-hidden");


        }, 2500);


    }


});