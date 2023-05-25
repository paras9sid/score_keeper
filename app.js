//checking app.js synced properly with html file
// alert("working");

//main

//button assigned
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");

//score display assigned
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");

//default score of players
let p1Score = 0;
let p2Score = 0;

//winning score points limit
let winningScore = 5;

//boolean call for game over
let isGameOver = false;

p1Button.addEventListener("click", (e) => {
  //   alert("p1 button working"); // check button working.

  //game over condition check
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true;
    }
    p1Display.textContent = p1Score;
  }

  //   //condition of player 1 win
  //   if (p1Score !== winningScore) {
  //     // will limit score to default winning score = 5 not beyond that
  //     //changing p1 score text and counting increase
  //     p1Score += 1;
  //     p1Display.textContent = p1Score;
  //   }
});

p2Button.addEventListener("click", (e) => {
  //   alert("p1 button working");

  //   game over condition check
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
    }
    p2Display.textContent = p2Score;
  }

  //   //condition of player 1 win
  //   if (p2Score !== winningScore) {
  //     // will limit score to default winning score = 5 not beyond that
  //     //changing p1 score text and counting increase
  //     p2Score += 1;
  //     p2Display.textContent = p2Score;
  //   }
});
