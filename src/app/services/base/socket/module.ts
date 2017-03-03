import { NgModule, ModuleWithProviders } from '@angular/core';

import { BaseSocketService } from './base-socket.service';

@NgModule({})
export class SocketModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SocketModule,
            providers: [BaseSocketService]
        };
    }
}
