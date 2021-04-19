import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../cart/Cart';
import { LaptopService } from '../laptop.service';
import { Laptop } from './Laptop';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  laptops: Laptop[] = [];
  temp: Laptop[] = [];

  constructor(private laptopService: LaptopService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.getLaptops();
  }

  getLaptops(): void{
    this.laptopService.getLaptopsFromServices().subscribe((res: Laptop[]) =>{
      this.laptops = res;
      this.temp = res;
    });
  }

  addLaptopToCart(laptop: Laptop):void{
    let available = false;

    this.temp.forEach((lap: Laptop) =>{
      if(lap.id === laptop.id){
        available = true;
      }
    })
    if(available){
      window.alert("Item is already available in cart")
    }
    let cart = new Cart();
    cart.username = "nikhil";
    cart.name = laptop.name;
    cart.price = laptop.price;
    cart.description = laptop.description;

    this.cartService.addCartItemToServices(cart);
  }
}
