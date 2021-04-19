import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooksFromServices(): Observable<any> {
    console.log("Called")
    return this.http.get('http://localhost:8200/books');
  }
}
