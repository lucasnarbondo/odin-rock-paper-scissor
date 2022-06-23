const options = ['noxus', 'demacia', 'shadow-isles'];
function computerPlay() {
    computerSelection = options[Math.floor(Math.random() * options.length)];
    if (computerSelection=='noxus'){
        computerSign.textContent = 'Noxus'
    }
    if (computerSelection=='demacia'){
        computerSign.textContent = 'Demacia'
    }
    if (computerSelection=='shadow-isles'){
        computerSign.textContent = 'Shadow Isles'
    }
    return computerSelection;
}


function play(playerSelection, computerSelection){
    switch (playerSelection){
        case 'noxus':
            if (computerSelection=='noxus'){
                whoWon.textContent = "It's a tie";
                result="tie";
            }
            if (computerSelection=='demacia'){
                whoWon.textContent = "Computer Chose Demacia, you lose";
                result="lose";
            }
            if (computerSelection=='shadow-isles'){
                whoWon.textContent = "Computer Chose Shadow Isles, you win";
                result="win";
            }
        break
        case 'demacia':
            if (computerSelection=='noxus'){
                whoWon.textContent = "Computer Chose Noxus, you win";
                result="win";
            }
            if (computerSelection=='demacia'){
                whoWon.textContent = "It's a tie";;
                result="tie";
            }
            if (computerSelection=='shadow-isles'){
                whoWon.textContent = "Computer Chose Shadow Isles, you lose";
                result="lose";
            }

        break
        case 'shadow-isles':
            if (computerSelection=='noxus'){
                whoWon.textContent = "Computer Chose Noxus, you lose";
                result="lose";
            }
            if (computerSelection=='demacia'){
                whoWon.textContent = "Computer Chose Demacia, you win";
                result="win";
            }
            if (computerSelection=='shadow-isles'){
                whoWon.textContent = "It's a tie";
                result="tie";
            }

        break

    }
    return result;
}

function game(){
    playerScore=0;
    computerScore=0;
    for (let i = 0; i < 5; i++) {
        computerPlay();
        playerSelection=prompt("select deck");
        result = play(playerSelection, computerSelection);
        if (result == "win"){
            playerScore++;
        }
        if (result == "lose"){
            computerScore++;
        }
     }
     if (playerScore>computerScore){
        console.log("You Win");
     }
     if (playerScore<computerScore){
        console.log("You Lose");
     }
     if (playerScore==computerScore){
        console.log("It's a Tie");
     }
}


//UI 

const noxusBtn = document.querySelector('.noxus');
const demaciaBtn = document.querySelector('.demacia');
const shadowBtn = document.querySelector('.shadow-isles');
const computerSign = document.getElementById('computerSign')
const whoWon = document.getElementById('whoWon')
const yourScore = document.getElementById('yourScore')
const opponentScore = document.getElementById('opponentScore')

noxusBtn.addEventListener('click', playGame);
demaciaBtn.addEventListener('click', playGame);
shadowBtn.addEventListener('click', playGame);

let playerScore=0;
let computerScore=0;
function playGame(playerSelection,computerSelection) {
    playerSelection = this.dataset.button;
    computerSelection = computerPlay();
    play(playerSelection,computerSelection);
    if (result == "win"){
        playerScore++;
    }
    if (result == "lose"){
        computerScore++;
    }
    yourScore.textContent = playerScore;
    opponentScore.textContent = computerScore;

}
