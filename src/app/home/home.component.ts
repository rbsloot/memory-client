import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { MemorySocketService } from '../services/memory/memory-socket.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    private createdSubscription: Subscription;
    private playerJoinedSubscription: Subscription;

    constructor(
        private router: Router,
        private memorySocketService: MemorySocketService) { }

    ngOnInit() {
        this.createdSubscription = this.memorySocketService.onGameCreated()
            .subscribe(newGame => this.router.navigate(['memory', newGame.id]));
        this.playerJoinedSubscription = this.memorySocketService.onPlayerJoined()
            .subscribe(res => console.log('JOINED', res));
    }

    ngOnDestroy() {
        this.createdSubscription.unsubscribe();
        this.playerJoinedSubscription.unsubscribe();
    }

    createGame() {
        this.memorySocketService.newGame({ theme: 'test' });
    }

    joinGame(gameId: string) {
        this.router.navigate(['memory', gameId]);
    }
}
