// Time Object
let currentTime = {
  easy: 8,
  medium: 5,
  hard: 3,
};

let currentLevel = currentTime.easy;

// Globals
let time = currentLevel;
let level = document.querySelector('#selectLevel');
let score = 0;
let isPlaying;
let start = document.querySelector('#start');
let wordInput = document.querySelector('#wordInput');
let currentWord = document.querySelector('#currentWord');
let seconds = document.querySelector('#seconds');
let message = document.querySelector('#message');
let timeDisplay = document.querySelector('#time');
let scoreDisplay = document.querySelector('#score');
seconds.innerHTML = currentLevel;
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
start.addEventListener('click', startGame);
function startGame() {
  start.innerHTML = 'Started';
  wordInput.focus();
  scoreDisplay.innerHTML = 0;
  message.innerHTML = '';
  function showWord(words) {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randomIndex];
  }
  showWord(words);
  wordInput.addEventListener('input', matchWord);

  let t = setInterval(counter, 1000);
  // Setting the time to previous time
  time = currentLevel;

  // Countdown Function

  function matchWord() {
    message.innerHTML = '';
    if (wordInput.value === currentWord.innerHTML) {
      wordInput.value = '';
      message.innerHTML = 'Correct!!!';
      showWord(words);
      time = currentLevel;
      counter();
      score++;
      scoreDisplay.innerHTML = score;
    }
  }
  function counter(t) {
    if (time > 0) {
      time--;
      timeDisplay.innerHTML = time + 1;
    } else if (time === 0) {
      timeDisplay.innerHTML = 0;
      message.innerHTML = 'Game Over!!!';
      clearInterval(t);
      start.innerHTML = 'Restart';
    }
  }
}
