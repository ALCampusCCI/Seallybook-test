import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, updateDoc, increment } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Meme {
  id: string;
  title: string;
  imageUrl: string;
  likes: number;
}

@Injectable({
  providedIn: 'root'
})
export class MemeService {
  constructor(private firestore: Firestore) {}

  getMemes(): Observable<Meme[]> {
    const memesRef = collection(this.firestore, 'memes');
    return collectionData(memesRef, { idField: 'id' }) as Observable<Meme[]>;
  }

  async likeMeme(id: string): Promise<void> {
    const memeRef = doc(this.firestore, `memes/${id}`);
    await updateDoc(memeRef, {
      likes: increment(1)
    });
  }
}
