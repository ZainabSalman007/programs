const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

const player = document.getElementById("player");
const comp = document.getElementById("comp");
const result = document.getElementById("result");
const score = document.getElementById("score");

let playerChoice;
let compChoice;
let choices = ["rock" , "paper" , "scissor"];

let compScore = 0;
let playerScore = 0;

rock.addEventListener("click" , ()=>{
    playerChoice = "rock";

    compChoice = choices[Math.floor(Math.random() * 3)];

    player.textContent = `You chose: ${playerChoice}`;
    comp.textContent = `Computer chose: ${compChoice}`;

    if(compChoice == "paper"){
        result.textContent = "comp won"
        compScore++;
    }
    else if(compChoice == "scissor"){
        result.textContent = "you won"
        playerScore++;
    }else{
        result.textContent = "its a tie"
    }

    score.textContent = `You: ${playerScore} | Computer: ${compScore}`;
})

paper.addEventListener("click" , ()=>{
    playerChoice = "paper";

    compChoice = choices[Math.floor(Math.random() * 3)];

    player.textContent = `You chose: ${playerChoice}`;
    comp.textContent = `Computer chose: ${compChoice}`;

     if(compChoice == "scissor"){
        result.textContent = "comp won"
        compScore++;
    }
    else if(compChoice == "rock"){
        result.textContent = "you won"
        playerScore++;
    }else{
        result.textContent = "its a tie"
    }

    score.textContent = `You: ${playerScore} | Computer: ${compScore}`;
})

scissor.addEventListener("click" , ()=>{
    playerChoice = "scissor";

    compChoice = choices[Math.floor(Math.random() * 3)];

    player.textContent = `You chose: ${playerChoice}`;
    comp.textContent = `Computer chose: ${compChoice}`;

     if(compChoice == "rock"){
        result.textContent = "comp won"
        compScore++;
    }
    else if(compChoice == "paper"){
        result.textContent = "you won"
        playerScore++;
    }else{
        result.textContent = "its a tie"
    }

    score.textContent = `You: ${playerScore} | Computer: ${compScore}`;
})


