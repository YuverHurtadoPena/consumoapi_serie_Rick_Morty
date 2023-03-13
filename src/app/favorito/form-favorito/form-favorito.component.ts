import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { Favoritointerfaz } from '../dto/favoritointerfaz';
import { FavoritoService } from '../favorito.service';

import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ListaPersonajesComponent } from '../lista-personajes/lista-personajes.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/util/custom-validators';
import { MatDialog } from '@angular/material/dialog';
import { GuardarFavoritoMensajeComponent } from '../mesajes/guardar-favorito-mensaje/guardar-favorito-mensaje.component';

@Component({
  selector: 'app-form-favorito',
  templateUrl: './form-favorito.component.html',
  styleUrls: ['./form-favorito.component.css']
})
export class FormFavoritoComponent implements OnInit {

  private cookieService: CookieService;
  private servicio: FavoritoService;


  /*inicio variables para validaciones en el html */
  massaje = "El campo es requerido";
  submittedForm = true;
  /*inicio variables para validaciones en el html */

  form = new FormGroup({
    observacion: new FormControl('', [Validators.required, Validators.maxLength(100), CustomValidators.spaceValidator]),

  });

  constructor(
    public dialogRef: MatDialogRef<ListaPersonajesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, cookieService: CookieService, servicio: FavoritoService, public para_abrir_otro_m: MatDialog
  ) {
    this.cookieService = cookieService;
    this.servicio = servicio;
  }

  ngOnInit(): void {


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
  postGuardar() {
    this.submittedForm = false;
    if (this.form.valid){
      const dato: Favoritointerfaz = {
        id_caracter: this.data.id_person,
        observaciones: this.form.controls['observacion'].value.trim(),
        usuario: this.cookieService.get("usuario"),

      }
      this.servicio.guardarFavorito(dato, this.cookieService.get("token")).subscribe({
        next: (data) => {
          console.log(data)
          this.dialogRef.close();
          this.openDialog("si_form");
          this.dialogRef.close();
        },
        error: (err) => {
          this.openDialog("no_form");
          console.log(err)
          this.dialogRef.close();
        }
      });

    }



  }



}
