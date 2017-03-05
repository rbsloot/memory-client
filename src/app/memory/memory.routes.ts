import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemoryComponent } from './memory.component';

const MemoryRoutes: Routes = [
    { path: '', component: MemoryComponent }
];

@NgModule({
    imports: [RouterModule.forChild(MemoryRoutes)]
})
export class MemoryRoutingModule { }
