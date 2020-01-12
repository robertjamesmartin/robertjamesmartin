import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {
  userId : string;

  constructor(
    private afs: AngularFirestore
  ) { }
}
