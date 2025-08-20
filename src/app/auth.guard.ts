import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const hasUser = !!localStorage.getItem('currentUser');
  if (hasUser) return true;
  router.navigate(['/login']);
  return false;
};
