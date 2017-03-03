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
            : this.observeUsingSocket('connect', this.socket).first();
    }

    observe<T>(event: string) {
        return new Observable<T>(observer => {
            this.connect()
                .subscribe(socket => socket.on(event, observer.next));
        });
    }

    observeUsingSocket<T>(event: string, socket: SocketIOClient.Socket) {
        return new Observable<T>(observer => {
            socket.on(event, observer.next);
        });
    }

    emit(event: string, emitData: any) {
        this.connect()
            .subscribe(socket => socket.emit(event, emitData));
    }
}
