import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { response } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) { }

  login() {
    this.auth.login(this.email, this.password).subscribe(
      (response: any) => {
        console.log(response);
      }
      ,
      (error: any) => {
        console.log(error);
      }

    );
  }
}
