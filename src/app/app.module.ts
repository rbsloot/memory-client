import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule, MdToolbarModule } from '@angular/material';

import { CoreModule } from './core/module';
import { SocketModule } from './services/base/socket/module';
import { MemorySocketModule } from './services/memory/module';

import { MemoryModule } from './memory/module';

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
        MdToolbarModule,

        CoreModule.forRoot(),
        SocketModule.forRoot(),
        MemorySocketModule.forRoot(),

        MemoryModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
