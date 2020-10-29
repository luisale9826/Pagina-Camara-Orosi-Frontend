import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../services/login.service';
import { InsertarCompanyDialogComponent } from './management/insertar-company-dialog/insertar-company-dialog.component';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css'],
})
export class DirectorioComponent implements OnInit {
  status: boolean;
  constructor(
    private loginService: LoginService,
    private insertDialog: MatDialog
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
        },
      }
    );

    insertCompanyDialog.afterClosed().subscribe(data => {
      console.log(data);
    });
  }
}
