// Time Object
let currentTime = {
  easy: 8,
  medium: 5,
  hard: 3,
};

// Start the game

// Globals
let currentLevel = currentTime.easy;
let score = 0;
let isPlaying;
let time = currentLevel;

// Grabing Elements
let level = document.querySelector('#selectLevel');
let start = document.querySelector('#start');
let wordInput = document.querySelector('#wordInput');
let currentWord = document.querySelector('#currentWord');
let message = document.querySelector('#message');
let timeDisplay = document.querySelector('#time');
let scoreDisplay = document.querySelector('#score');
let seconds = document.querySelector('#seconds');

start.addEventListener('click', startGame);
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
  // Set the time to its initial value
  time = currentLevel + 1;
  // Setting UI tasks
  wordInput.focus();
  scoreDisplay.innerHTML = 0;
  // load Words from the array
  showWord(words);
  // Match the words
  wordInput.addEventListener('input', startMatch);
  // Countdown Function
  setInterval(counter, 1000);
  // Check the status of the game
  setInterval(checkStatus, 50);
}

function showWord(words) {
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randomIndex];
}
function startMatch() {
  if (matchWord()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
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
    console.log(time);
  } else if (time === 0) {
    // Game Over
    isPlaying = false;
  }
  // Display time
  timeDisplay.innerHTML = time;
  if (time === 0) {
    timeDisplay.innerHTML = 0;
  }
}

// Check if score is === -1

// check the status of the game
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}
