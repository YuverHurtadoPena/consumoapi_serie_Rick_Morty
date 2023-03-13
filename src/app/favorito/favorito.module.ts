import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritoRoutingModule } from './favorito-routing.module';
import { ListadoepisodiosComponent } from './listadoepisodios/listadoepisodios.component';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule }   from "@angular/material/button";

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { FormFavoritoComponent } from './form-favorito/form-favorito.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';
import { ListaFavoritosComponent } from './lista-favoritos/lista-favoritos.component';
import { GuardarFavoritoMensajeComponent } from './mesajes/guardar-favorito-mensaje/guardar-favorito-mensaje.component';

@NgModule({
  declarations: [
    ListadoepisodiosComponent,
    HeaderComponent,
    FormFavoritoComponent,
    ListaPersonajesComponent,
    ListaFavoritosComponent,
    GuardarFavoritoMensajeComponent,

  ],
  imports: [
    CommonModule,

    FavoritoRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule, FormsModule, ReactiveFormsModule
  ],
  exports:[ GuardarFavoritoMensajeComponent]
})
export class FavoritoModule { }
