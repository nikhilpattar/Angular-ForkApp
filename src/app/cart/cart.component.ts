import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  getItems() {
    this.items = [
      {
        Name: "Atomic Haits",
        Image: "F:\\Reloaded\\Jigsaw\\ForkApp_Resources\\Books\\atomic_habits.jpg",
        Price: 568,
        Description: "Atomic Habits",
      },
      {
        Name: "Believe",
        Image: "F:\\Reloaded\\Jigsaw\\ForkApp_Resources\\Books\\believe.jpg",
        Price: 667,
        Description: "Believe",
      },
      {
        Name: "Acer",
        Image: "F:\\Reloaded\\Jigsaw\\ForkApp_Resources\\Laptops\\acer.jpg",
        Price: 55000,
        Description: "Acer",
      }, {
        Name: "HP",
        Image: "F:\\Reloaded\\Jigsaw\\ForkApp_Resources\\Books\\hp.jpg",
        Price: 66700,
        Description: "HP",
      },
      {
        Name: "One Plus 6T",
        Image: "F:\\Reloaded\\Jigsaw\\ForkApp_Resources\\Mobiles\\oneplus6t.jpg",
        Price: 34600,
        Description: "Samsung S20",
      }, {
        Name: "Samsung S20",
        Image: "F:\\Reloaded\\Jigsaw\\ForkApp_Resources\\Mobiles\\samsungs20.jpg",
        Price: 86700,
        Description: "Samsung S20",
      }];
  }

}
