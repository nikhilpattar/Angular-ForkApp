import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Cart } from '../cart/Cart';
import { LaptopService } from '../laptop.service';
import { LoginService } from '../login.service';
import { Laptop } from './Laptop';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  laptops: Laptop[] = [];
  tempLaptops: Laptop[] = [];
  authenticated: boolean = false;

  constructor(private laptopService: LaptopService,
    private cartService: CartService,
    private loginService: LoginService,
    private route: Router) { }

  ngOnInit(): void {
    this.getLaptops();
    this.authenticated = this.loginService.isAuthenticated;
    if(!this.authenticated){
      this.route.navigate(['/login']);
    }
  }

  getLaptops(): void {
    this.laptopService.getLaptopsFromServices().subscribe((res: Laptop[]) => {
      this.laptops = res;
      this.tempLaptops = res;
    });
  }

  addLaptopToCart(laptop: Laptop): void {
    let available = false;

    this.tempLaptops.forEach((element: Laptop) => {
      if (element.id === laptop.id) {
        available = true;
      }
    })
    if (available) {
      window.alert("Item is already available in cart")
    } else {
      let cart = new Cart();
      cart.username = this.loginService.user.username;
      cart.name = laptop.name;
      cart.price = laptop.price;
      cart.description = laptop.description;

      this.cartService.addCartItemToServices(cart);
    }
  }
}
