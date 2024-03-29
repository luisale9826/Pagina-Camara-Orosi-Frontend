import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DirectorioService } from 'src/app/services/directorio.service';

@Component({
  selector: 'app-eliminar-company-dialog',
  templateUrl: './eliminar-company-dialog.component.html',
  styleUrls: ['./eliminar-company-dialog.component.css'],
})
export class EliminarCompanyDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private directorioService: DirectorioService,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<EliminarCompanyDialogComponent>,
  ) {}

  ngOnInit(): void {}

  eliminarCompany(): void {
    this.directorioService
      .eliminarCompany(this.data.companyId)
      .then((data) => {
        this.toastr.success(
          `Se ha eliminado la compañía ${this.data.companyName}`,
          'Eliminado!!!'
        );
        setTimeout(() => {
          this.dialogRef.close(this.data);
          location.reload();
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        this.toastr.error(
          'Se produjo un error al Eliminar la compañía',
          'Error'
        );
      });
  }
}
