document.addEventListener("DOMContentLoaded", () => {

    const menu = document.querySelector(".menu");
    const cancel = document.querySelector(".cancel");
    const real_nav = document.querySelector(".real-nav");
    const overlay = document.querySelector(".overlay");

    function toToggle(){

        overlay.classList.toggle("display-block");
        real_nav.classList.toggle("new-bar");
    }

    menu.addEventListener('click', toToggle);
    cancel.addEventListener('click', toToggle);
    
});