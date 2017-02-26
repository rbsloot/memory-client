import { NgModule } from '@angular/core';
import { MdGridListModule, MdCardModule } from '@angular/material';

import { MemoryComponent } from './memory.compont';

@NgModule({
    imports: [
        MdGridListModule,
        MdCardModule
    ],
    declarations: [MemoryComponent]
})
export class MemoryModule { }
