import { Component, OnInit } from '@angular/core';

import { MemorySocketService } from '../services/memory/memory-socket.service';

import { Card } from '../game/memory-card.model';
import { Player } from '../game/memory-player.model';
import { Game } from '../game/memory-game.model';

@Component({
    selector: 'memory-game',
    templateUrl: './memory.component.html',
    styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit {

    game: Game;

    constructor(private memorySocketService: MemorySocketService) { }

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

        this.memorySocketService.memoryNamespace.observe('created').subscribe(res => console.log('CREATED', res));
    }

    createGame() {
        this.memorySocketService.newGame({ theme: 'meme' });
    }

    joinGame(gameId: string) {
        this.memorySocketService.joinGame(gameId);
    }
}
