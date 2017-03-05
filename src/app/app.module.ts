import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule, MdToolbarModule } from '@angular/material';

import { CoreModule } from './core/module';
import { SocketModule } from './services/base/socket/module';
import { MemoryModule } from './services/memory/module';

import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule.forRoot(),
        MdToolbarModule,

        AppRoutingModule,

        CoreModule.forRoot(),
        SocketModule.forRoot(),
        MemoryModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
