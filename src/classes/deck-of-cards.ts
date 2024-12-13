export class DeckOfCards {
  nameOfCardGame: string;
  private readonly cards: string[] = [
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
    this.nameOfCardGame = nameOfGame || 'Default Game';
    this.shuffleCards();
  }

  getNameOfCardGame(): string {
    return this.nameOfCardGame;
  }

  setNameOfCardGame(name: string): string {
    return (this.nameOfCardGame = name);
  }

  printAmountOfCardsLeft(): string {
    return `Amount of Cards left: ${this.cards.length}`;
  }

  getNumberOfUniqueCards(numOfUniqueCards: number): string[] {
    const uniqueCards: string[] = [];

    while (numOfUniqueCards != uniqueCards.length) {
      uniqueCards.push(this.getTopCard());
    }

    return uniqueCards;
  }

  private getTopCard(): string {
    const topCard = this.cards.pop();
    if (topCard) {
      return topCard;
    }

    return 'No cards left';
  }

  private shuffleCards(): void {
    for (let i = this.cards.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
}
