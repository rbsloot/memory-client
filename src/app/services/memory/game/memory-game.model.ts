import { Player } from './memory-player.model';
import { Card } from './memory-card.model';

// For future improvements, remove players as contructor input and make it a room (socket room)

interface GameData {
    isActive?: boolean;
    players?: Player[];
    cards?: Card[];
}

export class Game {
    isActive = false;

    constructor(public id: string, public players: Player[] = [], public cards: Card[] = []) { }

    initialize(gameData: GameData) {
        this.isActive = gameData.isActive;
        this.state = gameData;
    }

    start(gameState: GameData) {
        this.state = gameState;
        this.isActive = gameState.isActive;
    }

    set state(newState: GameData) {
        this.cards = newState.cards || this.cards;
        this.players = newState.players || this.players;
    }

    addPlayer(player: Player) {
        this.players.push(player);
    }

    removePlayer(username: string) {
        this.players.splice(this.players.findIndex(player => player.username === username), 1);
    }
}
