let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");
let am = document.getElementById("ampmpart");
let elem = document.getElementById("header");
let foot = document.getElementsByClassName("clock");
function updateTheClock() {
    let element = new Date();
    let h = element.getHours();
    let m = element.getMinutes();
    let s = element.getSeconds();
    let ampm = "AM"; 
    if(h>10 && h<16){
        document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/912364/pexels-photo-912364.jpeg?cs=srgb&dl=pexels-brett-sayles-912364.jpg&fm=jpg")';
        elem.style.textShadow="0px 0px 5px white";
    }
    if(h>15 && h<18){
        document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/165505/pexels-photo-165505.jpeg?cs=srgb&dl=pexels-sebastian-voortman-165505.jpg&fm=jpg")';
        elem.style.color="white";
        elem.style.textShadow="0px 0px 6px rgba(0,0,0,1)";
    }
    if (h >= 18 || h<=5) {
        document.body.style.backgroundImage = 'url("http://wallup.net/wp-content/uploads/2017/03/16/189641-night-sea-lights-beach-moon.jpg")';

      elem.style.color="yellow";
      elem.style.textShadow="0px 0px 6px rgba(0,0,0,1)";
    }
    
    
    if (h > 12) {
        h = h - 12;
        am.innerText = "PM";
    }
    
    
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;

    setInterval(() => {
        updateTheClock();
    }, 1000);
};
updateTheClock();