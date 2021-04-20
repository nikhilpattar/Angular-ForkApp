import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  getCheckoutItemsFromService(username: string): Observable<any>{
    return this.http.get(`http://localhost:8500/cart/${username}`);
  }
}
