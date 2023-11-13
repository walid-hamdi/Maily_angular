import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    return this.http.get<{
      id: string;
      subject: string;
      text: string;
      to: string;
      from: string;
      html: string;
    }>(`${this.url}/emails/${id}`);
  }
}
