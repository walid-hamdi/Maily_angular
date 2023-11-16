import { Component, Input, OnInit } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-replay',
  templateUrl: './email-replay.component.html',
  styleUrls: ['./email-replay.component.css'],
})
export class EmailReplayComponent implements OnInit {
  showModal = false;
  @Input() email?: Email;

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    if (this.email)
      this.email = {
        ...this.email,
        to: this.email.from,
        from: this.email.to,
        subject: `Reply: ${this.email.subject}`,
        text: `\n\n\n --------- ${
          this.email?.from
        } wrote:\n>${this.email.text.replace(/\n/gi, '\n>')}`,
      };
  }

  onSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
