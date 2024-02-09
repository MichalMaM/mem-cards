import { Injectable } from '@angular/core';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  readers: FileReader[] = [];
  images: string[] = [];
  cards: Card[] = [];
  firstCard: Card | null = null;
  secondCard: Card | null = null;
  hits: number = 0;
  mistakes: number = 0;

  constructor() { }

  loadImage(file: File) {
    // Make sure `file.name` matches our extensions criteria
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      const reader: FileReader = new FileReader();

      reader.addEventListener(
        "load",
        () => {
          const image = new Image();
          image.height = 100;
          image.title = file.name;
          image.src = reader.result as any;
          this.images.push(image.src);
        },
        false,
      );

      reader.readAsDataURL(file);
      this.readers.push(reader);
    }
  }

  onFileSelected(event: any) {
    for (const f of event.target.files) {
      this.loadImage(f);
    }
  }

  prepareCards() {
    const tmpImages = [...this.images, ...this.images];
    const imagesMap: Map<number, string> = new Map();
    let count = 1;
    for (const image of tmpImages) {
      imagesMap.set(count, image);
      count++;
    }
    while (imagesMap.size) {
      const number = Math.floor(Math.random() * tmpImages.length);
      const finalNumber = number + 1;
      const image = imagesMap.get(finalNumber);
      if (image) {
        imagesMap.delete(finalNumber);
        this.cards.push(new Card(image as string, true));
      }
    }
  }

  processCard(card: Card) {
    if (!this.firstCard) {
      this.firstCard = card;
      card.isBack = false;
    } else if (!this.secondCard) {
      this.secondCard = card;
      card.isBack = false;
      if (this.secondCard.url != this.firstCard.url) {
        this.mistakes += 1;
        setTimeout(() => {
          if (this.firstCard) {
            this.firstCard.isBack = true;
          }
          if (this.secondCard) {
            this.secondCard.isBack = true;
          }
          this.firstCard = null;
          this.secondCard = null;
        }, 1000);
      } else {
        this.firstCard = null;
        this.secondCard = null;
        this.hits += 1;
      }
    }
  }

  areAllCardsPassed(): boolean {
    return this.hits === this.images.length;
  }

  basicClean() {
    this.cards = [];
    this.firstCard = null;
    this.secondCard = null;
    this.hits = 0;
    this.mistakes = 0;
  }

  clean() {
    this.images = [];
    this.readers = [];
    this.basicClean();
  }

}
