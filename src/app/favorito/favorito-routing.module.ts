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
