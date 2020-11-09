import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import firebase from 'firebase';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  book: Book[] = [];
  bookSubject = new Subject<Book[]>();

  constructor() {
    this.getBooks();
  }

  emitBooks() {
    this.bookSubject.next(this.book);
  }

  saveBooks() {
    
    firebase.database().ref('/books').set(this.book);
    console.log('book saved');
  }

  getBooks() {
    firebase.database().ref('/books')
      .on('value', (data) => {
        this.book = data.val() ? data.val() : [];
        this.emitBooks();
      });
  }

  getSingleBook(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/books/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewBook(newBook: Book) {
    this.book.push(newBook);
    this.saveBooks();
    this.emitBooks();
  }

  removeBook(book: Book) {
    if(book.image){
      const storageRef = firebase.storage().refFromURL(book.image);
      console.log(storageRef);
      storageRef.delete().then(
        ()=>{
          console.log('Cover deleted ! ');
        },
        (error) =>{
          console.log(' Could not remove cover : ' + error);
        });
    }
    const bookIndexToRemove = this.book.findIndex(
      (bookElt) => {
        if (bookElt === book) {
          return true;
        }
      });
    this.book.splice(bookIndexToRemove, 1);
    this.saveBooks();
    this.emitBooks();
  }

  uploadImg(file: File) {
    return new Promise(
      (resolve, reject) => {
      const uniqueFileName = Date.now().toString();
      console.log(uniqueFileName);
      const upload = firebase.storage().ref()
        .child('images/' + uniqueFileName + file.name).put(file);
      upload.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
        console.log('Chargement...');
      },
        (error) => {
          console.log('Erreur de chargement !:' + error);
          reject();
        },
        () => {
          resolve(upload.snapshot.ref.getDownloadURL());
        });
    });
  }

}
