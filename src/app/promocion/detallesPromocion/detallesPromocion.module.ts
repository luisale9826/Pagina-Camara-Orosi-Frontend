import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesPromocionRoutingModule } from './detallesPromocion-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetallesPromocionComponent } from './detallesPromocion.component';

@NgModule({
  declarations: [DetallesPromocionComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DetallesPromocionRoutingModule],
  exports: [DetallesPromocionRoutingModule],
})
export class DetallesPromocionModule {}

