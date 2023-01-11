import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { RouterLink } from '@angular/router';
import { PeruComponent } from './paises/peru/peru.component';
import { ChileComponent } from './paises/chile/chile.component';
import { UruguayComponent } from './paises/uruguay/uruguay.component';
import { BienvenidosComponent } from './bienvenidos/bienvenidos.component';




@NgModule({
  declarations: [
    FormRegistroComponent,
    FormLoginComponent,
    PeruComponent,
    ChileComponent,
    UruguayComponent,
    BienvenidosComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports:[
    FormRegistroComponent,
    FormLoginComponent,
    PeruComponent,
    ChileComponent,
    UruguayComponent,
    BienvenidosComponent
  ]
})
export class ComponentesModule { }
