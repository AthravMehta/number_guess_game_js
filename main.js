let myNumber = Math.floor(Math.random() * 100) + 1;

const guessFeild = document.querySelector(".guessFeild");
const guessSubmit = document.querySelector(".guessSubmit");
const guesses = document.querySelector(".guesses");
const lowOrHi = document.querySelector(".lowOrHi");
const lastResult = document.querySelector(".lastResult");

let guessCount = 1;
let resetButton;

function checkGuess() {

    const userGuess = Number(guessFeild.value);
    if(guessCount === 1){
        guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;
    if(userGuess === myNumber) {
        lastResult.textContent = "You got it Right!!";
        lastResult.style.backgroundColor = "green" ;
        lowOrHi.textContent = "";
        setGameOver();
        
    }
    else if (guessCount === 10) {
        lastResult.textContent = "Game Over!";
        lowOrHi.textContent = "";
        setGameOver();
    }
    else{
        lastResult.textContent = "Wrong guess!!";
        lastResult.style.backgroundColor = "red";   
        if(userGuess < myNumber){
            lowOrHi.textContent = "Guess a Higher Number";
        }else if(userGuess > myNumber){
            lowOrHi.textContent = "Guess a Lower Number";
        }
    }
    guessCount++;
    guessFeild.value = "";
    guessFeild.focus();
}

guessSubmit.addEventListener("click", checkGuess);
  
function setGameOver() {
    guessFeild.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new Game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame)
}

function resetGame() {
    guessCount = 1; // resetting guess count
    const resultParas = document.querySelectorAll(".resultParas p"); // resetting all the para values.
    for(const resultPara of resultParas){
        resultPara.textContent = "";
    }
    resetButton.parentNode.removeChild(resetButton);

    guessFeild.disabled = false;
    guessSubmit.disabled = false;
    guessFeild.value = "";
    guessFeild.focus();

    lastResult.style.backgroundColor = "white";
    myNumber = Math.floor(Math.random() * 100) + 1;
}