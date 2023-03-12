import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { Favoritointerfaz } from '../dto/favoritointerfaz';
import { FavoritoService } from '../favorito.service';
import { ListadoepisodiosComponent } from '../listadoepisodios/listadoepisodios.component';
import { Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-form-favorito',
  templateUrl: './form-favorito.component.html',
  styleUrls: ['./form-favorito.component.css']
})
export class FormFavoritoComponent implements OnInit {

  private cookieService:CookieService;
  private servicio:FavoritoService;

  constructor(
    public dialogRef: MatDialogRef<ListadoepisodiosComponent >,
    @Inject(MAT_DIALOG_DATA) public data: any,cookieService:CookieService, servicio:FavoritoService
  ) {
    this.cookieService = cookieService;
    this.servicio = servicio;
  }

  ngOnInit(): void {

    this.postGuardar();
  }
  onClickNo(){

  }
  postGuardar(){
    this.cookieService.delete("token");
    this.cookieService.delete("usuario");

    const dato:Favoritointerfaz={
      id_caracter: 3,
      observaciones: "solo es una prueba",
      usuario: this.cookieService.get("usuario"),

    }
    this.servicio.guardarEpisodioFavorito(dato,this.cookieService.get("token")).subscribe({
      next:(data)=>{
        console.log("datajaj"+data)
      },
      error:(err)=>{
        console.log(err)
      }
    });


  }

}
