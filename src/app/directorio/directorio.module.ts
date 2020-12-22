import { NgModule } from '@angular/core';
import { DirectorioRoutingModule } from './directorio-routing.module';
import { InsertarCompanyDialogComponent } from './management/insertar-company-dialog/insertar-company-dialog.component';
import { EliminarCompanyDialogComponent } from './management/eliminar-company-dialog/eliminar-company-dialog.component';
import { AngularMaterialModule } from '../angular-material.module';
import { VerCompanyDialogComponent } from './visitante/ver-company-dialog/ver-company-dialog.component';
import { VerImagenCompanyDialogComponent } from './visitante/ver-imagen-company-dialog/ver-imagen-company-dialog.component';
import { DirectorioComponent } from './directorio.component';

@NgModule({
  declarations: [
    InsertarCompanyDialogComponent,
    EliminarCompanyDialogComponent,
    VerCompanyDialogComponent,
    VerImagenCompanyDialogComponent,
    DirectorioComponent,
  ],
  imports: [DirectorioRoutingModule, AngularMaterialModule],
  exports: [DirectorioRoutingModule],
})
export class DirectorioModule {}
