import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Card } from './game/memory-card.model';
import { Player } from './game/memory-player.model';
import { Game } from './game/memory-game.model';

import { MemorySocketService } from '../memory/memory-socket.service';

@Injectable()
export class MemoryGameService {

    private playerJoinedSubscription: Subscription;

    constructor(private memorySocketService: MemorySocketService) { }

    initialize(gameId: string) {
        const game = new Game();

        this.memorySocketService.joinGame(gameId);
        this.playerJoinedSubscription = this.memorySocketService.onPlayerJoined()
            .subscribe(player => game.addPlayer(new Player(player['playerId'])));
        return this.memorySocketService.onJoinGame()
            .map(gameData => {
                game.players = gameData.players;
                game.cards = gameData.cards;
                return game;
            });
    }

    leave() {
        this.playerJoinedSubscription.unsubscribe();
    }
}
