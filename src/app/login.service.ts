import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './login/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  validateUser(user: User): Observable<any>{
    return this.http.post('http://localhost:8100/user', user);
  }

  addUser(user: User): void{
    this.http.post('http://localhost:8100/addUser', user);
  }
}
