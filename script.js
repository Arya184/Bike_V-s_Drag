score = 0;
cross = true;
document.onkeydown = (e) => {
    console.log("key code is : ", e.keyCode);
    if(e.keyCode === 38){
        bike = document.querySelector('.bike');
        bike.classList.add('animateBike');
        setTimeout(() =>{
            bike.classList.remove('animateBike');
        },1750);
    }
    if(e.keyCode === 39){
        bike = document.querySelector('.bike');
        bikeX = parseInt(window.getComputedStyle(bike,null).getPropertyValue('left'));
        bike.style.left = bikeX + 50+"px";
    }
    if(e.keyCode === 37){
        bike = document.querySelector('.bike');
        bikeX = parseInt(window.getComputedStyle(bike,null).getPropertyValue('left'));
        bike.style.left = bikeX - 50+"px";
    }
}
setInterval(() => {
    bike = document.querySelector('.bike');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    bx =parseInt(window.getComputedStyle(bike,null).getPropertyValue('left'));
    by =parseInt(window.getComputedStyle(bike,null).getPropertyValue('top'));

    ox =parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy =parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX = Math.abs(bx-ox);
    offsetY = Math.abs(by-oy);
    if(offsetX<100 && offsetY<60){
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
        bike.style.visibility = 'hidden';
    }
    else if(offsetX < 80 && cross){
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        },1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.15;
            obstacle.style.animationDuration = newDur + 's';
        },800);
    }
},10);
const updateScore = (score) => {
    scoreCount.innerHTML = "Your Score : " + score;
}
