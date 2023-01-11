import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { FormLoginComponent } from './form-login/form-login.component';



@NgModule({
  declarations: [
    FormRegistroComponent,
    FormLoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FormRegistroComponent,
    FormLoginComponent
  ]
})
export class ComponentesModule { }
