const count = document.getElementById("count");
const star = document.getElementById("star");
const sto = document.getElementById("sto");
const rese = document.getElementById("rese");
const timer = null;

let [seconds, minutes, hours] = [0,0,0];

star.addEventListener("click", PlayPause);
sto.addEventListener('click', watchStop);
rese.addEventListener('click',watchReset);

function PlayPause() {
    if (star.classList.contains("fa-pause")) {
      star.classList.remove("fa-pause");
      star.classList.add("fa-play");
    } else {
      star.classList.add("fa-pause");
      star.classList.remove("fa-play");
      watchStart();
    }
  
  };

function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    let h = hours<10? "0" + hours :hours;
    let m = minutes<10? "0" + minutes :minutes;
    let s = seconds<10? "0" + seconds :seconds;

    count.innerHTML = h +":"+ m +":"+ s;
};

function watchStart(){
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,1000);
};


function watchStop(){
    clearInterval(timer);
};

function watchReset(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    count.innerHTML = "00:00:00";
};


