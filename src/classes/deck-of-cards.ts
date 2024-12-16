import { Card } from '../types';

export class DeckOfCards {
  nameOfCardGame: string;
  private readonly cards: Card[] = [
    ['A', 'D'],
    [2, 'D'],
    [3, 'D'],
    [4, 'D'],
    [5, 'D'],
    ['A', 'C'],
    [2, 'C'],
    [3, 'C'],
    [4, 'C'],
    [5, 'C'],
    ['A', 'H'],
    [2, 'H'],
    [3, 'H'],
    [4, 'H'],
    [5, 'H'],
    ['A', 'S'],
    [2, 'S'],
    [3, 'S'],
    [4, 'S'],
    [5, 'S'],
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

  getNumberOfUniqueCards(numOfUniqueCards: number): Card[] {
    const uniqueCards: Card[] = [];

    while (numOfUniqueCards != uniqueCards.length) {
      uniqueCards.push(this.getTopCard());
    }

    return uniqueCards;
  }

  private getTopCard(): Card {
    const topCard = this.cards.pop();
    if (topCard) {
      return topCard;
    }

    throw Error('No Cards left in Deck');
  }

  private shuffleCards(): void {
    for (let i = this.cards.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
}
