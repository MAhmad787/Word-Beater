// Time Object
let currentTime = {
  easy: 8,
  medium: 5,
  hard: 3,
};

// Start the game
window.addEventListener('load', startGame);

// Globals
let currentLevel = currentTime.medium;
let score = 0;
let isPlaying;
let time = currentLevel;

// Grabing Elements
let level = document.querySelector('#selectLevel');
let wordInput = document.querySelector('#wordInput');
let currentWord = document.querySelector('#currentWord');
let message = document.querySelector('#message');
let timeDisplay = document.querySelector('#time');
let scoreDisplay = document.querySelector('#score');
let seconds = document.querySelector('#seconds');
// Setting the UI time to the Current level
seconds.innerHTML = currentLevel;

// Array of Words
const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition',
];

// Start Game by clicking on start button
function startGame() {
  // Setting UI tasks
  time = currentLevel;
  wordInput.focus();
  scoreDisplay.innerHTML = 0;
  // load Words from the array
  showWord(words);
  // Match the words
  wordInput.addEventListener('input', startMatch);
  // Countdown Function
  let t = setInterval(counter, 1000);
  setInterval(checkStatus, 50);
}

function showWord(words) {
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randomIndex];
}
function startMatch() {
  if (matchWord()) {
    isPlaying = true;
    score++;
    showWord(words);
    wordInput.value = '';

    checkStatus();
  }
  scoreDisplay.innerHTML = score;
}

function matchWord() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}
function counter(t) {
  if (time > 0) {
    // Decrease the time
    time--;
  } else if (time === 0) {
    // Game Over
    isPlaying = false;
  }
  // Display time
  timeDisplay.innerHTML = time;
}

// check the status of the game
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = 0;
  }
}
