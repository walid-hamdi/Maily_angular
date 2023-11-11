import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://api.angular-email.com/auth';
  signedIn$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<{ available: boolean }>(`${this.url}/username`, {
      username,
    });
  }

  signup(credentials: {
    username: string;
    password: string;
    passwordConfirmation: string;
  }) {
    return this.http
      .post<{ username: boolean }>(`${this.url}/signup`, credentials)
      .pipe(
        tap(() => {
          this.signedIn$.next(true);
        })
      );
  }

  checkAuth() {
    return this.http
      .get<{ authenticated: boolean; username: string }>(`${this.url}/signedin`)
      .pipe(
        tap(({ authenticated }) => {
          this.signedIn$.next(authenticated);
        })
      );
  }

  signout() {
    return this.http.post(`${this.url}/signout`, {}).pipe(
      tap(() => {
        this.signedIn$.next(false);
      })
    );
  }
}
