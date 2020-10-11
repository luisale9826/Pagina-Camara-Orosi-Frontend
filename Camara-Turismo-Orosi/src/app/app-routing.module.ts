import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AfiliadosComponent} from './afiliados/afiliados.component';
import {DirectorioComponent} from './directorio/directorio.component';
import {ArmarTourComponent} from './armar-tour/armar-tour.component';
import {IndexComponent} from './index/index.component';


const routes: Routes = [
  {path:'afiliados', component:AfiliadosComponent},
  {path:'directorio', component:DirectorioComponent},
  {path:'armarTour', component:ArmarTourComponent},
  {path:'', component:IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
