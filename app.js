//main

//button assigned
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");

//score display assigned
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");

//reset button
const resetButton = document.querySelector("#reset");

//select winnig score limit options
const winningScoreSelect = document.querySelector("#playTo");

//default score of players
let p1Score = 0;
let p2Score = 0;

//winning score points limit
let winningScore = 3;

//boolean call for game over
let isGameOver = false;

p1Button.addEventListener("click", (e) => {
  //game over condition check
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true;
      //adding classes for number to change color for winner and loser
      p1Display.classList.add("has-text-success");
      p2Display.classList.add("has-text-danger");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", (e) => {
  //   game over condition check
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
      //adding classes for number to change color for winner and loser
      p2Display.classList.add("has-text-success");
      p1Display.classList.add("has-text-danger");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p2Display.textContent = p2Score;
  }
});

//winning score limit functionality
winningScoreSelect.addEventListener("change", () => {
  //   alert("Change"); // check working
  //   alert(this.value); // undefined printing in alert - t check

  winningScore = parseInt(this.value);
  reset();
});

//reset funtion -
const reset = (e) => {
  //values to bring back down to initial so to start game again.
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;

  //display updation to initial values again upon clicking button
  p1Display.textContent = 0;
  p2Display.textContent = 0;

  //ADDING WINNER & LOSER classes
  p1Display.classList.remove("has-text-success", "has-text-danger");
  p2Display.classList.remove("has-text-success", "has-text-danger");
  p1Button.disabled = false;
  p2Button.disabled = false;
};

//after reset funtion only above written it will work
//reset button functionality = any number to 0 again
resetButton.addEventListener("click", reset);
