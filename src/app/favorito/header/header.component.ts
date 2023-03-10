import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private router: Router;
  private cookieService:CookieService;

  constructor(router: Router,cookieService:CookieService) {
    this.router = router;
    this.cookieService = cookieService;

  }

  ngOnInit(): void {
  }
  cerrar(){
    this.router.navigate(["acceso/login"]);
    this.cookieService.delete("islogin");
    this.cookieService.delete("token");
    this.cookieService.delete("usuario");


  }

}
