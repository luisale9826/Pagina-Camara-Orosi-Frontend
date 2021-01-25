import { NgModule } from '@angular/core';
import { PromocionesComponent } from './promociones.component';
import { AngularMaterialModule } from '../angular-material.module';
import { PromocionRoutingModule } from './promocion-routing.module';
import { ShowPromotionDialogComponent } from './show-promotion-dialog/show-promotion-dialog.component';
import { InsertPromotionDialogComponent } from './insert-promotion-dialog/insert-promotion-dialog.component';
import { DeletePromotionDialogComponent } from './delete-promotion-dialog/delete-promotion-dialog.component';

@NgModule({
  declarations: [
    PromocionesComponent,
    ShowPromotionDialogComponent,
    InsertPromotionDialogComponent,
    DeletePromotionDialogComponent,
  ],
  imports: [PromocionRoutingModule, AngularMaterialModule],
  exports: [PromocionRoutingModule],
})
export class PromocionesModule {}
