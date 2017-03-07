import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Card } from './game/memory-card.model';
import { Player } from './game/memory-player.model';
import { Game } from './game/memory-game.model';

import { MemorySocketService } from '../memory/memory-socket.service';

@Injectable()
export class MemoryGameService {

    private playerJoinedSubscription: Subscription;
    private playerLeaveSubscription: Subscription;

    constructor(private memorySocketService: MemorySocketService) { }

    initialize(gameId: string, username: string) {
        const game = new Game(gameId);

        this.memorySocketService.joinGame(gameId, username);
        this.playerJoinedSubscription = this.memorySocketService.onPlayerJoined()
            .subscribe((player: Player) => game.addPlayer(new Player(player.username)));
        this.playerLeaveSubscription = this.memorySocketService.onPlayerLeave()
            .subscribe((player: Player) => game.removePlayer(player.username));

        return this.memorySocketService.onJoinGame()
            .map(gameData => {
                game.players = gameData.players;
                game.cards = gameData.cards;
                return game;
            });
    }

    leave(gameId: string) {
        this.playerLeaveSubscription.unsubscribe();
        this.playerJoinedSubscription.unsubscribe();
        this.memorySocketService.leaveGame(gameId);
    }
}
