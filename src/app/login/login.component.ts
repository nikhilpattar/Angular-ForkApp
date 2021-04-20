import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from './User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    uId: "",
    firstName: "",
    secondName: "",
    email: "",
    username: "",
    password: ""
  };

  constructor(private route: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
  }

  validateUserCredentials(): void{
    this.loginService.validateUser(this.user).subscribe((res: User) =>{
      this.user = res;
    });
    
    if(this.user !== null || this.user !== undefined){
      this.route.navigate(['/home']);
    }
  }

  getRegisterComponent(): void{
    this.route.navigate(['/register']);
  }

  username = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]);
  password = new FormControl('', [Validators.required, Validators.minLength(5)]);
}
