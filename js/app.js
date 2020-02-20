/*
GAME RULES:

- The Dice game has 2 players
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Skip', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

Türkçe:
- Oyun 2 kişi ile oynanır 
- Her elde oyuncu istediği kadar zar atar ve global skoruna eklenir
- Eğer ki 1 attığı zar 1 gelirse o eldeki tüm puanını kaybeder
- Eğer 'Skip' derse o eldeki puanı global puanına eklenir
- Kim ilk 100 global puana ulaşırsa oyunu kazanır
*/

let scores, roundScore, activePlayer;
init();

let diceDOM = document.querySelector(".dice");
diceDOM.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function() {
  let dice = randomNumber();
  showDice(dice);
  isDiceOne(dice);
});

function addScore(dice) {
  roundScore += dice;
  document.querySelector("#current-" + activePlayer).textContent = roundScore;
}

function randomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function showDice(dice) {
  document.querySelector(
    "#current-" + activePlayer
  ).textContent = dice.toString();
  diceDOM.style.display = "block";
  diceDOM.src = "img/dice-" + dice + ".png";
}

function isDiceOne(dice) {
  if (dice !== 1) {
    addScore(dice);
  } else if (dice === 1) {
    addScore(dice);
    nextPlayer();
  }
}

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.querySelector("#current-0").textContent = (0).toString();
  document.querySelector("#current-1").textContent = (0).toString();

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  diceDOM.style.display = "none";
}

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  document.querySelector("#score-0").textContent = (0).toString();
  document.querySelector("#score-1").textContent = (0).toString();
  document.querySelector("#current-0").textContent = (0).toString();
  document.querySelector("#current-1").textContent = (0).toString();
  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector("#name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

let btn_stop = document.querySelector(".btn-stop");
btn_stop.addEventListener("click", function() {
  scores[activePlayer] += roundScore;
  document.querySelector("#score-" + activePlayer).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 20) {
    document.querySelector("#name-" + activePlayer).textContent = "Winner!";
    diceDOM.style.display = "none";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    nextPlayer();
  }
});

document.querySelector(".btn-new").addEventListener("click", init);
