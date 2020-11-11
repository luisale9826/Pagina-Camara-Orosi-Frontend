import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DirectorioService } from '../services/directorio.service';
import { LoginService } from '../services/login.service';
import { InsertarCompanyDialogComponent } from './management/insertar-company-dialog/insertar-company-dialog.component';
import { UploadFileCompanyComponent } from './management/upload-file-company/upload-file-company.component';
import { VerCompanyDialogComponent } from './visitante/ver-company-dialog/ver-company-dialog.component';
import { Company } from '../models/company';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css'],
})
export class DirectorioComponent implements OnInit {
  companyPhones: object;
  status: boolean;

  companies: Company[];
  constructor(
    private loginService: LoginService,
    private dialog: MatDialog,
    private directoryService: DirectorioService,
  ) {
    this.status = this.loginService.isAuthenticated();
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  openDialogInsertCompany(): void {
    const insertCompanyDialog = this.dialog.open(
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
        if (data) {
          uploadFile = this.dialog.open(UploadFileCompanyComponent, {
            data: {
              titulo: `Subir Imagen para compañía ${data.companyName}`,
              companyId: data.companyId,
            },
          });
        }
      });
    if (uploadFile) {
      uploadFile.afterClosed();
    }
  }

  openDialogVerCompany(company: Company): void {
    this.dialog.open(VerCompanyDialogComponent, {
      height: '500px',
      width: '500px',
      data: { company },
    });
  }

  getCompanies(): any {
    this.directoryService.getCompany().then(data => {
      this.companies = data;
    }).catch(err => {});
  }
}
