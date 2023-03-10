import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './util/guard/guard.guard';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "acceso",
  },
  {
    path: "acceso",
    loadChildren: () =>
      import("./accesousuario/accesousuario.module").then(
        (m) => m.AccesousuarioModule
      ),
  },
  {
    path: "lista",
    loadChildren: () =>
      import("./favorito/favorito.module").then(
        (m) => m.FavoritoModule
      ),
      canActivate:[GuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
