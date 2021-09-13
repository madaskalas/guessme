let rightChoice = 0;
let wrongChoice = 0;

function guessButton() {
    let random = Math.floor(1 + Math.random() * 5);
    document.getElementById("computer-guess").innerHTML = random;
    let getNumber = parseInt(document.getElementById("getNumber").value);
    let warning = document.getElementById("warning");

    // If is not a number
    if (isNaN(getNumber)) {
        document.getElementById("warning").innerHTML = "Please enter a number!";
        document.getElementById("computer-guess").innerHTML = "Waiting for choice.";
    }
    else {
        document.getElementById("warning").innerHTML = "Keep Guessing!";
        console.log(`User: ${getNumber}`);
        console.log(`Computer: ${random}`);
        if (random == getNumber && !isNaN(getNumber)) {
            console.log(`You guessed right.`);
            console.log(`Right Choice: ${rightChoice}`);
            rightChoice++;
            document.getElementById("user-score").innerHTML = rightChoice;
            document.getElementById("message").innerHTML = "User Said: I Won!";
        }
        else if (random != getNumber && !isNaN(getNumber)) {
            console.log(`You guessed wrong.`);
            console.log(`Wrong Choice: ${wrongChoice}`);
            wrongChoice++;
            document.getElementById("computer-score").innerHTML = wrongChoice;
            document.getElementById("message").innerHTML = "Computer Said: I Won!";
        }
        else if (isNaN(getNumber)) {
            document.getElementById("warning").innerHTML = "Please enter a number!";
        }
        document.getElementById("computer-item").style.display = "block";
        document.getElementById("score-item").style.display = "block";
        }  
}
function reset() {
    location.reload();
}
/*
Choosed: Waiting for choice.
Change height to fit.
*/