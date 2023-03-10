import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {CookieService} from 'ngx-cookie-service'
@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  private router: Router;
  private cookieService:CookieService;

  constructor(router: Router, cookieService:CookieService){
    this.router = router;
    this.cookieService = cookieService;
  }
  islogeado(islogin:boolean){
    if (!islogin){
      this.router.navigate(["login"]);
    }

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.cookieService.check("islogin")){
        return true;
      }else{

        this.islogeado(false);
        return false;


      }

  }

}
