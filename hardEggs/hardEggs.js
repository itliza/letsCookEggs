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
        changeData();
        amountTime = 0;
    }


    function stopTimer(){
        clearInterval(timer);
    
    }

    function changeData(){
        btnStart.style.display = 'none';
        countDown.style.display = 'none';
        
        const textContainer = document.querySelector('.cooking_info');
        textContainer.textContent = `⏰ It's time to take pan out from fire and taste eggs ⏰`;
    }


}

