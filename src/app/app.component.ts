import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { PrepareGameComponent } from "./prepare-game/prepare-game.component";
import { GameService } from './game.service';
import { CardService } from './card.service';
import { PlayGameComponent } from "./play-game/play-game.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, MatIconModule, MatButtonModule, PrepareGameComponent, PlayGameComponent]
})
export class AppComponent {
  title = 'mem-play';

  constructor(public gameService: GameService, public cardService: CardService) {}

  isChoosingImages(): boolean {
    return this.gameService.isChoosingImages;
  }

  isPlaying(): boolean {
    return this.gameService.isPlaying;
  }

  playAgain() {
    this.gameService.startGame();
  }

  prepareGame() {
    this.gameService.prepareGame()
  }
}
