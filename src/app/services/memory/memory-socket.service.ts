import { Injectable } from '@angular/core';

import { BaseSocketService } from '../base/socket/base-socket.service';
import { SocketNamespace } from '../base/socket/socket-namespace.model';

import { Game } from './game/memory-game.model';

@Injectable()
export class MemorySocketService {

    get memoryNamespace(): SocketNamespace {
        return this._memoryNamespace
            ? this._memoryNamespace
            : this.baseSocketService.getSocketNamespace('memory');
    }
    private _memoryNamespace: SocketNamespace;

    constructor(private baseSocketService: BaseSocketService) { }

    newGame(newGameConfig: { theme: string }) {
        this.memoryNamespace.emit('newGame', newGameConfig);
    }

    onGameCreated() {
        return this.memoryNamespace.observe<{ id: number }>('created');
    }

    joinGame(gameId: string) {
        this.memoryNamespace.emit('joinGame', gameId);
    }

    onJoinGame() {
        return this.memoryNamespace.observe<Game>('joinGame');
    }

    onPlayerJoined() {
        return this.memoryNamespace.observe('newPlayer');
    }
}
