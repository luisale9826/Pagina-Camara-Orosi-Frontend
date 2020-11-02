import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { DirectorioRoutingModule } from './directorio-routing.module';
import { InsertarCompanyDialogComponent } from './management/insertar-company-dialog/insertar-company-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { UploadFileCompanyComponent } from './management/upload-file-company/upload-file-company.component';



@NgModule({
  declarations: [InsertarCompanyDialogComponent, UploadFileCompanyComponent],
  imports: [
    CommonModule,
    DirectorioRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    RxReactiveFormsModule
  ],
  exports: [DirectorioRoutingModule],
  entryComponents: [InsertarCompanyDialogComponent],
})
export class DirectorioModule {}
