// function computerPlay() {
//   var random = Math.random() * 3;
//   let value;
//   if (random == 0) {
//     value = 'rock';
//   }
//   if (random == 1) {
//     value = 'paper';
//   }
//   if (random == 2) {
//     value = 'scissors';
//   }
//   return value;
// }

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection == 'rock' && computerSelection == 'scissors') {
//     return "You Win! The Stone Scissors Breaks";
//   }
//   else if (playerSelection == 'rock' && computerSelection == 'paper') {
//     return "You Lose! The Stone Scissors Wraps";
//   }
//   else if (playerSelection == 'rock' && computerSelection == 'rock') {
//     return "Tie! Rock is Rock";
//   }
//   else if (playerSelection == 'paper' && computerSelection == 'scissors') {
//     return "You Lose! The paper is cut by scissors.";
//   }
//   else if (playerSelection == 'paper' && computerSelection == 'rock') {
//     return "You Win! The paper wraps the stone.";
//   }
//   else if (playerSelection == 'paper' && computerSelection == 'paper') {
//     return "Tie! Paper is Paper";
//   }
//   else if (playerSelection == 'scissors' && computerSelection == 'rock') {
//     return "You Lose! Scissors are broken by the stone.";
//   }
//   else if (playerSelection == 'scissors' && computerSelection == 'paper') {
//     return "You Win! Scissors cut the paper.";
//   }
//   else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
//     return "Tie! Scissors is Scissors";
//   }
//   else {
//     return "Incorrect entry";
//   }
// }
// function game() {
//   // let computerPoint;
//   // let playerPoint;

//   let computerChoice = computerPlay();
//   for (let i = 0; i < 5; i++) {
//     const playerSelection = window.prompt('"rock" mı "paper" mı "scissors" mı');
//     playRound(playerSelection, computerChoice);
//   }

// }
// const playerSelection = window.prompt('"rock" mı "paper" mı "scissors" mı');



// // const playerSelection = 'rock';
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
