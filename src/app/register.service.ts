import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './login/User';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  addUserToService(user: User): void{
    this.http.post<User>('http://localhost:8100/addUser', user);
  }
}
