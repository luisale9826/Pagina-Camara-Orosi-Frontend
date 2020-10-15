import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectorioComponent } from './directorio.component';

export const routes: Routes = [
  {path: 'directorio', component: DirectorioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorioRoutingModule { }
