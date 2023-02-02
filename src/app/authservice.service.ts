import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): any {
    const token = sessionStorage.getItem('Token');
    if (token) {
      console.log(token);
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
