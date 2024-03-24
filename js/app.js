const navBtn = document.getElementById("burger");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector("nav");
const navClose = document.querySelector("#nav__btn");


function openNav() {
    nav.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

function closeNav() {
    nav.classList.add("hidden");
    overlay.classList.add("hidden");
}

navBtn.addEventListener("click", () => openNav());
navClose.addEventListener("click", () => closeNav());
overlay.addEventListener("click", () => closeNav());

window.addEventListener('keydown', (e)=> {
    if(e.code == 'Escape'){
        closeNav()
    }
})