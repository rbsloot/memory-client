import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdListModule, MdIconModule, MdGridListModule, MdCardModule } from '@angular/material';

import { MemoryComponent } from './memory.compont';

@NgModule({
    imports: [
        CommonModule,
        MdListModule,
        MdIconModule,
        MdGridListModule,
        MdCardModule
    ],
    declarations: [MemoryComponent]
})
export class MemoryModule { }
