import { CanActivateFn } from '@angular/router';

export const passwordGuard: CanActivateFn = (route, state) => {
  return true;
};
