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
function playGame(){
    for(let i =0; i<5;i++){
        let humanChoice=getHumanChoice();
        let computerChoice=getComputerChoice();
        playRound(humanChoice,computerChoice)
        console.log(`human: ${humanChoice},  computer: ${computerChoice}`)
    }
    return (humanScore>computerScore)?"human wins":(humanScore===computerScore)?"draw":"computer wins"
}

let computerScore=0,humanScore=0;

console.log(`${playGame()}`)