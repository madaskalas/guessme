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

let rightChoice = 0;
let wrongChoice = 0;
let random;
let randomWord;
let hiddenWord;
let arr = [];
let count = 0;

document.getElementById("startGameBtn").addEventListener("click", startGame);
let startGameButton = document.getElementById("startGameBtn");

document.getElementById("guessBtn").addEventListener("click", GuessWord);
let guessButton = document.getElementById("guessBtn");

function startGame() {
    console.log("Game Starts!");
    document.getElementById("score-item").style.display = "block";
    count++;
    if (count > 1) {
        document.getElementById("guessWord").value = "";
    } 
    startGameButton.innerHTML = "Next";
    this.disabled = true;
    document.getElementById("guessBtn").disabled = false;
    random = Math.floor(Math.random() * words.length - 1);
    randomWord = words[random];
    console.log(`Random Number 2nd: ${random}`);
    let wordLength = randomWord.length;
    hiddenWord = randomWord.replace(randomWord[Math.floor(Math.random() * wordLength)], "*");
    console.log(`Random Word 1: ${randomWord}`);
    document.getElementById("computer-word").innerHTML = hiddenWord;
    arr.push(randomWord);
    console.log(arr);
}

function GuessWord() {
    let userTyped = document.getElementById("guessWord").value;
    console.log(`User typed: ${userTyped}`);
    console.log(`Random Word 2: ${randomWord}`);  
    if (userTyped == randomWord) {
        wrongChoice++;
        document.getElementById("user-score").innerHTML = wrongChoice;
        document.getElementById("message").innerHTML = `Correct! Word was: /${randomWord}/`;
    }
    else if (userTyped == "") {
        document.getElementById("message").innerHTML = "Please type a word! You lost your turn!";
    }
    else {
        rightChoice++;
        document.getElementById("computer-score").innerHTML = rightChoice;
        document.getElementById("message").innerHTML = `Wrong! Correct Word: /${randomWord}/`;
    }
    this.disabled = true;
    document.getElementById("startGameBtn").disabled = false;
    
}

function reset() {
    location.reload();
}