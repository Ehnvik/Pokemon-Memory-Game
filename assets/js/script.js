//Store the memory-card content in the variable cards.
const cards = document.querySelectorAll('.memory-card');

let flippedCard = false;
let lockBoardGame = false;
let firstCard, secondCard;
//Make first and second card flip.
function flipCard() {
  if (lockBoardGame) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForSameCard();
}
//Check if cards match.
function checkForSameCard() {
  let sameCard = firstCard.dataset.pokemon === secondCard.dataset.pokemon;
  sameCard ? disableCards() : unflipCards();
}

//Clicked cards can't be clicked again.
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoardGame();
}
//Clicked cards flip back after som time.
function unflipCards() {
  lockBoardGame = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoardGame();
  }, 1500);
}

function resetBoardGame() {
  [flippedCard, lockBoardGame] = [false, false];
  [firstCard, secondCard] = [null, null];
}
//Make the cards appear in random positions on the board.
(function shuffle() {
  cards.forEach(card => {
    let randomPosition = Math.floor(Math.random() * 12);
    card.style.order = randomPosition;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
