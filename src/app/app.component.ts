import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// implements OnInit
export class AppComponent {
  signedIn: BehaviorSubject<boolean | null>;

  constructor(private authService: AuthService) {
    this.signedIn = this.authService.signedIn$;
  }

  ngOnInit(): void {
    this.authService.checkAuth().subscribe(() => {});
  }
}
