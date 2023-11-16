import { Component } from '@angular/core';
import { Email } from '../email';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-email-replay',
  templateUrl: './email-replay.component.html',
  styleUrls: ['./email-replay.component.css'],
})
export class EmailReplayComponent {
  showModal = false;
  email?: Email;

  onSubmit(email: Email) {}
}
