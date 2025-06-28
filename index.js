let navLinks = document.getElementById("navLinks");
navLinks.style.maxHeight = "0px";

function toggle() {
    if (navLinks.style.maxHeight == "0px") {
        navLinks.style.maxHeight = "300px"; 
        navLinks.style.padding = "20px";

    } else {
        navLinks.style.maxHeight = "0px";
        navLinks.style.padding = "0";
    }
    let hero = document.getElementById("hero");
    if (navLinks.style.maxHeight == "300px") {
        hero.style.marginTop = "10rem";
    } else {
        hero.style.marginTop = "0";
    }
}
