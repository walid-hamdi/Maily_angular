import { Component, Input } from '@angular/core';
import { Email } from '../email';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css'],
})
export class EmailIndexComponent {
  @Input() emails: { id: string; subject: string; from: string }[] = [];
}
