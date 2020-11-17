import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import{Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UsercheckGuard implements CanActivate {
   constructor(private router: Router)
   {
      
   }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (sessionStorage.getItem('login')) {
      return true;
    }
    else {
       this.router.navigate(['/login']);
      return false;
    }
  }
}
