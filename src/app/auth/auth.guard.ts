import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { skipWhile, take, tap } from 'rxjs';
import { AuthService } from './auth.service';

const authenticated = (): any => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.signedIn$.pipe(
    skipWhile((val) => val === null),
    take(1),
    tap((authenticated) => {
      if (!authenticated) {
        router.navigateByUrl('/');
      }
    })
  );
};

export const authGuard: CanMatchFn = authenticated;
