import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'signup-app',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports:[HttpClientModule],
  providers: [AuthService]
})
export class SignupComponent {

  constructor(private auth: AuthService) { }

  register() {

  }
}