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
}
