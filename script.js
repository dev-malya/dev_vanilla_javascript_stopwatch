//collect all the required values
let [milliseconds, seconds, minutes, hours] = [0,0,0,0];
let ShowTimer = document.getElementById('ReferTime');
let interval = null;

//start button event handler
document.getElementById('startbutton').addEventListener('click',()=>{
    if(interval != null){
        clearInterval(interval);
    }
    interval = setInterval(ShowTime,10);
});

//stop button event handler
document.getElementById('stopbutton').addEventListener('click',()=>{  
    
    clearInterval(interval);   
});

//reset button event handler
document.getElementById('resetbutton').addEventListener('click',()=>{
    clearInterval(interval);
    [milliseconds, seconds, minutes, hours] = [0,0,0,0];
    
    ShowTimer.innerHTML='00 : 00 : 00 : 000';
   
});
//show Time function to calculate and display accurate time in the display bar
function ShowTime()
{
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    ShowTimer.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;

    //increase milliseconds by 10 automatically initially
    milliseconds+=10;
    //when milliseconds, seconds, minutes and hours reach 1000 and 60 respectively then reset them to 0 and increase the next bigger time unit
    if(milliseconds == 1000)
    {
        milliseconds = 0;
        seconds++;

        if(seconds == 60){
            seconds = 0;
            minutes++;

            if(minutes == 60)
            {
                minutes = 0;
                hours++;
            }
        }
    }

 }
