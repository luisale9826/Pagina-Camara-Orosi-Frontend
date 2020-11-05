import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorioRoutingModule } from './directorio-routing.module';
import { InsertarCompanyDialogComponent } from './management/insertar-company-dialog/insertar-company-dialog.component';
import { UploadFileCompanyComponent } from './management/upload-file-company/upload-file-company.component';
import { FileDropDirective } from '../directives/file-drop.directive';
import { AngularMaterialModule } from '../angular-material.module';




@NgModule({
  declarations: [InsertarCompanyDialogComponent, UploadFileCompanyComponent, FileDropDirective],
  imports: [
    CommonModule,
    DirectorioRoutingModule,
    AngularMaterialModule
  ],
  exports: [DirectorioRoutingModule],
  entryComponents: [InsertarCompanyDialogComponent],
})
export class DirectorioModule {}
