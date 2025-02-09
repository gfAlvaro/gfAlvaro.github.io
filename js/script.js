let slideIndex = 1;
let plusDivs = n => showDivs(slideIndex += n);
let x = document.getElementsByClassName("mySlides");
let showDivs = n => {

    if (n > x.length)
        slideIndex = 1;
    if (n < 1)
        slideIndex = x.length;
    
    let isMobile = screen.width < 801;

    for (element of x)
        element.style.display = (isMobile? "block" : "none");

    if( !isMobile )
        x[slideIndex-1].style.display = "block";        
}

document.addEventListener("DOMContentLoaded", () => {
      showDivs(slideIndex);
      document.getElementById("menosuno").addEventListener("click", () => plusDivs(-1));
      document.getElementById("masuno").addEventListener("click", () => plusDivs(1));
 
});