import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from './Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Cart[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.getCartItems("nikhil");
  }

  getCartItems(username: String): void{
    this.cartService.getCartItemsFromServices(username).subscribe((res: Cart[]) =>{
      this.items = res;
    })
  }

  deleteItemFromCart(id: String): void{
    this.cartService.deleteCartItemFromServices(id);
    this.getCartItems("nikhil");
  }
}
