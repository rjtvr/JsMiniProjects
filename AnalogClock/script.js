const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

console.log("Hrs : " + hr + ", Min : " + min + ", Sec : " + sec);

let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
let secPosition = (sec * 360 / 60);

function runTheClock() {
	// js throttling
    hrPosition = hrPosition + (3 / 360);
    minPosition = minPosition + (6 / 60);
    secPosition = secPosition + 6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);


// const HRHAND = document.querySelector('.hour-hand');
// const MINHAND = document.querySelector('.min-hand');
// const SECHAND = document.querySelector('.second-hand');

// function setClock() {
//     var date = new Date();

//     let hr = date.getHours();
//     let hrPosi = ((hr / 12) * 360) + ((min / 60) * 30) + 90
//     HRHAND.style.transform = `rotate(${hrPosi}deg)`;

//     let min = date.getMinutes();
//     let minPosi = ((min / 60) * 360) + ((sec / 60) * 6) + 90;
//     MINHAND.style.transform = `rotate(${minPosi}deg)`;

//     let sec = date.getSeconds();
//     let secPosi = ((sec / 60) * 360) + 90
//     SECHAND.style.transform = `rotate(${secPosi}deg)`

// }
// setInterval(setClock, 1000);
// setClock();