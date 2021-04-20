import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart/Cart';
import { CheckoutService } from '../checkout.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutItems: Cart[] = [];
  bookTotal: number = 0;
  laptopTotal: number = 0;
  total: number = 0;
  authenticated: boolean = false;

  constructor(private loginService: LoginService,
    private route: Router,
    private checkoutService: CheckoutService) {
   }

  ngOnInit(): void {
    this.authenticated = this.loginService.isAuthenticated;
    if(!this.authenticated){
      this.route.navigate(['/login']);
    }
    this.getCheckoutItems(this.loginService.user.username);
    this.calculatePay();
  }

  getCheckoutItems(username: string): void{
    this.checkoutService.getCheckoutItemsFromService(username).subscribe((res: Cart[]) =>{
      this.checkoutItems = res;
    })
  }

  calculatePay(): void{
    this.checkoutItems.forEach((item: Cart) =>{
      if(Number.parseInt(item.id) < 2000){
        this.bookTotal += item.price;
      }else{
        this.laptopTotal += item.price;
      }
    });
    this.total = this.bookTotal + this.laptopTotal;
  }
}
