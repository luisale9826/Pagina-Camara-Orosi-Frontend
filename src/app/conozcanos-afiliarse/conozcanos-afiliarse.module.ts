import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { ConozcanosAfiliarseRoutingModule } from './conozcanos-afiliarse-routing.module';
import { ConozcanosAfiliarseComponent } from './conozcanos-afiliarse.component';
import { EditValuesComponent } from './management/edit-values/edit-values.component';
import { EditBenefitsComponent } from './management/edit-benefits/edit-benefits.component';
import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
  declarations: [ConozcanosAfiliarseComponent, EditValuesComponent, EditBenefitsComponent],
  imports: [
    CommonModule,
    ConozcanosAfiliarseRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    AngularMaterialModule
  ],
  exports: [ConozcanosAfiliarseRoutingModule],
})
export class ConozcanosAfiliarseModule {}
