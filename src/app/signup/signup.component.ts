import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; // Import Router
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'signup-app',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [AuthService, NgModel]

})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router // Inject the Router
  ) {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: this.confirmPasswordValidator('password', 'confirmPassword')
    });
  }

  register() {
    if (this.signupForm.valid) {
      const { username, email, password } = this.signupForm.value;
      this.auth.register(username, email, password).subscribe(
        response => {
          console.log('User registered successfully', response);
          this.router.navigate(['/login']); // Redirect to login page on success
        },
        error => {
          console.error('Registration failed', error);
        }
      );
    }
  }

  confirmPasswordValidator(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ mustMatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }
}
