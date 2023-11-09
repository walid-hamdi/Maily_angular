import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() label?: string;
  @Input() control?: any;

  showErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}