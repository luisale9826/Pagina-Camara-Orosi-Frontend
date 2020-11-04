import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesPromocionComponent } from './detallesPromocion.component';

const routes: Routes = [{ path: 'detallesPromocion', component: DetallesPromocionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesPromocionRoutingModule {}
