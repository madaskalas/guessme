// Array with words
let words = [
    "the",
    "be",
    "of",
    "and",
    "to",
    "in",
    "he",
    "have",
    "it",
    "that",
    "for",
    "they",
    "with",
    "as",
    "not",
    "on",
    "she",
    "at",
    "by",
    "this",
    "we",
    "you",
    "do",
    "but",
    "from",
    "or",
    "which",
    "one",
    "would",
    "all",
    "will",
    "there",
    "say",
    "who",
    "make",
    "when",
    "can",
    "more",
    "if",
    "no",
    "man",
    "out",
    "other",
    "so",
    "what",
    "time",
    "up",
    "go",
    "about",
    "than",
    "into",
    "could",
    "state",
    "only",
    "new",
    "year",
    "some",
    "take",
    "come",
    "these",
    "know",
    "see",
    "use",
    "get",
    "like",
    "then",
    "first",
    "any",
    "work",
    "now",
    "may",
    "such",
    "give",
    "over",
    "think",
    "most",
    "even",
    "find",
    "day",
    "also",
    "after",
    "way",
    "many",
    "must",
    "look",
    "before",
    "great",
    "back",
    "through",
    "long",
    "where",
    "much",
    "should",
    "well",
    "people",
    "down",
    "own",
    "just",
    "because",
    "good",
    "each",
    "those",
    "feel",
    "seem",
    "how",
    "high",
    "too",
    "place",
    "little",
    "world",
    "very",
    "still",
    "nation",
    "hand",
    "old",
    "life",
    "tell",
    "write",
    "become",
    "here",
    "show",
    "house",
    "both",
    "between",
    "need",
    "mean",
    "call",
    "develop",
    "under",
    "last",
    "right",
    "move",
    "thing",
    "general",
    "school",
    "never",
    "same",
    "another",
    "begin",
    "while",
    "number",
    "part",
    "turn",
    "real",
    "leave",
    "might",
    "want",
    "point",
    "form",
    "off",
    "child",
    "few",
    "small",
    "since",
    "against",
    "ask",
    "late",
    "home",
    "interest",
    "large",
    "person",
    "end",
    "open",
    "public",
    "follow",
    "during",
    "present",
    "without",
    "again",
    "hold",
    "govern",
    "around",
    "possible",
    "head",
    "consider",
    "word",
    "program",
    "problem",
    "however",
    "lead",
    "system",
    "set",
    "order",
    "eye",
    "plan",
    "run",
    "keep",
    "face",
    "fact",
    "group",
    "play",
    "stand",
    "increase",
    "early",
    "course",
    "change",
    "help",
    "line"
];

// Define variables
let rightChoice = 0;
let wrongChoice = 0;
let random;
let randomWord;
let hiddenWord;
let arr = [];
let count = 0;

// Call function with button pressed
document.getElementById("startGameBtn").addEventListener("click", startGame);
let startGameButton = document.getElementById("startGameBtn");

// Call function with button pressed
document.getElementById("guessBtn").addEventListener("click", GuessWord);
let guessButton = document.getElementById("guessBtn");

function startGame() {
    console.log("Game Starts!");
    document.getElementById("score-item").style.display = "block";

    // Record counter in order to set to empty input field
    count++;
    if (count > 1) {
        document.getElementById("guessWord").value = "";
    } 
    startGameButton.innerHTML = "Next";
    this.disabled = true;
    document.getElementById("guessBtn").disabled = false;

    // Set variable to range from 0 till the word array length
    random = Math.floor(Math.random() * words.length - 1);
    // Choose a random word from the array
    randomWord = words[random];
    // Change to lowercase
    randomWord = randomWord.toLowerCase();
    console.log(`Random Number 2nd: ${random}`);
    // Save length of random word
    let wordLength = randomWord.length;
    hiddenWord = randomWord.replace(randomWord[Math.floor(Math.random() * wordLength)], "*");
    console.log(`Random Word 1: ${randomWord}`);
    document.getElementById("computer-word").innerHTML = hiddenWord;
    document.getElementById("computer-item").style.display = "block";
}

function GuessWord() {
    let userTyped = document.getElementById("guessWord").value;
    console.log(`User typed: ${userTyped}`);
    console.log(`Random Word 2: ${randomWord}`); 
    
    // If user typed the correct missing word
    if (userTyped.toLowerCase() == randomWord) {
        rightChoice++;
        // Push the correct guessed word to the array
        arr.push(randomWord);
        console.log(arr);
        document.getElementById("user-score").innerHTML = rightChoice;
        document.getElementById("message").innerHTML = `Correct! Word was: /${randomWord}/`;
    }
    // Check if input field is empty
    else if (userTyped == "") {
        document.getElementById("message").innerHTML = "Please type a word! You lost your turn!";
    }
    else {
        wrongChoice++;
        document.getElementById("computer-score").innerHTML = wrongChoice;
        document.getElementById("message").innerHTML = `Wrong! Correct Word: /${randomWord}/`;
    }
    this.disabled = true;
    document.getElementById("startGameBtn").disabled = false;
    
}

// Resets the webpage
function reset() {
    location.reload();
}
// Shows all the correct guessed numbers
function showHistory() {
    if (arr === undefined || arr.length == 0) {
        document.getElementById("history").innerHTML = "You did not guess correctly any word yet. Please guess again!";
    }
    else {
        document.getElementById("history").innerHTML = `Correct Guesses: ${arr}`;
    }
}