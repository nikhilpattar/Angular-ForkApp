import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  addCartItemToServices(cart : Cart): void{
    console.log(cart);
    this.http.post<Cart>('http://localhost:8700/cart', cart);
  }

  getCartItemsFromServices(username: string): Observable<any>{
    return this.http.get(`http://localhost:8700/cart/${username}`);
  }

  deleteCartItemFromServices(id: string): void{
    this.http.delete(`http://localhost:8700/cart/${id}`);
  }
}
