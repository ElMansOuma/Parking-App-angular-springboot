import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { response } from 'express';
import { AuthService } from '../auth.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone:true,
  imports:[FormsModule, HttpClientModule],
  providers: [AuthService, NgModel]
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
