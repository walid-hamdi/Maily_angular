import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator } from '@angular/forms';
import { catchError, map, of } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class UniqueUsername implements AsyncValidator {
  constructor(private auth: AuthService) {}

  validate = (control: AbstractControl<any, any>) => {
    const { value } = control;

    return this.auth.usernameAvailable(value).pipe(
      map((value) => {
        if (value.available) {
          return null;
        }
        return value;
      }),
      catchError((err) => {
        if (err.error.username) {
          return of({ noUniqueUsername: true });
        } else {
          return of({ noConnection: true });
        }
      })
    );
  };
}
