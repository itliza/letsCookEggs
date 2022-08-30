const time = 0.2;
let amountTime = time * 60;

const btnStart = document.querySelector('.btn_start');

const audio = new Audio('../sound/alarm.mp3');


btnStart.addEventListener('click', ()=>{
    timer = setInterval(calculateTime, 1000);

    gsap.to('.btn_start', {display: 'none', duration: 0})

})



function calculateTime(){
    const countDown = document.querySelector('.countdown');
    
    gsap.to('.countdown', {display: 'block', duration: 0})

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
        audio.play();
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

