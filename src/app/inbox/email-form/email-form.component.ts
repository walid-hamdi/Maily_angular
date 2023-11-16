import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Email } from '../email';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent implements OnInit {
  @Input() email?: Email;
  emailForm?: FormGroup;
  @Output() submitting = new EventEmitter();

  ngOnInit(): void {
    this.emailForm = new FormGroup({
      to: new FormControl(this.email?.to, [
        Validators.required,
        Validators.email,
      ]),
      from: new FormControl({ value: this.email?.from, disabled: true }),
      subject: new FormControl(this.email?.subject, [Validators.required]),
      text: new FormControl(this.email?.text, [Validators.required]),
    });
  }

  submit() {
    if (!this.emailForm?.valid) return;

    const email: Email = this.emailForm?.getRawValue();
    this.submitting.emit(email);
  }
}
