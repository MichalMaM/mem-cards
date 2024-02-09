import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { GameService } from '../game.service';
import { CardService } from '../card.service';

@Component({
  selector: 'app-prepare-game',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './prepare-game.component.html',
  styleUrl: './prepare-game.component.scss'
})
export class PrepareGameComponent {

  constructor(public gameService: GameService, public cardService: CardService) {}

  onFileSelected(event: any) {
    for (const f of event.target.files) {
      this.cardService.loadImage(f);
    }
  }

  playGame() {
    this.gameService.startGame();
  }

  existsAnyImage(): boolean {
    return !!this.cardService.images.length;
  }
}
