import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule, MdToolbarModule } from '@angular/material';

import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes),
        MaterialModule.forRoot(),
        MdToolbarModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
