let isSunk = false;
let guess=0;
let GUESSES=6;
let hits=0;
var UserInput = document.querySelector("#UserInput");

let SubmitButton = document.getElementById("Shoot");
let map = [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let BR = "<br>"
var loc = 0;
/*randomSpace = Math.floor(Math.random() *18) +1;
var shipLocation =[];
shipLocation.push(randomSpace);
shipLocation.push(randomSpace+1);
shipLocation.push(randomSpace+2);*/





SubmitButton.addEventListener("click", startGame, false);
//loc = UserInput;


//Start of function for the game 
function startGame()
{
    //insart the user input into loc to turn it into a number. 
     loc = parseInt( UserInput.value );
    //Count down for guesses they make. 
    GUESSES--
    
    //if statments to check if they guess is right. 
  if (map[loc] === 1)
      {
          hits++;
          document.getElementById("MassageBox").innerHTML= "You hit my ship! Guess again";
      }
    
    // if statment to check if the answer is wrong. 
    else
    {
        document.getElementById("MassageBox").innerHTML = "You missed. Try again. You have " + GUESSES+ " guesses left.";
    }
    
    //if statment to chack if they hit 3 times they won.
    if (hits >= 3) 
    {
        isSunk = true;
        document.getElementById("MassageBox").innerHTML = "You win. You sunk my battleship!";
        SubmitButton.disabled= true;
    }
	
    // if statment to check if they run of guesses. 
    if (GUESSES < 1)
        {
          document.getElementById("MassageBox").innerHTML= "Sorry you lost, you run out of guesses";
            SubmitButton.disabled = true;
        }
}
//end of functions. 