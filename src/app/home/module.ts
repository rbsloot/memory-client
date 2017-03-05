import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule } from '@angular/material';

import { HomeRoutingModule } from './home.routes';

import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        MdButtonModule,
        HomeRoutingModule
    ],
    declarations: [HomeComponent]
})
export class HomeModule { }
