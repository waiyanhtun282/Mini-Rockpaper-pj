const computerChoiceDispaly =document.getElementById('computer-choice');
const userChoiceDispaly =document.getElementById('user-choice');  
const resultChoiceDispaly =document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) => {
  possibleChoice.addEventListener('click',(e) => {
    // console.log(e.target.id);
    userChoice =e.target.id;
    userChoiceDispaly.innerHTML=userChoice;
    generateComputerChoice();
    getResult();
  })
});

function generateComputerChoice(){
  const randomNumber = Math.floor(Math.random()*possibleChoices.length)+1;
  // console.log(randomNumber);
  if(randomNumber ===1){
    computerChoice ="rock";
  };

  if(randomNumber ===2){
    computerChoice ="paper";
  };

  if(randomNumber ===3){
    computerChoice ="scissors";
  }

 computerChoiceDispaly.innerHTML=computerChoice;  

};

function getResult(){
  if(computerChoice===userChoice){
    result = "It 's draw";
  };

  if(computerChoice ==="rock" && userChoice==="paper"){
    result ="You Win";
  };

  if(computerChoice==='rock' && userChoice==="scissors"){
    result ="You lost!";
  };

  if(computerChoice==="paper"&& userChoice=="rock"){
    result ="You lost!";
  };
  if(computerChoice=="paper"&& userChoice=="scissors"){
    result ="You Win";
  };

  if(computerChoice=="scissors"&& userChoice==="rock"){
    result ="You Lost!";
  };

  if(computerChoice=="scissors"&& userChoice==="paper"){
    result ="You Win";
   };

   resultChoiceDispaly.innerHTML=result;
}