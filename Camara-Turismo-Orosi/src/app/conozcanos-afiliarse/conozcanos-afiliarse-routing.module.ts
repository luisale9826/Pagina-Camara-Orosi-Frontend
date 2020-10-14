import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConozcanosAfiliarseComponent } from './conozcanos-afiliarse.component';

const routes: Routes = [{ path: 'conozcanos', component: ConozcanosAfiliarseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConozcanosAfiliarseRoutingModule { }
