const cards = document.querySelectorAll('.memory-card');

let flippedCard = false;
let lockBoardGame = false;
let firstCard, secondCard;

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

function checkForSameCard() {
  let sameCard = firstCard.dataset.pokemon === secondCard.dataset.pokemon;
  sameCard ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoardGame();
}

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

(function shuffle() {
  cards.forEach(card => {
    let randomPosition = Math.floor(Math.random() * 12);
    card.style.order = randomPosition;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
