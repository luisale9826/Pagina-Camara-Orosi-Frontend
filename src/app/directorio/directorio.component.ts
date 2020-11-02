import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../services/login.service';
import { InsertarCompanyDialogComponent } from './management/insertar-company-dialog/insertar-company-dialog.component';
import { UploadFileCompanyComponent } from './management/upload-file-company/upload-file-company.component';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css'],
})
export class DirectorioComponent implements OnInit {
  status: boolean;
  constructor(
    private loginService: LoginService,
    private insertDialog: MatDialog,
    private uploadFileDialog: MatDialog
  ) {
    this.loginService.statusProvider.subscribe((status) => {
      this.status = status;
    });
  }

  ngOnInit(): void {}

  openDialogInsertCompany(): void {
    const insertCompanyDialog = this.insertDialog.open(
      InsertarCompanyDialogComponent,
      {
        data: {
          titulo: 'Añadir Compañía',
          companyId: null,
          companyName: null,
        },
      }
    );
    let uploadFile = null;
    insertCompanyDialog
      .afterClosed()
      .toPromise()
      .then((data) => {
        uploadFile = this.uploadFileDialog.open(UploadFileCompanyComponent, {
          data: {
            titulo: `Subir Imagen para compañía ${data.companyName}`,
            companyId: data.companyId,
          },
        });
      });
    if (uploadFile) {
      uploadFile.afterClosed();
    }
  }
}
