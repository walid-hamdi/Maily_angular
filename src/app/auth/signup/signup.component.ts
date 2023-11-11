import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordMatch } from '../validators/password-match';
import { UniqueUsername } from '../validators/unique-username';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  loading = false;
  authFrom = new FormGroup(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]+$/),
        ],
        [this.uniqueUsername.validate]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    },
    [this.passwordMath.validate]
  );

  constructor(
    private passwordMath: PasswordMatch,
    private uniqueUsername: UniqueUsername,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    if (!this.authFrom.valid) return;

    this.loading = true;
    this.authService
      .signup(
        this.authFrom.value as {
          username: string;
          password: string;
          passwordConfirmation: string;
        }
      )
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/inbox');
          this.loading = false;
        },
        error: (err) => {
          this.loading = false;
          if (err.status)
            this.authFrom.setErrors({
              noConnection: true,
            });
          else
            this.authFrom.setErrors({
              unknown: true,
            });
        },
      });
  }
}
