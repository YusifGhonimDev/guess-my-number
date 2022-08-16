"use strict";

const getRandomNumber = () => Math.floor(Math.random() * 20) + 1;
const checkHighScore = () => {
  if (highscore < score) {
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  }
};
const wrongNumber = () => {
  score--;
  document.querySelector(".score").textContent = score;
};
const hideCheckButton = () =>
  (document.querySelector(".check").style.display = "none");
const hideInputField = () =>
  (document.querySelector(".guess").style.display = "none");
const emptyInput = () => (document.querySelector(".guess").value = "");
const reset = () => {
  emptyInput();
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  checkHighScore();
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".check").style.display = "inline-block";
  document.querySelector(".guess").style.display = "inline-block";
  targetNumber = getRandomNumber();
};

let score = Number(document.querySelector(".score").textContent);
let highscore = Number(document.querySelector(".highscore").textContent);
let targetNumber = getRandomNumber();

document.querySelector(".check").addEventListener("click", () => {
  const inputNumber = Number(document.querySelector(".guess").value);
  if (score === 1) {
    hideCheckButton();
    hideInputField();
    document.querySelector(".message").textContent = "💥 You Lost!";
    document.querySelector("body").style.backgroundColor = "rgb(102, 1, 1)";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = targetNumber;
  }
  if (inputNumber === 0) {
    document.querySelector(".message").textContent = "⛔ No Number!";
    wrongNumber();
  } else if (inputNumber > targetNumber) {
    document.querySelector(".message").textContent = "📈 Too High!";
    wrongNumber();
  } else if (inputNumber < targetNumber) {
    document.querySelector(".message").textContent = "📉 Too Low!";
    wrongNumber();
  } else if (inputNumber === targetNumber) {
    document.querySelector(".message").textContent = "🎉 You Won!";
    checkHighScore();
    hideCheckButton();
    hideInputField();
    document.querySelector("body").style.backgroundColor = "rgb(1, 68, 1)";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = targetNumber;
  }
});

document.querySelector(".again").addEventListener("click", reset);
