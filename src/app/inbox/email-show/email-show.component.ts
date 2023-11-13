import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css'],
})
export class EmailShowComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private emailService: EmailService
  ) {}

  email?: {
    id: string;
    subject: string;
    text: string;
    to: string;
    from: string;
    html: string;
  };

  ngOnInit(): void {
    this.activeRoute.params.subscribe(({ id }) => {
      this.emailService.getEmail(id).subscribe((email) => {
        this.email = email;
      });
    });
  }
}
