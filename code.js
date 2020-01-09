let minutes = 25;
let seconds = 00;
let timerRunning = false;
let timer;


//document.addEventListener('click', start());
document.querySelector('button').addEventListener('click', start);

function start() {
    console.log("starting");
   // ringBell();
   timerRunning = true;
  timer = setInterval(updateTimer, 1000);
}


function updateTimer() {
    if(timerRunning) {
    seconds-=1;
    if(seconds <= 0) {
        seconds=59;
        minutes-=1;
        if(minutes <= 0) {
            timerRunning = false;
            seconds = 0; minutes = 0;
            let currenttime = `${minutes} : ${seconds}`;   
            console.log(currenttime);
            document.querySelector('h1').innerHTML = currenttime;
            ringBell();
        }
    }
    
    let currenttime = `0${minutes}:0${seconds}`;   
    console.log(currenttime);
    document.querySelector('h1').innerHTML = currenttime;
     }  
 else {
     clearInterval(timer);
 }
}

function ringBell() {
    let x = document.querySelector('audio');
    x.play();
}