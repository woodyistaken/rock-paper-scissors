function getComputerChoice(){
    let choice=Math.floor(Math.random()*3);
    if(choice==0){
        return "rock"
    }
    else if(choice==1){
        return "paper"
    }
    else{
        return "scissors"
    }
}
function getHumanChoice(){
    let choice=prompt("Put your choice");
    choice=choice.toLowerCase();
    if(choice==="rock" || choice==="paper" || choice==="scissors"){
        return choice;
    }
    console.error("bruh")
}
function playRound(humanChoice,computerChoice){
    if(humanChoice==="rock"){
        switch(computerChoice){
            case "rock":
                break;
            case "paper":
                computerScore++;
                break;
            case "scissors":
                humanScore++;
                break;
        }
    }
    else if(humanChoice==="paper"){
        switch(computerChoice){
            case "rock":
                humanScore++;
                break;
            case "paper":
                break;
            case "scissors":
                computerScore++
                break;
        }
    }
    else if(humanChoice==="scissors"){
        switch(computerChoice){
            case "rock":
                computerScore++
                break;
            case "paper":
                humanScore++
                break;
            case "scissors":
                break;
        }
    }

}
function playGame(humanChoice){
    if(humanChoice==null || humanScore>=5 || computerScore>=5){
        return;
    }
    let computerChoice=getComputerChoice();
    playRound(humanChoice,computerChoice);
    const scoreboard=document.querySelector("p");
    const text=document.querySelector(".text");
    const winner=document.querySelector(".winner");
    scoreboard.textContent=(`human: ${humanScore},  computer: ${computerScore}`);
    text.textContent=(`human: ${humanChoice},  computer: ${computerChoice}`);
    winner.textContent=(humanScore>computerScore)?"human wins":(humanScore===computerScore)?"draw":"computer wins";
    if(computerScore>=5 || humanScore>=5){
        winner.textContent=(humanScore>computerScore)?"human won the game":(humanScore===computerScore)?"draw":"computer won the game"
    }
}
const buttons=document.querySelectorAll("button")
buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        playGame(e.target.textContent);
    })
})
let computerScore=0,humanScore=0;

console.log(`${playGame()}`)