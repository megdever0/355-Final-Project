//udemy day 25 sticky nav
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 250) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

//my idea popup box
var box = document.getElementById("box");
var stats = document.getElementById("statsbutton");
var span = document.getElementsByClassName("close")[0];

//open
stats.onclick = function () {
    box.style.display = "block";
}

//close with x
span.onclick = function () {
    box.style.display = "none";
}