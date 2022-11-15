let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector(".guesses");
const prevResult = document.querySelector(".prevResult");
const lowHiMessage = document.querySelector(".lowHiMessage");
const againButton = document.getElementById("againButton");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
//håller koll på hur många gissningar anv har haft genom att lagra gissningsantal på 1.


  


function checkGuess() {
  let userGuess = Number(guessField.value);
  //läser av anv input och kör värdet genom number för att se till att värdet är ett tal.
  if (guessCount === 1) {
    //om det är anv första gissning så kommer en rad upp som visar anv senaste gissningar
  guesses.textContent = "Previous guesses: ";
  }
  guesses.textContent += userGuess + " ";
  
  if (userGuess === randomNumber) {
  prevResult.innerHTML= "Congratulations! You got it right!";
  prevResult.style.color = "white";
  prevResult.style.backgroundColor = "green";
  lowHiMessage.textContent = "";

  } else if (guessCount === 5) {
    prevResult.innerHTML ="Game over!"
    prevResult.style.color ="white";
    prevResult.style.backgroundColor = "purple";
    setTimeout(function (){
      window.location.reload();
    }, 2000);

  } else {
  prevResult.innerHTML = "Wrong, try again!";
  prevResult.style.color = "black";
  prevResult.style.backgroundColor = "red";


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

//Nollställ och börja om
const refreshPage = () => {
  location.reload();
}
againButton.addEventListener("click", refreshPage);
 

