import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule, MdToolbarModule } from '@angular/material';

import { CoreModule } from './core/module';
import { SocketModule } from './services/base/socket/module';
import { MemorySocketModule } from './services/memory/module';

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
        MemorySocketModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
