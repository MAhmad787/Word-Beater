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

// Grabing Elements
let level = document.querySelector('#selectLevel');
let start = document.querySelector('#start');
let wordInput = document.querySelector('#wordInput');
let currentWord = document.querySelector('#currentWord');
let message = document.querySelector('#message');
let timeDisplay = document.querySelector('#time');
let scoreDisplay = document.querySelector('#score');
let seconds = document.querySelector('#seconds');
let userName = document.querySelector('#nickName');
let addName = document.querySelector('#addName');
seconds.innerHTML = currentTime.easy;

// Display High score in UI

if (typeof sessionStorage['highScore'] != 'undefined') {
  highScore.innerHTML = sessionStorage['highScore'];
}

// If userName does not exist
let uiName = userName.innerHTML;
if (
  typeof sessionStorage['Name'] === 'undefined' ||
  sessionStorage['Name'] === ''
) {
  userName.innerHTML = uiName;
} else {
  userName.innerHTML = sessionStorage['Name'];
  // Get the name of the user
}

addName.addEventListener('click', () => {
  let nickName = window.prompt('Your NickName');

  // If nickName is empty

  if (nickName === ' ' || nickName === '') {
    console.log('error 1 passed');
    if (
      typeof sessionStorage['Name'] === 'undefined' ||
      sessionStorage['Name'] === ''
    ) {
      userName.innerHTML = uiName;
      console.log('error 2 passed');
    } else {
      userName.innerHTML = sessionStorage['Name'];
    }
  } else {
    sessionStorage.setItem('Name', nickName);
    userName.innerHTML = sessionStorage['Name'];
  }
});
// Starts the game
start.addEventListener('click', startGame);
// Setting the UI time to the Current level

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

// Get the value of the level
// console.log(level);
level.addEventListener('change', () => {
  levelValue = currentTime[level.value];
  currentLevel = levelValue;
  seconds.innerHTML = currentLevel;
});
console.log(currentLevel);

// Define the returning values of the Interval Function

let counterId = null;
let statusId = null;
let time = currentLevel;
// Start Game by clicking on start button
function startGame() {
  // Disabling the Select Level
  level.disabled = true;
  // Clear the interval
  clearInterval(counterId);
  // Set the time to its initial value
  time = currentLevel;
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
  level.disabled = true;
  if (matchWord()) {
    time = currentLevel + 1;
    isPlaying = true;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  // Set High Score
  if (
    typeof sessionStorage['highScore'] === 'undefined' ||
    score > sessionStorage['highScore']
  ) {
    sessionStorage['highScore'] = score;
  } else {
    sessionStorage['highScore'] = sessionStorage['highScore'];
  }

  // Prevent display High score : -1
  if (sessionStorage['highScore'] >= 0) {
    highScore.innerHTML = sessionStorage['highScore'];
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
  } else if (time === 0) {
    // Game Over
    isPlaying = false;
    highScore.innerHTML = sessionStorage['highScore'];
  }
  // Display time
  timeDisplay.innerHTML = time;
}

// check the status of the game
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
    start.innerHTML = 'Restart';
    level.disabled = false;
  }
}
