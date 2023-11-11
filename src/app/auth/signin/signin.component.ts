import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  loading = false;
  authFrom = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (!this.authFrom.valid) return;

    this.loading = true;
    this.authService
      .signin(this.authFrom.value as { username: string; password: string })
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/inbox');
          this.loading = false;
        },
        error: (err) => {
          this.loading = false;
          if (err.error.username || err.error.password)
            this.authFrom.setErrors({
              credentials: true,
            });
        },
      });
  }
}
