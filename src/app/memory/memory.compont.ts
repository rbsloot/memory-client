import { Component } from '@angular/core';

@Component({
    selector: 'memory-game',
    templateUrl: './memory.component.html',
    styleUrls: ['./memory.component.scss']
})
export class MemoryComponent {

    constructor() {
        console.log('Init memory component');
    }

}
