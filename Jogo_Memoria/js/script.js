const FRONT = "square_front";
const BACK = "square_back";
const SQUARE = "square";
const SQUARES = "squares";
const ICON = "icon";
const FLIP = "flip";
const OTHER_GAME = "<p class='otherTheme'>Jogue com o tema:<a href='./8clubs.html'>Times de Futebol</a></p>";

startGame();

function startGame() {
  initialiseCards(game.createCardsFromItems());
}

function initialiseCards(cards) {
  let gameBoard = document.querySelector(".gameBoard");
  gameBoard.innerHTML = '';
  cards.forEach((card) => {
    let cardElement = document.createElement("div");
    cardElement.id = card.id;
    cardElement.classList.add(SQUARES);
    cardElement.dataset.icon = card.icon;

    createCardContent(card, cardElement);

    cardElement.classList.add(FLIP);
    setTimeout(() => {
      cardElement.classList.remove(FLIP);
    }, 2000)

    cardElement.addEventListener("click", flipCard);
    gameBoard.appendChild(cardElement);
  });
}

function createCardContent(card, cardElement) {
  createCardFace(FRONT, card, cardElement);
  createCardFace(BACK, card, cardElement);
}

function createCardFace(face, card, element) {
  let cardElementFace = document.createElement("div");
  cardElementFace.classList.add(SQUARE, face);

  if (face === FRONT) {
    let iconElement = document.createElement("img");
    iconElement.classList.add(ICON);
    iconElement.src = "../assets/" + game.path + card.icon + ".png";
    cardElementFace.appendChild(iconElement);
  } else {
    cardElementFace.innerHTML = "X";
  }
  element.appendChild(cardElementFace);
}

function flipCard() {
  if (game.setCard(this.id)) {
    this.classList.add("flip");
    if (game.secondCard) {
      if (game.checkPair()) {
        game.clearCards();
        if (game.checkGameOver()) {
          let gameOverScreen = document.getElementById("gameOver");
          gameOverScreen.style.display = "flex";
        }
      } else {
        setTimeout(() => {
          let firstCardView = document.getElementById(game.firstCard.id);
          let secondCardView = document.getElementById(game.secondCard.id);

          firstCardView.classList.remove(FLIP);
          secondCardView.classList.remove(FLIP);
          game.unflipCards();
        }, 500);
      }
    }
  }
}

function newGame() {
    location.reload()

}