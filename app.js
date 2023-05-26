//main

//refractoring code - combining common into one function

//making p1 and p2 an object
const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

//reset button
const resetButton = document.querySelector("#reset");

//select winnig score limit options
const winningScoreSelect = document.querySelector("#playTo");

//winning score points limit
let winningScore = 3;
// let winningScore = parseInt(winningScoreSelect.value);

//boolean call for game over
let isGameOver = false;

//generic function
const updateScores = (player, opponent) => {
  // function updateScores(player, opponent) {
  //game over condition check
  if (!isGameOver) {
    player.score += 1;
    // if (player.score == winningScoreSelect.value) {
    if (player.score === winningScore) {
      isGameOver = true;
      //adding classes for number to change color for winner and loser
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
};

p1.button.addEventListener("click", () => {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", () => {
  updateScores(p2, p1);
});

// //winning score limit functionality
winningScoreSelect.addEventListener("change", function () {
  // alert("Change"); // check working
  //this - will work with normal function decalaration - not with arrow function
  // alert(this.value); // undefined printing in alert - t check

  winningScore = parseInt(this.value);
  reset();
});

//reset funtion -
const reset = (e) => {
  // function reset() {
  //values to bring back down to initial so to start game again.
  isGameOver = false;

  //looping over p1 and p2 fields
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
};

//after reset funtion only above written it will work
//reset button functionality = any number to 0 again
resetButton.addEventListener("click", reset);
