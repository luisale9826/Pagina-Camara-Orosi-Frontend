import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromocionComponent } from './promocion.component';

const routes: Routes = [{ path: 'promocion', component: PromocionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromocionRoutingModule {}
