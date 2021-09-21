// Define variables
let rightChoice = 0;
let wrongChoice = 0;
let arr = [];

function guessButton() {
    // Generates a number
    let random = Math.floor(1 + Math.random() * 5);
    document.getElementById("computer-guess").innerHTML = random;
    let getNumber = parseInt(document.getElementById("getNumber").value);
    let warning = document.getElementById("warning");

    // If is not a number
    if (isNaN(getNumber)) {
        document.getElementById("warning").innerHTML = "Please enter a number!";
        document.getElementById("computer-guess").innerHTML = "Waiting for choice.";
        document.getElementById("computer").style.height = "5rem";
    }
    // If number is not in the specified range
    else if (getNumber > 5 || getNumber < 1) {
        document.getElementById("warning").innerHTML = "Please enter a number between 1-5!";
        document.getElementById("computer-guess").innerHTML = "Waiting for choice.";
        document.getElementById("computer").style.height = "5rem";
    }
    // If it is a number in the specified range
    else {
        document.getElementById("warning").innerHTML = "Keep Guessing!";
        console.log(`User: ${getNumber}`);
        console.log(`Computer: ${random}`);
        // If user guessed correctly and is a number
        if (random == getNumber && !isNaN(getNumber)) {
            console.log(`You guessed right.`);
            console.log(`Right Choice: ${rightChoice}`);
            rightChoice++;
            document.getElementById("user-score").innerHTML = rightChoice;
            document.getElementById("message").innerHTML = "You Won!";
            // Push correctly guessed number into array
            arr.push(random);
            console.log(arr);
            document.getElementById("computer").style.height = "2.5rem";
        }
        // If user guessed wrong and is a number
        else if (random != getNumber && !isNaN(getNumber)) {
            console.log(`You guessed wrong.`);
            console.log(`Wrong Choice: ${wrongChoice}`);
            wrongChoice++;
            document.getElementById("computer-score").innerHTML = wrongChoice;
            document.getElementById("message").innerHTML = "You Lose!";
            document.getElementById("computer").style.height = "2.5rem";
        }
        else if (isNaN(getNumber)) {
            document.getElementById("warning").innerHTML = "Please enter a number!";
            document.getElementById("computer").style.height = "5rem";
        }
        document.getElementById("computer-item").style.display = "block";
        document.getElementById("score-item").style.display = "block";
        }  
}
// Refreshes the webpage
function reset() {
    location.reload();
}
// Shows all the correct guessed numbers
function showHistory() {
    if (arr === undefined || arr.length == 0) {
        document.getElementById("history").innerHTML = "You did not guess correctly any number yet. Please guess again!";
    }
    else {
        document.getElementById("history").innerHTML = `Correct Guesses: ${arr}`;
    }
}