import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemeService } from '../meme.service';

@Component({
  selector: 'app-meme-list',
  standalone: true,  // Important pour les composants autonomes
  imports: [CommonModule],
  template: `
    <div class="memes-container">
      <div class="meme-card" *ngFor="let meme of memes">
        <img [src]="'assets/' + meme.imageUrl" [alt]="meme.title" class="meme-image">
        <div class="meme-content">
          <h3>{{ meme.title }}</h3>
          <div class="meme-likes">
            <button (click)="like(meme)" [disabled]="hasLiked(meme)">❤️ {{ meme.likes }}</button>
            <p *ngIf="hasLiked(meme)">Tu as déjà liké ce mème 🦭</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './meme-list.component.css'
})
export class MemeListComponent {
  memes: any[] = [];

  constructor(private memeService: MemeService) {}

  ngOnInit() {
    this.memeService.getMemes().subscribe(memes => {
      this.memes = memes;
    });
  }

  // Vérification si l'utilisateur a déjà liké ce mème
  hasLiked(meme: any): boolean {
    return localStorage.getItem(`liked-${meme.id}`) === 'true';
  }

  like(meme: any) {
    const hasLiked = this.hasLiked(meme);
    if (hasLiked) {
      alert("Tu as déjà liké ce mème 🦭");
      return;
    }

    this.memeService.likeMeme(meme.id).then(() => {
      localStorage.setItem(`liked-${meme.id}`, 'true');
    });
  }

  getImageUrl(imageUrl: string): string {
    return `assets/${imageUrl}`;
  }
}
