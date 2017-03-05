import { NgModule, ModuleWithProviders } from '@angular/core';

import { MemorySocketService } from './memory-socket.service';
import { MemoryGameService } from './memory-game.service';

@NgModule({})
export class MemoryModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MemoryModule,
            providers: [MemorySocketService, MemoryGameService]
        };
    }
}
