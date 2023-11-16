import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from './email';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}
  url = 'https://api.angular-email.com';

  getEmails() {
    return this.http.get<{ id: string; subject: string; from: string }[]>(
      `${this.url}/emails`
    );
  }

  getEmail(id: string) {
    return this.http.get<Email>(`${this.url}/emails/${id}`);
  }

  sendEmail(email: Email) {
    return this.http.post(`${this.url}/emails`, email);
  }
}
