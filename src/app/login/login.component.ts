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

  user: any = {};
  isAuthenticated: Boolean = false;

  constructor(private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
  }

  validateUser(): void{
    this.loginService.validateUser(this.user).subscribe((res: User) =>{
      this.user = res;
    })
    if(this.user !== null || this.user !== undefined){
      this.isAuthenticated = true;
    }
  }

  getRegisterComponent(): void{
    this.router.navigate(['/register']);
  }

  username = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
}
