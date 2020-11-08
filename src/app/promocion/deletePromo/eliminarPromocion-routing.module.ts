import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EliminarPromocionComponent } from './eliminarPromocion.component';

const routes: Routes = [{ path: 'eliminarPromocion', component: EliminarPromocionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarPromocionRoutingModule {}
