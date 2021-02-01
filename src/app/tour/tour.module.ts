import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourRoutingModule } from './tour-routing.module';
import { TourComponent } from './tour.component';
import { AngularMaterialModule } from '../angular-material.module';
import { GaleryComponent } from './galery/galery.component';
import { TourHeaderComponent } from './tour-header/tour-header.component';
import { VerImagenDialogComponent } from './galery/ver-imagen-dialog/ver-imagen-dialog.component';


@NgModule({
  declarations: [TourComponent, GaleryComponent, TourHeaderComponent, VerImagenDialogComponent],
  imports: [
    CommonModule,
    TourRoutingModule,
    AngularMaterialModule
  ],
  exports: [TourRoutingModule],
})
export class TourModule { }
