/* -----------------------
PREP PHASE
------------------------ */

// Retrieve all the elements I need from the page
const scoreCounter = document.querySelector('.score-counter');
const grid = document.querySelector('.grid');
const endGameScreen = document.querySelector('.end-game-screen');
const endGameText = document.querySelector('.end-game-text');
const playAgainButton = document.querySelector('.play-again')

// Prep useful info for the logic game
const totalCells = 100;
const totalBombs = 16;
const maxScore = totalCells - totalBombs;
const bombsList = [];
let score = 0;

// Generate TOT casual bomb
while (bombsList.length < totalBombs) {
  const number = Math.floor(Math.random() * totalCells) + 1;
  if (!bombsList.includes(number)) bombsList.push(number);
}

console.log(bombsList);
