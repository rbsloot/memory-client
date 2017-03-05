import { Injectable } from '@angular/core';

import { BaseSocketService } from '../base/socket/base-socket.service';
import { SocketNamespace } from '../base/socket/socket-namespace.model';

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

    joinGame(gameId: string) {
        this.memoryNamespace.emit('joinGame', gameId);
    }
}