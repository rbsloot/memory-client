import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { MemoryGameService } from '../services/memory/memory-game.service';
import { MemorySocketService } from '../services/memory/memory-socket.service';

import { Game } from '../services/memory/game/memory-game.model';
import { Card } from '../services/memory/game/memory-card.model';

import { unsubscribeIfExists } from '../services/base/utils';

@Component({
    selector: 'memory-game',
    templateUrl: './memory.component.html',
    styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit, OnDestroy {

    game: Game;

    private routeSubscription: Subscription;
    private startGameSubscription: Subscription;

    // TODO create player component
    private playerJoinedSubscription: Subscription;
    private playerExitSubscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private memoryGameService: MemoryGameService,
        private memorySocketService: MemorySocketService) { }

    ngOnInit() {
        this.routeSubscription = this.route.params.subscribe(({ gameId }) => {
            this.memoryGameService.joinGame(gameId, this.username)
                .first()
                .subscribe(game => {
                    console.log(game);
                    this.game = game;
                });
            this.subscribeToPlayerEvents();
        });
        this.startGameSubscription = this.memorySocketService.onStartGame()
            .subscribe(gameState => this.game.start(gameState));
    }

    ngOnDestroy() {
        this.routeSubscription.unsubscribe();
        this.startGameSubscription.unsubscribe();

        this.playerJoinedSubscription.unsubscribe();
        this.playerExitSubscription.unsubscribe();

        this.memoryGameService.leave(this.game.id);
    }

    onStartClick() {
        this.memorySocketService.startGame(this.game.id);
    }

    onCardClick(card: Card) {
        console.log('ON CARD CLICK', card);
        this.memorySocketService.selectCard(this.game.id, card.id);
        card.isSelected = true;
    }

    private get username() {
        const sessionName = sessionStorage.getItem('username');
        const username = sessionName || window.prompt('Please enter your username');
        if(!sessionName) {
            sessionStorage.setItem('username', username);
        }
        return username;
    }

    private subscribeToPlayerEvents() {
        unsubscribeIfExists(this.playerJoinedSubscription);
        unsubscribeIfExists(this.playerExitSubscription);

        this.playerJoinedSubscription = this.memoryGameService.onPlayerJoined()
            .subscribe(player => this.game.addPlayer(player));
        this.playerExitSubscription = this.memoryGameService.onPlayerExit()
            .subscribe(leaver => this.game.removePlayer(leaver.player.username));
    }
}
