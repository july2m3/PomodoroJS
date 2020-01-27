"use strict";

let minutes = 45;
let seconds = 0;
let timerRunning = false;
let timer;
var newtimer;



const options = document.querySelectorAll('button');
options.forEach(function(currentOption) {
    currentOption.addEventListener('click', function(e) {
        doOption(e.target.innerHTML);
    });
})

document.querySelector('.start-button').addEventListener('click', start);

function start() {
    if(timerRunning) {
        timerRunning = false;
        console.log("stopping timer");
        document.querySelector('.start-button').innerHTML="Start";
    }
    else {
    console.log("starting");
    timerRunning = true;
    document.querySelector('.start-button').innerHTML="Stop";
    timer = setInterval(updateTimer, 1000);
    }
}

function updateTimer() {
    if(timerRunning) {
    seconds-=1;
    if(seconds <= 0) {
        seconds=59;
        minutes-=1;
        if(minutes < 0) {
            timerRunning = false;
            seconds = 0; minutes = 0;
            let currenttime = `${minutes} : ${seconds}`;   
            console.log(currenttime);
            document.querySelector('h1').innerHTML = currenttime;
            ringBell();
        }
    }
    
     }  
 else {
     clearInterval(timer);
     }
     let m = 0;
     let s = 0;
     if (minutes >= 10) {
         m = minutes;
     } else {
         m = '0' + minutes;
     }
     
     if (seconds >= 10) {
         s = seconds;
     } else {
         s = '0' + seconds;
     }
    
    let currenttime = `${m}:${s}`;   
    document.querySelector('h1').innerHTML = currenttime;
    document.title = currenttime;
}

function ringBell() {
    let x = document.querySelector('audio');
    x.play();
}

function doOption(option) {
    if(option == "45 Minutes") {
        console.log("changing timer to 45");
        minutes = 45;
        seconds = 0;
        updateTimer();
    }
    else if(option == "25 Minutes") {
        console.log("changing timer to 25");
        minutes = 25;
        seconds = 0;
        updateTimer();
    }
    if(option == "Reset") {
        console.log("Resetting timer");
    //todo lol       
    }


}

