import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = localStorage.getItem('auth')
  const router = inject(Router)
  if (auth == 'true') {
    return true
  } else {
    router.navigate(['/auth/login'])
  }
  return false;
};
