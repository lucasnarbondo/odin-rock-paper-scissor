const options = ['noxus', 'demacia', 'shadow-isles'];
function computerPlay() {
    computerSelection = options[Math.floor(Math.random() * options.length)];
    if (computerSelection=='noxus'){
        compNoxus.style.display = 'block';
    }else compNoxus.style.display = 'none';
    if (computerSelection=='demacia'){
        compDemacia.style.display = 'block';
    }else compDemacia.style.display = 'none';
    if (computerSelection=='shadow-isles'){
        compShadow.style.display = 'block';
    }else compShadow.style.display = 'none';
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

const whoWon = document.getElementById('whoWon')
const yourScore = document.getElementById('yourScore')
const finalResult = document.getElementById('finalResult')
const opponentScore = document.getElementById('opponentScore')
const compNoxus = document.querySelector('#compNoxus');
const compDemacia = document.querySelector('#compDemacia');
const compShadow = document.querySelector('#compShadow');

noxusBtn.addEventListener('click', playGame);
demaciaBtn.addEventListener('click', playGame);
shadowBtn.addEventListener('click', playGame);

let playerScore=0;
let computerScore=0;

function playGame(playerSelection,computerSelection) {
    finalResult.textContent = '';
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
    if (playerScore>=5 || computerScore >=5) {
        gameOver();
    }

}
function gameOver() {
    if (playerScore>computerScore) {
        finalResult.textContent = 'Game Over, you win';
    }else{
        finalResult.textContent = 'Game Over, you lose';
    }
    playerScore=0;
    computerScore=0;
}

