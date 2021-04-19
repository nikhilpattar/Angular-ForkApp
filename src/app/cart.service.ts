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
    this.http.post('http://localhost:8700/cart', cart);
  }

  getCartItemsFromServices(username: String): Observable<any>{
    return this.http.get(`http://localhost:8700/cart/${username}`);
  }

  deleteCartItemFromServices(id: String): void{
    this.http.delete(`http://localhost:8700/cart/${id}`);
  }
}
