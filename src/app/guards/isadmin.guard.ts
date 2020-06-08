import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../entities/user';
import {UserService} from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class IsadminGuard implements CanActivate {

  constructor(private userService: UserService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = this.userService.currentUserDataSubject.getValue();
    let flag = false;
    user.role.forEach(rol => {
      if (rol.name === 'ADMIN') {
        flag = true;
      }
    });
    return flag;
  }

}
