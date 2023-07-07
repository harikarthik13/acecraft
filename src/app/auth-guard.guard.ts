import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/services/user.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isAuthenticated: boolean = false;
  
  constructor(private authService: UserService, private router: Router) {}

  canActivate():

    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    var isAuth = this.authService.authSubject.subscribe((data) => {
      console.log('next subscribed value: ' + data);
      this.isAuthenticated = data; 
    });

    if (this.isAuthenticated == false) {
      console.log('next : ' + this.isAuthenticated);
      this.router.navigate(['/sign_in']);
      return false;
    } else {
      console.log('subscribed value:' + this.isAuthenticated);
      return true;
    }
  }
}
