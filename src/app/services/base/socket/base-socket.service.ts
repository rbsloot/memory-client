import { Injectable } from '@angular/core';

import { HttpConfig } from '../../../core/http.config';

import { SocketNamespace } from './socket-namespace.model';

@Injectable()
export class BaseSocketService {
    private connectedNamespaces: { [namespace: string]: SocketNamespace } = {};

    constructor(private httpConfig: HttpConfig) { }

    getSocketNamespace(namespace = 'root') {
        const socketNamespace = this.connectedNamespaces[namespace];
        return socketNamespace
            ? socketNamespace
            : this.connectedNamespaces[namespace] = new SocketNamespace(namespace, this.httpConfig);
    }
}
