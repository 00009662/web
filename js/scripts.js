var slides = document.querySelectorAll('#slides .slide'); //grab from index.html selectors with proper class
var currentSlide = 0; //slides count
var slideInterval = setInterval(nextSlide,2000); //auto slider interval
 
function nextSlide() { //function which will in every 2000tiks grab new elemet with class slide and give them new class showing to make it visiable via css
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}