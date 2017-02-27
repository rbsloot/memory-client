import { Player } from '../user/memory-player.model';
import { Card } from './memory-card.model';

// For future improvements, remove players as contructor input and make it a room (socket room)

export class Game {
    constructor(public players: Player[], public cards: Card[]) {
        this.start();
    }

    start() {
        this.players = this.shuffle(this.players);
    }

    private shuffle(array) {
        let m = array.length, t, i;

        while (m) {
            i = Math.floor(Math.random() * m--);

            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    }

}