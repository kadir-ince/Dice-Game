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

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

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
  let dice = Math.floor(Math.random() * 6) + 1;
  return dice;
}

function showDice(dice) {
  document.querySelector("#current-" + activePlayer).textContent = dice.toString();
  diceDOM.style.display = "block";
  diceDOM.src = "img/dice-" + dice + ".png";
}

function isDiceOne(dice) {
  if (dice !== 1) {
    addScore(dice);

  } else if (dice === 1) {
    addScore(dice);
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;
  }
}
