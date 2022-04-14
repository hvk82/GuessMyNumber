'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 15;
// document.querySelector('.guess').value = 12;


let secretNumber=Math.trunc(Math.random()*20)+1;

let score = 20;

let highScore=0;


document.querySelector('.check').addEventListener('click',function(){

    const guess=Number(document.querySelector('.guess').value);

    if(!guess){

        document.querySelector('.message').textContent='wrong input';
    }

    else if ( guess === secretNumber ){

        document.querySelector('.message').textContent='Correct Number';
        document.querySelector('body').style.backgroundColor='blue';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent= secretNumber;

        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }

    }
    else if (guess !== secretNumber){
        
        if(score>1)
    {       
    document.querySelector('.message').textContent=guess>secretNumber?'guess is too high':'Guess is too low';
        score--;
        document.querySelector('.score').textContent=score;
    }
        else{
            document.querySelector('.message').textContent='You lost the game'
            document.querySelector('.score').textContent=0;
        }
    }
})

document.querySelector('.again').addEventListener('click',function(){

secretNumber=Math.trunc(Math.random()*20)+1;

score=20;
document.querySelector('.score').textContent = score;



document.querySelector('.message').textContent='Start Guessing...';

document.querySelector('.number').textContent='?';

document.querySelector('.guess').value='';

document.querySelector('body').style.backgroundColor='gray';
document.querySelector('.number').style.width='15rem';


})






















//     else if (guess<= secretNumber)
//     {

//         if(score>1)
//      {       
//          document.querySelector('.message').textContent='guess is too low';
//         score--;
//         document.querySelector('.score').textContent=score;
//     }
//         else{
//             document.querySelector('.message').textContent='You lost the game';
//             document.querySelector('.score').textContent=0;
//         }

// }

// const age=15;
// let hasDriverLicense=true;

// if(age>18){
//     hasDriverLicense=true;
// }
// else{
//     hasDriverLicense=false;
// }
//     if(hasDriverLicense){

//         console.log("you can drive");
//     }
//     else{
//         console.log("you cannot drive");
//     }
    


