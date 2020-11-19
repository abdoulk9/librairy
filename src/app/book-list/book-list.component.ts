import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from '../models/book.model';
import { AuthService } from '../services/auth.service';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Book[];
  booksSubcription: Subscription;

  constructor(private booksService: BooksService,
    private router: Router,
      private authServie: AuthService) { }

  ngOnInit() {
    this.booksSubcription = this.booksService.bookSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.booksService.emitBooks();
  }

  newBook() {
    this.router.navigate(['/books', 'new']);
  }

  deleteBook(book: Book) {
    this.booksService.removeBook(book);
  }

  viewBook(id: number) {
    this.router.navigate(['/books', 'view', id]);
  }
   
    lougOut(){
      this.authServie.signOut();
      this.router.navigate(['/home']);
    }

  ngOnDestroy() {
    this.booksSubcription.unsubscribe();
  }




}
