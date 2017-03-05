import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdListModule, MdIconModule, MdGridListModule, MdCardModule, MdButtonModule } from '@angular/material';

import { MemoryRoutingModule } from './memory.routes';
import { MemoryComponent } from './memory.component';

@NgModule({
    imports: [
        CommonModule,
        MdListModule,
        MdIconModule,
        MdGridListModule,
        MdCardModule,
        MdButtonModule,

        MemoryRoutingModule
    ],
    declarations: [MemoryComponent]
})
export class MemoryModule { }
