import { DeckOfCards } from './classes/deck-of-cards.js';
import { PokerLikeGame } from './classes/poker-like-game.js';
import readlinePromises from 'node:readline/promises';

const rl = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// const getAnswersFromUser = async () => {
//   const playersName = await rl.question('What is your name? ');

//   return { playersName };
// };

// const answers = await getAnswersFromUser();

// Initializing and shuffling deck
const deckOfCards = new DeckOfCards();

/// GAME started
const newGame = new PokerLikeGame(deckOfCards, 'answers.playersName');
console.log(`Welcome ->  ${newGame.getPlayersName()}`);

newGame.dealCards();

const playersHoleCards = newGame.getPlayersHoleCards();
console.log({ playersHoleCards });

const flop = newGame.getCommunityCards();
console.log({ flop });

const gameResults = newGame.getGameResults();

console.log(newGame.getResultsNiceFormat(gameResults));

rl.close();
