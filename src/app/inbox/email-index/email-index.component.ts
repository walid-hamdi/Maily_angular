import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css'],
})
export class EmailIndexComponent implements OnInit {
  constructor(private emailService: EmailService) {}

  emails: { id: string; subject: string; from: string }[] = [];

  ngOnInit(): void {
    this.emailService.getEmails().subscribe((response) => {
      this.emails = [
        { id: '1', subject: 'Meeting Recap', from: 'john.doe@example.com' },
        { id: '2', subject: 'Project Update', from: 'alice.smith@example.com' },
        { id: '3', subject: 'Vacation Plans', from: 'bob.jones@example.com' },
        {
          id: '4',
          subject: 'Feedback Request',
          from: 'emily.wang@example.com',
        },
        { id: '5', subject: 'Product Launch', from: 'david.white@example.com' },
        { id: '6', subject: 'Team Building', from: 'susan.green@example.com' },
        {
          id: '7',
          subject: 'Training Session',
          from: 'michael.brown@example.com',
        },
        {
          id: '8',
          subject: 'Customer Inquiry',
          from: 'lisa.jackson@example.com',
        },
      ];
    });
  }
}
