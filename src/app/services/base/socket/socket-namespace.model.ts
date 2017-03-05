import { Observable } from 'rxjs/Observable';

import { HttpConfig } from '../../../core/http.config';

export class SocketNamespace {
    private socket: SocketIOClient.Socket;

    constructor(
        public namespace: string,
        private httpConfig: HttpConfig) { }

    connect(): Observable<SocketIOClient.Socket> {
        if (!this.socket) {
            this.socket = io.connect(this.httpConfig.socket[this.namespace]);
        }
        return this.socket.connected
            ? Observable.of(this.socket)
            : this.observeUsingSocket('connect', this.socket).map(() => this.socket);
    }

    observe<T>(event: string, errorEvent = `${event}Error`) {
        return this.connect()
            .switchMap(socket => this.observeUsingSocket<T>(event, socket, errorEvent));
    }

    observeUsingSocket<T>(event: string, socket: SocketIOClient.Socket, errorEvent = `${event}Error`) {
        return new Observable<T>(observer => {
            socket.on(event, observer.next.bind(observer));
            socket.on(errorEvent, observer.error.bind(observer));
        });
    }

    emit(event: string, emitData: any) {
        this.connect()
            .subscribe(socket => socket.emit(event, emitData));
    }
}
