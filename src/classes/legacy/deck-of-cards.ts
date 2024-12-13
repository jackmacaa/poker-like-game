export class DeckOfCards {
  nameOfCardGame: string;
  readonly cards: string[] = [
    'Ad',
    '2d',
    '3d',
    '4d',
    '5d',
    'Ac',
    '2c',
    '3c',
    '4c',
    '5c',
    'Ah',
    '2h',
    '3h',
    '4h',
    '5h',
    'As',
    '2s',
    '3s',
    '4s',
    '5s',
  ];

  constructor(nameOfGame?: string) {
    this.nameOfCardGame = nameOfGame || 'Poker :D';
  }

  getNameOfCardGame(): string {
    return this.nameOfCardGame;
  }

  getCards(): string[] {
    return this.cards;
  }

  getACard(num: number): string {
    return this.cards[num];
  }

  getTopCard(): string {
    return this.cards[0];
  }

  getNumberOfCardsInDeck(): number {
    return this.cards.length;
  }

  getPlayersHoleCards(): [string, string] {
    const cardOne = this.getARandomCard();
    let cartTwo = this.getARandomCard();

    while (cardOne === cartTwo) {
      cartTwo = this.getARandomCard();
    }

    return [cardOne, cartTwo];
  }

  public getNumberOfUniqueCards(numOfUniqueCards: number): string[] {
    const uniqueCards: string[] = [this.getARandomCard()];

    for (let i = 1; i < numOfUniqueCards; i++) {
      if (numOfUniqueCards >= this.getNumberOfCardsInDeck()) {
        return uniqueCards;
      }

      uniqueCards.push(this.getNextCard(uniqueCards));
    }

    return uniqueCards;
  }

  private getNextCard(uniqueCards: string[]): string {
    let nextCard = this.getARandomCard();

    let alreadyDealtCard = uniqueCards.find((card) => card === nextCard);

    while (alreadyDealtCard) {
      nextCard = this.getARandomCard();
      alreadyDealtCard = uniqueCards.find((card) => card === nextCard);
    }

    return nextCard;
  }

  getARandomCard(): string {
    const maxDeckOfCardsIndex = this.getNumberOfCardsInDeck() - 1;
    const randomCardIndex = Math.floor(Math.random() * maxDeckOfCardsIndex);

    return this.cards[randomCardIndex];
  }

  shuffleCards(): void {
    for (let i = this.cards.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.cards[i];

      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }
}
