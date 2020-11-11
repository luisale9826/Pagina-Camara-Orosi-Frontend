import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArmarTourRoutingModule } from './armar-tour-routing.module';
import { ArmarTourComponent } from './armar-tour.component';

@NgModule({
  declarations: [ArmarTourComponent],
  imports: [CommonModule, ArmarTourRoutingModule],
  exports: [ArmarTourRoutingModule],
})
export class ArmarTourModule {}
