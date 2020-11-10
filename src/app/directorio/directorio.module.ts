import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorioRoutingModule } from './directorio-routing.module';
import { InsertarCompanyDialogComponent } from './management/insertar-company-dialog/insertar-company-dialog.component';
import { UploadFileCompanyComponent } from './management/upload-file-company/upload-file-company.component';
import { FileDropDirective } from '../directives/file-drop.directive';
import { EliminarCompanyDialogComponent } from './management/eliminar-company-dialog/eliminar-company-dialog.component';
import { AngularMaterialModule } from '../angular-material.module';
import { VerCompanyDialogComponent } from './visitante/ver-company-dialog/ver-company-dialog.component';
import { VerImagenCompanyDialogComponent } from './visitante/ver-imagen-company-dialog/ver-imagen-company-dialog.component';

@NgModule({
  declarations: [
    InsertarCompanyDialogComponent,
    UploadFileCompanyComponent,
    FileDropDirective,
    EliminarCompanyDialogComponent,
    VerCompanyDialogComponent,
    VerImagenCompanyDialogComponent,
  ],
  imports: [DirectorioRoutingModule, AngularMaterialModule],
  exports: [DirectorioRoutingModule],
})
export class DirectorioModule {}
