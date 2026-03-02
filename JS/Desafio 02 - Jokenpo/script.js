const playHuman = (humanChoice) => {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = "";

  if (humanChoice === computerChoice) {
    result = "Empate!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "Você venceu!";
  } else {
    result = "Computador venceu!";
  }

  document.querySelector(".result").textContent =
    `Você escolheu ${humanChoice}, o computador escolheu ${computerChoice}. ${result}`;
};
