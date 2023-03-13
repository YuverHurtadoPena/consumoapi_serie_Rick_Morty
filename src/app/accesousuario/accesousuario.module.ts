import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccesousuarioRoutingModule } from './accesousuario-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormComponent } from './form/form.component';

import {MatDialogModule} from '@angular/material/dialog';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    LoginComponent,
    FormComponent,
    SpinnerComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AccesousuarioRoutingModule,
    MatDialogModule
  ],
  exports:[
  ]
})
export class AccesousuarioModule { }
