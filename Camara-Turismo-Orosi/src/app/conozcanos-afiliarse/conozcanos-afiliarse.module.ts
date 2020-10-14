import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { ConozcanosAfiliarseRoutingModule } from './conozcanos-afiliarse-routing.module';
import { ConozcanosAfiliarseComponent } from './conozcanos-afiliarse.component';

@NgModule({
  declarations: [ConozcanosAfiliarseComponent],
  imports: [
    CommonModule,
    ConozcanosAfiliarseRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  exports: [],
})
export class ConozcanosAfiliarseModule {}
