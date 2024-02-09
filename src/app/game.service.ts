import { Injectable } from '@angular/core';
import { CardService } from './card.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private _isPlaying: boolean = false;
  private _isChoosingImages: boolean = true;

  constructor(public cardService: CardService) { }

  public get isChoosingImages(): boolean {
    return this._isChoosingImages;
  }
  public set isChoosingImages(value: boolean) {
    this._isChoosingImages = value;
  }
  public get isPlaying(): boolean {
    return this._isPlaying;
  }
  public set isPlaying(value: boolean) {
    this._isPlaying = value;
  }

  public startGame() {
    this.cardService.basicClean();
    this.cardService.prepareCards();
    this.isPlaying = true;
    this.isChoosingImages = false;
  }

  public prepareGame() {
    this.cardService.clean();
    this.isPlaying = false;
    this.isChoosingImages = true;
  }
}
