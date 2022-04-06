 function playerQuestion(){
  let choice = prompt("Select between Rock, Paper and Scissor. ")
  choice = choice.toLowerCase();  

    if (choice=="rock"){
    return playerChoice = 0;
    }

    else if (choice=="paper"){
    return    playerChoice = 1;
    }

    else if (choice=="scissor"){
    return    playerChoice = 2;
    }
}
function computerRandom() {
    return Math.floor(Math.random() * 3)
}

function play(){
    
    switch(playerChoice){
        
    case 0:
        if (computerChoice == 2){
            ++scoreplayer;
            console.log(`Rock vs Scissor. You WIN! ${scoreplayer} - ${scorecomputer}`)
        }
        else if (computerChoice == 1){
            ++scorecomputer;
            console.log(`Rock vs Paper. You LOSE! ${scoreplayer} - ${scorecomputer}`)
        }
        else if (playerChoice == 0 && computerChoice == 0){
            console.log(`Rock vs Rock. TIE! ${scoreplayer} - ${scorecomputer}`)
        }
        break;

    case 1:
        if (computerChoice == 0){
            ++scoreplayer;
            console.log(`Paper vs Rock. You WIN! ${scoreplayer} - ${scorecomputer}`)    
            }
        else if (computerChoice == 2){
            ++scorecomputer;
            console.log(`Paper vs Scissor. You LOSE! ${scoreplayer} - ${scorecomputer}`)
        }
        else if (computerChoice == 1){
            console.log(`Paper vs Paper. TIE! ${scoreplayer} - ${scorecomputer}`)
        }
        break;
    
    case 2:
        if (playerChoice == 2 && computerChoice == 1){
            ++scoreplayer;
            console.log(`Scissor vs Paper. You WIN! ${scoreplayer} - ${scorecomputer}`)
        }
        else if (playerChoice == 2 && computerChoice == 0){
            ++scorecomputer;
            console.log(`Scissor vs Rock. You LOSE! ${scoreplayer} - ${scorecomputer}`)
        }
        else if (playerChoice == 2 && computerChoice == 2){
            console.log(`Scissor vs Scissor. TIE! ${scoreplayer} - ${scorecomputer}`)
        }
        break;
}

}

let playerChoice = 0;
let computerChoice = 0;
let scoreplayer = 0;
let scorecomputer = 0;

for (let i = 0; i<5; i++){   
    computerChoice = computerRandom()
    playerChoice = playerQuestion()
    play();
}






    










