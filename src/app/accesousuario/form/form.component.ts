import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/util/custom-validators';
import { AccesousuarioService } from '../accesousuario.service';
import { RegistroLogin } from '../dto/registro-login';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private accesousuarioService:AccesousuarioService;
  private router: Router;

  /*inicio variables para validaciones en el html */
  massaje="El campo es requerido";
  submittedForm = true;

  /*fin variables para validaciones en el html */



  constructor( accesousuarioService:AccesousuarioService,router: Router ) {
    this.accesousuarioService = accesousuarioService;
    this.router=router;

  }

  form = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(100),CustomValidators.spaceValidator]),
    apellido: new FormControl('', [Validators.required,Validators.maxLength(100),CustomValidators.spaceValidator]),
    doctoIdent: new FormControl('', [Validators.required,Validators.maxLength(15),CustomValidators.spaceValidator]),
    email: new FormControl('', [Validators.required,CustomValidators.spaceValidator,CustomValidators.ValidatorEmail]),
    clave: new FormControl('', [Validators.required,Validators.maxLength(8),CustomValidators.spaceValidator]),


  });

  ngOnInit(): void {
  }

  guardar(){
    this.submittedForm =  false;

    if (this.form.valid){
      const dato:RegistroLogin = {

        nombre:this.form.controls['nombre'].value.trim(),
        apellido: this.form.controls['apellido'].value.trim(),
        doctoIdent: this.form.controls['doctoIdent'].value.trim(),
        email: this.form.controls['email'].value.trim(),
        clave: this.form.controls['clave'].value.trim(),
        cia: "10"
      };
      this.accesousuarioService.insertarUsuario(dato).subscribe({
        next: (data) =>{
          alert("Usuario guardado con exito")
          console.log(data)
          this.router.navigate(["login"]);
        },
        error: () => {
          alert("ocurrio un error al intentar guardar un usuario")
        },
      });

    }







    }






}
