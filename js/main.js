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

// Define the returning values of the Interval Function

let counterId = null;
let statusId = null;

// Start Game by clicking on start button
function startGame() {
  clearInterval(counterId);
  // Set the time to its initial value
  time = currentLevel + 1;
  // If something is written on input before starting the game
  wordInput.value = '';
  // Setting UI tasks
  wordInput.focus();
  scoreDisplay.innerHTML = 0;
  // load Words from the array
  showWord(words);
  // change the text of message
  message.innerHTML = '';
  // Match the words
  wordInput.addEventListener('input', startMatch);
  // Countdown Function
  counterId = setInterval(counter, 1000);
  // Check the status of the game
  statusId = setInterval(checkStatus, 50);
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
function counter() {
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
}

// Check if score is === -1
if (score === -1) {
  scoreDisplay.innerHTML = '0';
}

// check the status of the game
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
    start.innerHTML = 'Restart';
  }
}
