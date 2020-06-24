const computerchoices = ["rock", "paper", "makas"];
function check(playerchoice, computerchoice) {
  if (playerchoice == "rock") {
    switch (computerchoice) {
      case "rock":
        return "Tie";
      case "paper":
        return "Loss";
      case "makas":
        return "Win";
    }
  }
  if (playerchoice == "paper") {
    switch (computerchoice) {
      case "rock":
        return "Win";
      case "paper":
        return "Tie";
      case "makas":
        return "Loss";
    }
  }
  if (playerchoice == "makas") {
    switch (computerchoice) {
      case "rock":
        return "Loss";
      case "paper":
        return "Win";
      case "makas":
        return "Tie";
    }
  }
}
function computerPlay() {
  // pick a random number between 0 and 2 inclusive
  computerchoice = Math.floor(Math.random() * (choices.length));
  return computerchoices[computerchoice];
}

// wins and losses
let wins = 0;
let loss = 0;
const body = document.querySelector("body");
const choices = document.querySelectorAll(".choice");
ch = Array.from(choices); // create an array out of all the nodes;

const comScore = document.querySelector("#cScore");
const pScore = document.querySelector("#pScore");

let chosen = ""; // variable to store the current selection
choices.forEach((choices) => {
  choices.addEventListener("click", (e) => {
    chosen = e.path[0].id;
    computer = computerPlay();
    const result = document.querySelector("#chosen");
    if (result.childNodes.length >= 1) {
      result.innerHTML = "";
    }
    const resultdiv = document.createElement("div");
    const displayChosen = document.createElement("p");

    displayChosen.classList.add("middle");
    displayChosen.innerHTML = `<i>Siz</i> ${chosen}! seçtiniz <br> <i>Bilgisayar</i> ${computer} seçti`;
    result.appendChild(displayChosen);
    checking = check(chosen, computer);
    if (checking === "Loss") {
      loss++;
      if (document.querySelector(".result") !== null) {
        document.querySelector(".result").remove();
      }
      content = `${computer.toUpperCase()} ${chosen.toUpperCase()}'ı Alır! <br> Kaybettiniz!`;
      resultdiv.innerHTML = content;
      resultdiv.classList.add("result");
      body.appendChild(resultdiv);
      comScore.innerHTML = loss;
    }
    else if (checking === "Win") {
      wins++;
      if (document.querySelector(".result") !== null) {
        document.querySelector(".result").remove();
      }
      content = `${chosen.toUpperCase()} ${computer.toUpperCase()}'ı  Alır! <br> Kazandınız!`;
      resultdiv.innerHTML = content;
      resultdiv.classList.add("result");
      body.appendChild(resultdiv);
      pScore.innerHTML = wins;
    }
    else {
      if (document.querySelector(".result") !== null) {
        document.querySelector(".result").remove();
      }
      content = "Berabere!";
      resultdiv.innerHTML = content;
      resultdiv.classList.add("result");
      body.appendChild(resultdiv);
    }
    if (wins === 5) {
      alert("Tebrikler Kazandınız!")
      ch.forEach(function (ch) {
        ch.disabled = true;
      })

    }
    else if (loss === 5) {
      alert("Puuuhh, Kaybettiniz!");
      ch.forEach(function (ch) {
        ch.disabled = true;
      })
    }
  })
})
function newgame(e) {
  ch.forEach(function (ch) {
    ch.disabled = false; // go through every button with class of choice and enable them
  })
  wins = 0; // reset win count
  loss = 0; // reset loss count
  pScore.innerHTML = wins;
  comScore.innerHTML = loss;
}