import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidosComponent } from './componentes/bienvenidos/bienvenidos.component';
import { ChileComponent } from './componentes/paises/chile/chile.component';
import { PeruComponent } from './componentes/paises/peru/peru.component';
import { UruguayComponent } from './componentes/paises/uruguay/uruguay.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path:"", component:RegistroComponent},
  {path:"login", component:LoginComponent},
  {path:"home", component:HomeComponent,
  children:[
      {path:"", component:BienvenidosComponent},
      {path:"peru", component:PeruComponent},
      {path:"chile", component:ChileComponent},
      {path:"uruguay", component:UruguayComponent},
  ]
},
  
  {path:"**", pathMatch:"full" , redirectTo:""}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
