import { Injectable } from '@angular/core';

import { BaseSocketService } from '../base/socket/base-socket.service';
import { SocketNamespace } from '../base/socket/socket-namespace.model';

import { Game } from './game/memory-game.model';

const CREATE_EMIT = 'newGame';
const CREATED_EVENT = 'created';
const JOIN_EVENT = 'joinGame';
const PLAYER_JOIN_EVENT = 'newPlayer';
const LEAVE_EVENT = 'leaveGame';
const PLAYER_LEAVE_EVENT = 'playerLeave';
const PLAYER_DISCONNECTED = 'playerDisconnected';
const START_GAME_EVENT = 'startGame';

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
        this.memoryNamespace.emit(CREATE_EMIT, newGameConfig);
    }

    onGameCreated() {
        return this.memoryNamespace.observe<{ id: number }>(CREATED_EVENT);
    }

    joinGame(gameId: string, username: string) {
        this.memoryNamespace.emit(JOIN_EVENT, { gameId, username });
    }

    onJoinGame() {
        return this.memoryNamespace.observe<Game>(JOIN_EVENT);
    }

    onPlayerJoined() {
        return this.memoryNamespace.observe(PLAYER_JOIN_EVENT);
    }

    leaveGame(gameId: string) {
        this.memoryNamespace.emit(LEAVE_EVENT, gameId);
    }

    onPlayerLeave() {
        return this.memoryNamespace.observe(PLAYER_LEAVE_EVENT);
    }

    startGame(gameId: string) {
        this.memoryNamespace.emit(START_GAME_EVENT, gameId);
    }

    onStartGame() {
        return this.memoryNamespace.observe(START_GAME_EVENT);
    }

    onPlayerDisconnected() {
        return this.memoryNamespace.observe(PLAYER_DISCONNECTED);
    }
}
