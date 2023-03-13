import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/util/custom-validators';
import { AccesousuarioService } from '../accesousuario.service';
import { RegistroLogin } from '../dto/registro-login';
import { MatDialog } from '@angular/material/dialog';
import { GuardarFavoritoMensajeComponent } from 'src/app/favorito/mesajes/guardar-favorito-mensaje/guardar-favorito-mensaje.component';
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
  spinner = false;



  constructor( accesousuarioService:AccesousuarioService,router: Router,public para_abrir_otro_m: MatDialog ) {
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
    this.spinner = false;
  }

  openDialog(mensaje: string) {
    this.para_abrir_otro_m.open(GuardarFavoritoMensajeComponent, {
      data: {
        "mensaje": mensaje
      },
      width: '30%',
      height: '300px',

    });
  }

  guardar(){
    this.submittedForm =  false;

    if (this.form.valid){
      this.spinner = true;
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
          this.spinner = false;
          this.openDialog("cuenta_creada")
          console.log(data)
          this.router.navigate(["login"]);
        },
        error: (err) => {
          this.spinner = false;
          console.log(err)
          alert("el correo o el numero de docuemnto ya existen en la base de datos o el servidor esta caido.")
        },
      });

    }







    }






}
