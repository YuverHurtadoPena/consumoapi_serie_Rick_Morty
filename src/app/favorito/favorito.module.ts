import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritoRoutingModule } from './favorito-routing.module';
import { ListadoepisodiosComponent } from './listadoepisodios/listadoepisodios.component';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule }   from "@angular/material/button";

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';

import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    ListadoepisodiosComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,

    FavoritoRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class FavoritoModule { }
