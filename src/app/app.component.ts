import { Component, OnInit } from '@angular/core';

import { AppConfig } from './core/app.config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    name: string;

    constructor(private appConfig: AppConfig) { }

    ngOnInit() {
        this.name = this.appConfig.name;
    }

}
