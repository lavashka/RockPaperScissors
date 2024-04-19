const buttons = document.querySelectorAll(".button-82-pushable");
const userWin = document.querySelector(".userWin");
const computerWin = document.querySelector(".computerWin");
const userWinTotal = document.querySelector(".userWinTotal");
const computerWinTotal = document.querySelector(".computerWinTotal");
const playerHand = document.getElementById("playerHand");
const computerHand = document.getElementById("computerHand");


let userWinCount = 0;
let computerWinCount = 0;
let userWinTotalCount = 0;
let computerWinTotalCount = 0;

function computerChoose() {
  const hands = ["r", "p", "s"];
  const randomHand = Math.floor(Math.random() * 3);
  computerHand.setAttribute("src", `./images/${hands[randomHand]}.png`);
  return hands[randomHand];
}

function playerChoose(choice) {
  playerHand.setAttribute("src", `./images/${choice}.png`);
  return choice;
}

function getResult(player, computer) {
  if (player === computer) return "It's a tie!";

  if (
    (player === "r" && computer === "s") ||
    (player === "p" && computer === "r") ||
    (player === "s" && computer === "p")
  ) {
    userWinCount++;
    userWin.textContent = userWinCount;
    return "You win!";
  } else {
    computerWinCount++;
    computerWin.textContent = computerWinCount;
    return "Computer wins!";
  }
}

function resetGame() {
  userWinCount = 0;
  computerWinCount = 0;
  userWin.innerHTML = "0";
  computerWin.innerHTML = "0";
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = computerChoose();
    playerChoose(playerChoice);
    getResult(playerChoice, computerChoice);

    // Check if user or computer wins 3 times
    if (userWinCount === 3) {
      userWinTotalCount++;
      userWinTotal.textContent = userWinTotalCount;
      userWinCount.syle.color = 'green'
      resetGame();
    } else if (computerWinCount === 3) {
      computerWinTotalCount++;
      computerWinTotal.textContent = computerWinTotalCount;
      resetGame();
    }
  });
});
