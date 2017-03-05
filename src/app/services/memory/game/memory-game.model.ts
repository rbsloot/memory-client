import { Player } from './memory-player.model';
import { Card } from './memory-card.model';

// For future improvements, remove players as contructor input and make it a room (socket room)

export class Game {
    constructor(public players: Player[] = [], public cards: Card[] = []) { }

    start() {
        // start game
    }

    addPlayer(player: Player) {
        this.players.push(player);
    }
}
