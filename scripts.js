const rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
    playerChoice=0;
    computerChoice = random();
    play()});
    
const paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
    playerChoice=1
    computerChoice = random();
    play()});

const scissor = document.querySelector(".scissor");
scissor.addEventListener("click",() => {
    playerChoice=2
    computerChoice = random();
    play()});

const reset = document.querySelector(".reset")
reset.addEventListener("click", () => {
    results.textContent = ""
    scoreplayer = 0;
    scorecomputer = 0;
});

const results = document.querySelector(".results");

let random = () => Math.floor(Math.random() * 3);
let computerChoice = 0;
let scoreplayer = 0;
let scorecomputer = 0;

function play(){

    switch(playerChoice){
        
    case 0:
        if (computerChoice == 2){
            ++scoreplayer;
            results.textContent += `Rock vs Scissor. You WIN! ${scoreplayer} - ${scorecomputer}\r\n`
        }
        else if (computerChoice == 1){
            ++scorecomputer;
            results.textContent += `Rock vs Paper. You LOSE! ${scoreplayer} - ${scorecomputer}\r\n`
        }
        else if (playerChoice == 0 && computerChoice == 0){
            results.textContent +=  `Rock vs Rock. TIE! ${scoreplayer} - ${scorecomputer}\r\n`
        }
        break;

    case 1:
        if (computerChoice == 0){
            ++scoreplayer;
            results.textContent += `Paper vs Rock. You WIN! ${scoreplayer} - ${scorecomputer}\r\n` 
            }
        else if (computerChoice == 2){
            ++scorecomputer;
            results.textContent += `Paper vs Scissor. You LOSE! ${scoreplayer} - ${scorecomputer}\r\n`
        }
        else if (computerChoice == 1){
            results.textContent += `Paper vs Paper. TIE! ${scoreplayer} - ${scorecomputer}\r\n`
        }
        break;
    
    case 2:
        if (playerChoice == 2 && computerChoice == 1){
            ++scoreplayer;
            results.textContent += `Scissor vs Paper. You WIN! ${scoreplayer} - ${scorecomputer}\r\n`
        }
        else if (playerChoice == 2 && computerChoice == 0){
            ++scorecomputer;
            results.textContent += `Scissor vs Rock. You LOSE! ${scoreplayer} - ${scorecomputer}\r\n`
        }
        else if (playerChoice == 2 && computerChoice == 2){
            results.textContent += `Scissor vs Scissor. TIE! ${scoreplayer} - ${scorecomputer}\r\n`
        }
        break;
    }

    if (scoreplayer == 5){
        results.textContent += "You WIN!"
    }
    else if (scorecomputer == 5){
        results.textContent += "You LOSE!"
    }
}