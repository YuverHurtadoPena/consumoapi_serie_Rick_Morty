import { Token } from './../dto/token';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/util/custom-validators';
import { AccesousuarioService } from '../accesousuario.service';
import { Login } from '../dto/login';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private cookieService:CookieService;
  token:Token | undefined;

  private router: Router;
  private accesousuarioService:AccesousuarioService;

  /*inicio variables para validaciones en el html */
  massaje="El campo es requerido";
  submittedForm = true;
  /*inicio variables para validaciones en el html */



  form = new FormGroup({
    email: new FormControl('', [Validators.required,CustomValidators.spaceValidator,CustomValidators.ValidatorEmail]),
    clave: new FormControl('', [Validators.required,Validators.maxLength(8),CustomValidators.spaceValidator]),

  });



  constructor( accesousuarioService:AccesousuarioService,router: Router, cookieService:CookieService ) {
    this.accesousuarioService = accesousuarioService;
    this.router = router;
    this.cookieService = cookieService;

  }

  ngOnInit(): void {

  }

  onLogin(){
    this.submittedForm =  false;
    if(!this.form.invalid){
      const dato:Login = {
        password: this.form.controls['clave'].value.trim(),
        companyId:"10",
        username: this.form.controls['email'].value.trim(),
        desdeMs:true
      };
      this.accesousuarioService.autenticacion(dato).subscribe({
        next: (data:Token) =>{
          this.token =  data;
          this.cookieService.set("token",this.token.token);

          this.cookieService.set("islogin","Si");
          this.cookieService.set("usuario",this.form.controls['email'].value.trim());
          this.router.navigate(["lista/episodios"]);




        },
        error: () => {
          alert("ocurrio un error ")
        },

      })
    }
  }

}
