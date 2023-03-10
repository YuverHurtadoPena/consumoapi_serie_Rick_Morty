import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: "",
    children:[
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "registrarUsuario",
        component: FormComponent,
      },
      {
        path: "**",
        redirectTo: "login",
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccesousuarioRoutingModule { }
