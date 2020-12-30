const AREA = document.body;
const DISPLAY = document.querySelector('.display');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
console.log("W : " + windowWidth + "\nH : " + windowHeight);

function mouseCoordinate(e) {
    var horizontalPosition = windowWidth - e.clientX - 26;
    var verticalPosition = windowHeight - e.clientY - 26;

    DISPLAY.style.left = horizontalPosition + 'px';
    DISPLAY.style.top = verticalPosition + 'px';
}

function changeColorOnTouch() {
    DISPLAY.style.backgroundImage = "url('sad.png')";
    DISPLAY.style.backgroundColor = '#FFCA28';

}

AREA.addEventListener('mousemove', mouseCoordinate, false);
DISPLAY.addEventListener('mouseenter', changeColorOnTouch, false);
DISPLAY.addEventListener('mouseleave', function() {
    DISPLAY.removeAttribute("style");
}, false);