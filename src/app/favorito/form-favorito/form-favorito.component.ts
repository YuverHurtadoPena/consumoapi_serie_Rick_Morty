import { Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { Favoritointerfaz } from '../dto/favoritointerfaz';
import { FavoritoService } from '../favorito.service';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-form-favorito',
  templateUrl: './form-favorito.component.html',
  styleUrls: ['./form-favorito.component.css']
})
export class FormFavoritoComponent implements OnInit {

  private cookieService:CookieService;
  private servicio:FavoritoService;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData, cookieService:CookieService, servicio:FavoritoService
  ) {
    this.cookieService = cookieService;
    this.servicio = servicio;
  }

  ngOnInit(): void {
    console.log(this.data)
  }
  onClickNo(){

  }
  postGuardar(){
    this.cookieService.delete("token");
    this.cookieService.delete("usuario");

    const dato:Favoritointerfaz={
      id_caracter: 1,
      observaciones: "solo es una prueba",
      usuario: this.cookieService.get("usuario"),

    }
    this.servicio.guardarEpisodioFavorito(dato,this.cookieService.get("token")).subscribe({
      next:(data)=>{
        console.log("data"+data)
      },
      error:(err)=>{
        console.log(err)
      }
    });


  }

}
