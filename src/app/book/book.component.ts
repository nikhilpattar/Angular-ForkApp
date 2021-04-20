import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { CartService } from '../cart.service';
import { Cart } from '../cart/Cart';
import { LoginService } from '../login.service';
import { Book } from './Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[] = [];
  tempBooks: Book[] = [];
  authenticated: Boolean = false;

  constructor(private bookService: BookService,
    private cartService: CartService,
    private loginService: LoginService,
    private route: Router) { }

  ngOnInit(): void {
    this.authenticated = this.loginService.isAuthenticated;
    if(!this.authenticated){
      this.route.navigate(['/login']);
    }
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooksFromServices().subscribe((res: Book[]) => {
      this.books = res;
      this.tempBooks = res;
    })
  }

  addBookToCart(book: Book): void {
    let available = false;

    this.tempBooks.forEach((element: Book) => {
      if (element.id === book.id) {
        available = true;
      }
    })

    if (available) {
      window.alert("Item is already available in cart");
    } else {

      let cart = new Cart();
      cart.username = this.loginService.user.username;
      cart.name = book.name;
      cart.price = book.price;
      cart.description = book.description;

      this.cartService.addCartItemToServices(cart);
    }
  }
}
