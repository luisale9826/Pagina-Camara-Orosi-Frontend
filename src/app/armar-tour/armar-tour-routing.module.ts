import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArmarTourComponent } from './armar-tour.component';

export const routes: Routes = [{ path: 'armarTour', component: ArmarTourComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmarTourRoutingModule {}
