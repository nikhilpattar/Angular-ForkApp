import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: any;

  constructor() { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.books = [{
      id: 101,
      name: "Atomic Habits",
      image: "F:\\Reloaded\\Jigsaw\\ForkApp_Resources\\Books\\atomic_habits.jpg",
      price: 568,
      description: "Atomic Habits",
    }, {
      id: 102,
      name: "Believe",
      image: "F:\\Reloaded\\Jigsaw\\ForkApp_Resources\\Books\\believe.jpg",
      price: 667,
      description: "Believe",
    }];
  }
}
