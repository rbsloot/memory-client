import { Injectable } from '@angular/core';

interface SocketConfig {
    root: string;
    memory: string;
}

@Injectable()
export class HttpConfig {

    socket: SocketConfig = this.initSocketConfig('http://localhost:3000/');

    private initSocketConfig(root: string) {
        return {
            root,
            memory: `${root}memory`
        };
    }

}
