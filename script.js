//collecting all the required and necessary values
let [milliseconds, seconds, minutes, hours] = [0,0,0,0];
let ShowTimer = document.getElementById('ReferTime');
let interval = null;

//event handler for start button
document.getElementById('startbutton').addEventListener('click',()=>{
    if(interval != null){
        clearInterval(interval);
    }
    interval = setInterval(ShowTime,10);
});

//event handler for stop button
document.getElementById('stopbutton').addEventListener('click',()=>{  
    
    clearInterval(interval);   
});

//event handler for reset button
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
    //reset ms, sec, mins and hours to 0 when they reach 1000 and 60 resp and increase the count of the next bogger unit of time
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