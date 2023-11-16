import { Component } from '@angular/core';
import { Email } from '../email';
import { AuthService } from 'src/app/auth/auth.service';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css'],
})
export class EmailCreateComponent {
  showModal = false;
  email: Email;

  constructor(
    private emailService: EmailService,
    private authService: AuthService
  ) {
    this.email = {
      id: '',
      to: '',
      from: `${this.authService.username}@angular-email.com`,
      html: '',
      subject: '',
      text: '',
    };
  }

  onSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
