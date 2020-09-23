console.log("Hello World");

var slideIndex = [1, 1, 1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides1", "mySlides2", "mySlides3"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
//hva' er det her rigtigt eller hvad?!

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    var i;
    var slides = document.getElementsByClassName(slideId[no]);
    if (n > slides.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex[no] - 1].style.display = "block";
}

function showAlert() {
    alert("Congratz! Du har svaret korrekt! - Eller har du..?");
}


