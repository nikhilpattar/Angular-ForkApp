import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authenticated: boolean = false;

  constructor(private loginService: LoginService,
    private route: Router) {  
   }

  ngOnInit(): void {
    this.authenticated = this.loginService.isAuthenticated;
    if(!this.authenticated){
      this.route.navigate(['/login']);
    }
  }

}
