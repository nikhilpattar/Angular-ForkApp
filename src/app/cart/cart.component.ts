import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';
import { Cart } from './Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Cart[] = [];
  authenticated: Boolean = false;

  constructor(private cartService: CartService,
    private loginService: LoginService,
    private route: Router) {
  }

  ngOnInit(): void {
    this.authenticated = this.loginService.isAuthenticated;
    if(!this.authenticated){
      this.route.navigate(['/login']);
    }
    this.getCartItems(this.loginService.user.username);
  }

  getCartItems(username: string): void{
    this.cartService.getCartItemsFromServices(username).subscribe((res: Cart[]) =>{
      this.items = res;
    })
  }

  deleteItemFromCart(id: string): void{
    this.cartService.deleteCartItemFromServices(id);
    this.getCartItems(this.loginService.user.username);
  }
}
