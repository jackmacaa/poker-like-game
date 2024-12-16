import { GameResults, HandRank, HumanPlayers, Players } from '../types/index';
import { DeckOfCards } from './deck-of-cards';

export class PokerLikeGame {
  deckOfCards: DeckOfCards;
  players: HumanPlayers;
  private computers: Players;
  communityCards: string[] = [];

  constructor(deckOfCards: DeckOfCards, playersName: string) {
    this.deckOfCards = deckOfCards;
    this.players = {
      name: playersName,
      holeCards: this.deckOfCards.getNumberOfUniqueCards(2),
      handRank: 'No Pair',
      handValue: 0,
    };
    this.computers = {
      holeCards: this.deckOfCards.getNumberOfUniqueCards(2),
      handRank: 'No Pair',
      handValue: 0,
    };
    this.communityCards = this.deckOfCards.getNumberOfUniqueCards(3);
  }

  getPlayersHoleCards(): string[] {
    return this.players.holeCards;
  }

  getCommunityCards(): string[] {
    return this.communityCards;
  }

  getPlayersName(): string {
    return this.players.name;
  }

  private isPocketPair(hand: string[]): boolean {
    if (hand[0][0] === hand[1][0]) {
      return true;
    }
    return false;
  }

  private getHandRank(hand: string[]): HandRank {
    for (let i = 0; i < hand.length; i++) {
      const foundPair = this.communityCards.find((card) => {
        return hand[i][0] === card[0];
      });

      if (foundPair) {
        return foundPair[0] as HandRank;
      }
    }
    return 'No Pair';
  }

  /**
   *
   * @param card This is the first char of the card string, e.g 'Ac' is 'A', which is the Ace of clubs, we only care about the card and not not the suit
   * @returns
   */
  private getHandsValue(card: HandRank): number {
    switch (card) {
      case '2':
        return 2;
      case '3':
        return 3;
      case '4':
        return 4;
      case '5':
        return 5;
      case 'A':
        return 14;
      default: // High Card
        return 0;
    }
  }

  private setHandRank() {
    this.players.handRank = this.getHandRank(this.players.holeCards);
    this.computers.handRank = this.getHandRank(this.computers.holeCards);
  }

  private setHandValue() {
    if (this.isPocketPair(this.players.holeCards)) {
      this.players.handValue = this.getHandsValue(this.players.handRank);
    }

    this.players.handValue = this.getHandsValue(this.players.handRank);
    this.computers.handValue = this.getHandsValue(this.computers.handRank);
  }

  getGameResults(): GameResults {
    this.setHandRank();
    this.setHandValue();

    if (this.players.handValue === this.computers.handValue) {
      return 'DRAW';
    }

    if (this.players.handValue > this.computers.handValue) {
      return 'PLAYER';
    }

    return 'COMPUTER';
  }

  getResultsNiceFormat(gameResults: GameResults) {
    const resultsNiceFormat = `The Player had [${this.players.holeCards}] which was ${this.players.handRank}'s and The Computer had [${this.computers.holeCards}] which was ${this.computers.handRank}'s`;

    if (gameResults === 'DRAW') {
      return `DRAW -> ${resultsNiceFormat}`;
    } else if (gameResults === 'PLAYER') {
      return `${this.players.name} is the WINNER -> ${resultsNiceFormat}`;
    } else {
      return `COMPUTER WINNER -> ${resultsNiceFormat}`;
    }
  }
}
