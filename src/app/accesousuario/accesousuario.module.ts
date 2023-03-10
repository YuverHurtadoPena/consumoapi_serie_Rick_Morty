import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccesousuarioRoutingModule } from './accesousuario-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    LoginComponent,
    FormComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AccesousuarioRoutingModule
  ],
  exports:[
  ]
})
export class AccesousuarioModule { }
