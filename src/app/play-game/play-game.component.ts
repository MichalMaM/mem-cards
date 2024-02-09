import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { GameService } from '../game.service';
import { CardService } from '../card.service';
import { Card } from '../card';

@Component({
  selector: 'app-play-game',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './play-game.component.html',
  styleUrl: './play-game.component.scss'
})
export class PlayGameComponent {

  constructor(public gameService: GameService, public cardService: CardService) {}

  showCard(card: Card) {
    this.cardService.processCard(card);
  }

  getCards(): Card[] {
    return this.cardService.cards;
  }

}
