//Variable Area

var minute = 0;
var second = 0;
var tens = 0;
var inter;

let play = document.getElementById("play");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");
let mark = document.getElementById("mark");

let list = document.getElementById("list");

let mnt = document.getElementById("minute");
let scd = document.getElementById("second");
let tns = document.getElementById("tens");


// Events
play.onclick = iniCount;
pause.onclick = pauCount;
reset.onclick = resCount;
mark.onclick = markTime;

// functions
function iniCount(){
    clearInterval(inter);
    inter = setInterval(clock, 10);
}

function pauCount(){
    clearInterval(inter);
}

function resCount(){
    clearInterval(inter);
    minute = 0;
    second = 0;
    tens = 0;


    tns. innerHTML = "00";
    scd. innerHTML = "00:";
    mnt. innerHTML = "00:";
}

function markTime() {
    const li = document.createElement('li');
    const text = document.createTextNode(mnt.innerHTML + scd.innerHTML + tns.innerHTML);
    li.appendChild(text);   
    list.appendChild(li);
}


function clock(){
    tens++;

    if(tens <= 9){
        tns.innerHTML = "0" + tens ;
    }


    if (tens > 9) {
        tns.innerHTML = tens;
    } 

    if (tens > 99) {
        second++
        scd.innerHTML = "0" + second + ":";
        tens = 0 
        tns.innerHTML = "0" + tens; 
    }

    if (second > 9){
        scd.innerHTML = second + ":";
    }

    if (second > 59){
        minute++
        mnt.innerHTML = "0" + minute + ":";
        second = 0
    }


    
    console.log("second")
}
    




