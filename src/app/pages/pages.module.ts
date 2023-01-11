import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    HomeComponent,
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    RouterModule
  ]
})
export class PagesModule { }
