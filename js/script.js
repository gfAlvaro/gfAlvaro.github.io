/** 
 * Comportamiento de mi portfolio
 * @author Álvaro García Fuentes
 **/
let slideIndex = 1;
let plusDivs = n => showDivs(slideIndex += n);
let showDivs = n => {
    let misSlides = document.getElementsByClassName("mySlides");
    if (n > misSlides.length)  slideIndex = 1;
    if (n < 1)  slideIndex = misSlides.length;
    for (element of misSlides)
        element.style.display = element == misSlides[slideIndex-1]? "block" : "none";
}

document.addEventListener("DOMContentLoaded", () => {
    showDivs(slideIndex);
    document.getElementById("menosuno").addEventListener("click", () => plusDivs(-1));
    document.getElementById("masuno").addEventListener("click", () => plusDivs(1)); 
    document.querySelectorAll(".navoption").forEach(element => element.addEventListener("click", function(){
        slideIndex = Number(this.getAttribute( "id"));
        plusDivs(0);
    }));
});