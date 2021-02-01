import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleryComponent } from './galery/galery.component';
import { TourComponent } from './tour.component';

const routes: Routes = [
  { path: 'tour', component: TourComponent },
  { path: 'tour/galery', component: GaleryComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourRoutingModule { }
