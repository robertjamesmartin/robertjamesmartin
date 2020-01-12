import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PoetryService {
  userId: string;

  constructor(
    private afs: AngularFirestore
  ) { }

  getPoem(poemKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('poems').doc(poemKey).snapshotChanges();
  }

  updatePoem(poemKey, value) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('poems').doc(poemKey).set(value);
  }

  deletePoem(poemKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('poems').doc(poemKey).delete();
  }

  getPoems() {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('poems').snapshotChanges();
  }

  createPoem(value) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('poems').add({
      poemTitle: value.poemTitle,
      poemGenre: value.poemGenre,
      poemYearWritten: value.poemYearWritten,
      description: value.description
    })
  }
}
