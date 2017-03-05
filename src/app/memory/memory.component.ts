import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { MemoryGameService } from '../services/memory/memory-game.service';

import { Game } from '../services/memory/game/memory-game.model';

@Component({
    selector: 'memory-game',
    templateUrl: './memory.component.html',
    styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit, OnDestroy {

    game: Game;

    private routeSubscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private memoryGameService: MemoryGameService) { }

    ngOnInit() {
        this.routeSubscription = this.route.params.subscribe((params: { gameId: string }) => {
            const gameId: string = params.gameId;
            this.memoryGameService.initialize(gameId)
                .first()
                .subscribe(game => this.game = game);
        });
    }

    ngOnDestroy() {
        this.routeSubscription.unsubscribe();
        this.memoryGameService.leave();
    }
}
