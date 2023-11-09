import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class PasswordMatch implements Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const { password, confirmPassword } = control.value;

    if (password === confirmPassword) {
      return null;
    } else {
      return { passwordsDontMatch: true };
    }
  }
}
