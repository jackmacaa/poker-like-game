import { DeckOfCards } from './classes/deck-of-cards';
import { PokerLikeGame } from './classes/poker-like-game';

// Initializing deck
const deckOfCards = new DeckOfCards('Jacks Game');

/// GAME started
const newGame = new PokerLikeGame(deckOfCards);

newGame.dealCards();

const playersHoleCards = newGame.getPlayersHoleCards();
console.log({ playersHoleCards });

const flop = newGame.getCommunityCards();
console.log({ flop });

const gameResults = newGame.getGameResults();

console.log(newGame.getResultsNiceFormat(gameResults));
