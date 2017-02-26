import { Component, OnInit } from '@angular/core';

import { Card } from '../game/memory-card.model';
import { Player } from '../user/memory-player.model';
import { Game } from '../game/memory-game.model';

@Component({
    selector: 'memory-game',
    templateUrl: './memory.component.html',
    styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit {

    game: Game;

    constructor() { }

    ngOnInit() {
        const cards = [
            new Card('test'),
            new Card('test'),
            new Card('test'),
            new Card('test'),
            new Card('test'),
            new Card('test')
        ];
        const players = [
            new Player('Henk'),
            new Player('Jan-Willem')
        ];

        this.game = new Game(players, cards);
        console.log(this.game);
    }
}
