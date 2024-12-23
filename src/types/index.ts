export type GameResults = 'PLAYER' | 'COMPUTER' | 'DRAW';

export interface Players {
  holeCards: string[];
  handRank: HandRank;
  handValue: number;
}

export interface HumanPlayers extends Players {
  name: string;
}

export type HandRank = 'A' | '2' | '3' | '4' | '5' | 'No Pair';

type Suit = 'D' | 'C' | 'H' | 'S';

type Value = number | 'A';

export type Card = [Value, Suit];
