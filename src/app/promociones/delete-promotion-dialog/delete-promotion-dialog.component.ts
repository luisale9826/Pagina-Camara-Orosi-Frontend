import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Promocion } from 'src/app/models/promocion';
import { LoginService } from 'src/app/services/login.service';
import { PromocionService } from 'src/app/services/promocion.service';

@Component({
  selector: 'app-delete-promotion-dialog',
  templateUrl: './delete-promotion-dialog.component.html',
  styleUrls: ['./delete-promotion-dialog.component.css'],
})
export class DeletePromotionDialogComponent implements OnInit {
  promotion: Promocion;
  status: boolean;

  constructor(
    public dialogRef: MatDialogRef<DeletePromotionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private loginService: LoginService,
    private ps: PromocionService,
    private toastr: ToastrService
  ) {
    this.status = this.loginService.isAuthenticated();
    this.promotion = this.data.promotion;
  }

  ngOnInit(): void {}

  eliminar(promotion: Promocion): void {
    this.ps
      .deletePromotion(promotion.id)
      .then((data) => {
        this.toastr.success(`Se ha eliminado la promoción`, 'Eliminado!!!');
        setTimeout(() => {
          this.dialogRef.close(this.data);
          location.reload();
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        this.toastr.error(
          'Se produjo un error al Eliminar la promoción',
          'Error'
        );
      });
  }
}
