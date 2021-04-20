import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userDetails : any = {};

  constructor(private route: Router,
    private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.pattern('@gmail*')]);
  username = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  register(): void{
    this.registerService.addUserToService(this.userDetails);
    this.route.navigate(['/login']);
  }
}
