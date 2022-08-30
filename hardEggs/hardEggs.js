const time = 9;
let amountTime = time * 60;

const btnStart = document.querySelector('.btn_start');



btnStart.addEventListener('click', ()=>{
    timer = setInterval(calculateTime, 1000);

})

function calculateTime(){
    const countDown = document.querySelector('.countdown');
    countDown.style.display = 'block';
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;


    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    countDown.textContent = `${minutes} : ${seconds}`;
    amountTime --;

    

    if(amountTime < 0) {
        stopTimer();
        amountTime = 0;
    }


    function stopTimer(){
        clearInterval(timer);
    
    }


}

