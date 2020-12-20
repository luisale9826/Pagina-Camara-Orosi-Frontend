import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Company } from 'src/app/models/company';
import { LoginService } from 'src/app/services/login.service';
import { EliminarCompanyDialogComponent } from '../../management/eliminar-company-dialog/eliminar-company-dialog.component';
import { InsertarCompanyDialogComponent } from '../../management/insertar-company-dialog/insertar-company-dialog.component';
import { UploadFileCompanyComponent } from '../../management/upload-file-company/upload-file-company.component';
import { VerImagenCompanyDialogComponent } from '../ver-imagen-company-dialog/ver-imagen-company-dialog.component';

@Component({
  selector: 'app-ver-company-dialog',
  templateUrl: './ver-company-dialog.component.html',
  styleUrls: ['./ver-company-dialog.component.css'],
})
export class VerCompanyDialogComponent implements OnInit {
  public status: boolean;
  public company: Company;
  constructor(
    public dialogRef: MatDialogRef<VerCompanyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private loginService: LoginService,
    private dialog: MatDialog
  ) {
    this.status = this.loginService.isAuthenticated();
    this.company = this.data.company;
  }

  ngOnInit(): void {}

  modificarCompany(company: Company): void {
    this.dialogRef.close();
    this.dialog.open(InsertarCompanyDialogComponent, {
      data: { company, titulo: `Editar compañía ${this.company.companyName}` },
    });
  }
  eliminarCompany(company: Company): void {
    this.dialog.open(EliminarCompanyDialogComponent, {
      data: company,
    });
  }

  editarImagen(company: Company): void {
    this.dialog.open(UploadFileCompanyComponent, {
      data: {
        titulo: `Editar Image de ${company.companyName}`,
        companyId: company.companyId,
        companyName: company.companyName
      },
    });
  }

  abrirImagen(): void {
    this.dialog.open(VerImagenCompanyDialogComponent, {
      data: this.company,
    });
  }
}
