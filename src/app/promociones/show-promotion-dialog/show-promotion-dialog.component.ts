import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Promocion } from 'src/app/models/promocion';
import { LoginService } from 'src/app/services/login.service';
import { DeletePromotionDialogComponent } from '../delete-promotion-dialog/delete-promotion-dialog.component';
import { InsertPromotionDialogComponent } from '../insert-promotion-dialog/insert-promotion-dialog.component';

@Component({
  selector: 'app-show-promotion-dialog',
  templateUrl: './show-promotion-dialog.component.html',
  styleUrls: ['./show-promotion-dialog.component.css'],
})
export class ShowPromotionDialogComponent implements OnInit {
  promotion: Promocion;
  status: boolean;

  constructor(
    public dialogRef: MatDialogRef<ShowPromotionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private loginService: LoginService,
    private dialog: MatDialog
  ) {
    this.status = this.loginService.isAuthenticated();
    this.promotion = this.data.promotion;
  }

  ngOnInit(): void {}

  modifyPromotion(promotion: Promocion): void {
    this.dialog
      .open(InsertPromotionDialogComponent, {
        data: {
          titulo: 'Modificar Promoción',
          promotion,
        },
      })
      .afterClosed()
      .subscribe(
        () => {
          setTimeout(() => {
            this.dialogRef.close();
            location.reload();
          }, 2000);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  deletePromotion(promotion: Promocion): void {
    this.dialog
    .open(DeletePromotionDialogComponent, {
      data: {
        promotion,
      },
    })
    .afterClosed()
    .subscribe(
      () => {
        setTimeout(() => {
          this.dialogRef.close();
          location.reload();
        }, 2000);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
