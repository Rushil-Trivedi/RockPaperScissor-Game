let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const btn = document.querySelector("#btn");

const reset = btn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userScorePara.innerText = userScore;
  compScorePara.innerText = userScore;
  msg.innerText = "Play Your Move";
  msg.style.backgroundColor = "#081b31";
});

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  // here math.random() * 3 generates the random numbers between 0 to 3(0,1,2) and we can use 0,1,2 as a index of an array.
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game Draw...";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win!. Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost!. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  // Generate computer's choice.
  const compChoice = genCompChoice();
  //   console.log("Computer choice: ", compChoice);

  if (userChoice === compChoice) {
    // Draw
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // paper,scissor
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock,scissor
      userWin = compChoice === "scissor" ? false : true;
    } else {
      // rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice clicked", userChoice);
    playGame(userChoice);
  });
});
