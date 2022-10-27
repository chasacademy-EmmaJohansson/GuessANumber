let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector(".guesses");
const prevResult = document.querySelector(".prevResult");
const hidegreen = document.querySelector (".green");
const hidered = document.querySelector (".red");
const gameover = document.querySelector (".gameover");
const lowHiMessage = document.querySelector(".lowHiMessage");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
//håller koll på hur många gissningar anv har haft genom att lagra gissningsantal på 1.
let resetButton;

function checkGuess() {
  let userGuess = Number(guessField.value);
  //läser av anv input och kör värdet genom number för att se till att värdet är ett tal.
  if (guessCount === 1) {
    //om det är anv första gissning så kommer en rad upp som visar anv senaste gissningar
  guesses.textContent = "Previous guesses: ";
  }
  guesses.textContent += userGuess + " ";
  
  if (userGuess === randomNumber) {
  prevResult.textContent = "Congratulations! You got it right!";
  hidegreen.classList.remove ("green")
  lowHiMessage.textContent = "";
  } else if (guessCount === 5) {
  gameover.classList.remove ("gameover");
  } else {
  prevResult.textContent = "Wrong!";
  hidered.classList.remove ("red")
  //För att vägleda anv skriver vi ut om input värdet är för högt ellet för lågt
  if(userGuess < randomNumber) {
  lowHiMessage.textContent = "Too low!";
  } else if(userGuess > randomNumber) {
  lowHiMessage.textContent = "Too high!";
  }
  }
  //Detta inför anv nästa gissning, vi lägger till 1 för att anv ska få en ny gissningschans
guessCount++;
guessField.value = "";
guessField.focus();
}
guessSubmit.addEventListener("click", checkGuess);

