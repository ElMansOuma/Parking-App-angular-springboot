import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'signup-app',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService]
})
export class SignupComponent {

  constructor(private auth: AuthService) { }

  register() {

  }
}