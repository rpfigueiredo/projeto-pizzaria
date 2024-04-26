const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));


function selectButton(button) {
    let buttons = document.querySelectorAll('.menu-button'); 
    for (let i = 0; i < buttons.length; i++) { 
        buttons[i].classList.remove('selected'); 
    }
    button.classList.add('selected'); 
}


