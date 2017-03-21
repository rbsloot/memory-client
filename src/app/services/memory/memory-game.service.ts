import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Card } from './game/memory-card.model';
import { Player } from './game/memory-player.model';
import { Game } from './game/memory-game.model';

import { MemorySocketService } from '../memory/memory-socket.service';

@Injectable()
export class MemoryGameService {

    constructor(private memorySocketService: MemorySocketService) { }

    joinGame(gameId: string, username: string) {
        const game = new Game(gameId);

        this.memorySocketService.joinGame(gameId, username);
        // this.playerJoinedSubscription = this.memorySocketService.onPlayerJoined()
        //     .subscribe(player => game.addPlayer(new Player(player.username)));
        // this.playerLeaveSubscription = this.memorySocketService.onPlayerLeave()
        //     .merge(this.memorySocketService.onPlayerDisconnected())
        //     .subscribe(player => game.removePlayer(player.username));

        return this.memorySocketService.onJoinGame()
            .map(gameData => {
                game.initialize(gameData);
                return game;
            });
    }

    leave(gameId: string) {
        this.memorySocketService.leaveGame(gameId);
    }

    onPlayerJoined() {
        return this.memorySocketService.onPlayerJoined()
            .map(player => new Player(player.username));
    }

    onPlayerExit() {
        return this.memorySocketService.onPlayerDisconnected()
            .map(player => ({ type: 'disconnected', player }))
            .merge(this.memorySocketService.onPlayerLeave()
                .map(player => ({ type: 'leave', player }))
            );
    }
}
