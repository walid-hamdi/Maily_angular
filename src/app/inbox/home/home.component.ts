import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  emails: { id: string; subject: string; from: string }[] = [];

  constructor(private emailService: EmailService) {
    this.emailService.getEmails().subscribe((response) => {
      this.emails = response;
    });
  }
}
