let game = {
  lockMode: false,
  firstCard: null,
  secondCard: null,

  path: "club_symbols/",

  items: [
    "bahia",
    "vitoria",
    "ceara",
    "fortaleza",
    "nautico",
    "santa_cruz",
    "sport",
    "crb",
    "csa",
    "america_rn",
    "abc",
    "sampaio_correa",
  ],

  cards: null,

  lifes: 0,

  setCard: function (id) {
    let card = this.cards.filter((card) => card.id === id)[0];

    if (card.flipped || this.lockMode) {
      return false;
    }

    if (!this.firstCard) {
      this.firstCard = card;
      this.firstCard.flipped = true;
      return true;
    } else {
      this.secondCard = card;
      this.secondCard.flipped = true;
      this.lockMode = true;
      return true;
    }
  },

  checkPair: function () {
    if (!this.firstCard || !this.secondCard) {
      return false;
    }
    return this.firstCard.icon === this.secondCard.icon;
  },

  clearCards: function () {
    this.firstCard = null;
    this.secondCard = null;
    this.lockMode = null;
  },

  unflipCards: function (className) {
    this.firstCard.flipped = false;
    this.secondCard.flipped = false;
    this.clearCards();
    this.lifes++;
    this.removeLifes(this.lifes);
    if (this.lifes == 7) {
      document.getElementById("gameLost").style.display = "flex";
    }
  },
  removeLifes: function (value) {
    document.getElementById("heartLife" + value).style.display = "none";
  },

  checkGameOver: function () {
    return this.cards.filter((card) => !card.flipped).length == 0;
  },

  createCardsFromItems: function () {
    this.cards = [];
    this.items.forEach((item) => {
      this.cards.push(this.createPairFromItems(item));
    });

    this.cards = this.cards.flatMap((pair) => pair);
    this.shuffleCards();
    return this.cards;
  },

  createPairFromItems: function (item) {
    return [
      {
        id: this.createIdForItem(item),
        icon: item,
        flipped: false,
      },
      {
        id: this.createIdForItem(item),
        icon: item,
        flipped: false,
      },
    ];
  },

  createIdForItem: function (item) {
    return item + Math.round(Math.random() * 1000);
  },

  shuffleCards: function (cards) {
    let currentIndex = this.cards.length;
    let randomIndex = 0;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [this.cards[randomIndex], this.cards[currentIndex]] = [
        this.cards[currentIndex],
        this.cards[randomIndex],
      ];
    }
  },
};
