import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { CartService } from '../cart.service';
import { Cart } from '../cart/Cart';
import { Book } from './Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Array<Book> = [];

  constructor(private bookService: BookService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void{
    this.bookService.getBooksFromServices().subscribe((res: Book[]) =>{
      this.books = res;
    })
  }

  addBookToCart(book: Book): void{
    let cart = new Cart();
    cart.username = "nikhil";
    cart.name = book.name;
    cart.price = book.price;
    cart.description = book.description;
    
    this.cartService.addCartItemToServices(cart);
  }
}
