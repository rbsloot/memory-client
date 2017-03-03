import { NgModule, ModuleWithProviders } from '@angular/core';

import { MemorySocketService } from './memory-socket.service';

@NgModule({})
export class MemorySocketModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MemorySocketModule,
            providers: [MemorySocketService]
        };
    }
}
