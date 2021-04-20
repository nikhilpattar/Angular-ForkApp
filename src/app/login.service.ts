import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './login/User';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User = {
    uId: "",
    firstName: "",
    secondName: "",
    email: "",
    username: "",
    password: ""
  };

  constructor(private http: HttpClient) { }

  get isAuthenticated(){
    return this.user.uId !== "";
  }

  validateUser(user: User): Observable<User>{
    return this.http.post<User>('http://localhost:8100/user', user)
    .pipe(tap((res: User) => this.user = res));
  }

  addUser(user: User): void{
    this.http.post('http://localhost:8100/addUser', user);
  }
}
