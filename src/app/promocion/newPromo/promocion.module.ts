import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromocionRoutingModule } from './promocion-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PromocionComponent } from './promocion.component';

@NgModule({
  declarations: [PromocionComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, PromocionRoutingModule],
  exports: [PromocionRoutingModule],
})
export class PromocionModule {}

