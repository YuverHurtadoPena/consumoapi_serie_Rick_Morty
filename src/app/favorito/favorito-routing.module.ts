import { ListaFavoritosComponent } from './lista-favoritos/lista-favoritos.component';
import { FormFavoritoComponent } from './form-favorito/form-favorito.component';
import { ListadoepisodiosComponent } from './listadoepisodios/listadoepisodios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    children:[
      {
        path: "episodios",
        component:ListadoepisodiosComponent,

      },
      {
        path: "favoritos",
        component:ListaFavoritosComponent

      },
      {
        path: "**",
        redirectTo: "episodios",
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritoRoutingModule { }
