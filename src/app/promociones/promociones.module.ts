import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromocionesComponent } from './promociones.component';
import { AngularMaterialModule } from '../angular-material.module';


@NgModule({
  declarations: [PromocionesComponent],
  imports: [CommonModule, AngularMaterialModule, ],
  exports: [PromocionesComponent],
})
export class PromocionesModule {}
