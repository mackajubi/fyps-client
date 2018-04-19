import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private api_service: ApiService,private route: Router){ }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      /*
        When the auth guard returns false, it cancels the route...
      */
      setTimeout(() =>{
        if(!this.api_service._hasToke()){
          this.route.navigate(['/'])
          return false;
        } 
      },0);   
      return true;     
  }
}
