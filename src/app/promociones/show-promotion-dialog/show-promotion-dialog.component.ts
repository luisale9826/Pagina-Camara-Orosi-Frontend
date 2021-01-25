import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Promotion } from 'src/app/models/promotion';
import { LoginService } from 'src/app/services/login.service';
import { DeletePromotionDialogComponent } from '../delete-promotion-dialog/delete-promotion-dialog.component';
import { InsertPromotionDialogComponent } from '../insert-promotion-dialog/insert-promotion-dialog.component';

@Component({
  selector: 'app-show-promotion-dialog',
  templateUrl: './show-promotion-dialog.component.html',
  styleUrls: ['./show-promotion-dialog.component.css'],
})
export class ShowPromotionDialogComponent implements OnInit {
  promotion: Promotion;
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

  modifyPromotion(promotion: Promotion): void {
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

  deletePromotion(promotion: Promotion): void {
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
