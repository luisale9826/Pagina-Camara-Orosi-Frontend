import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EliminarPromocionRoutingModule } from './eliminarPromocion-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EliminarPromocionComponent } from './eliminarPromocion.component';

@NgModule({
  declarations: [EliminarPromocionComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, EliminarPromocionRoutingModule],
  exports: [EliminarPromocionRoutingModule],
})
export class EliminarPromocionModule {}

