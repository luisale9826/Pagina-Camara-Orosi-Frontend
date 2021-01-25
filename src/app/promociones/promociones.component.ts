import { Component, OnInit } from '@angular/core';
import { Promocion } from '../models/promocion';
import { PromocionService } from '../services/promocion.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ShowPromotionDialogComponent } from './show-promotion-dialog/show-promotion-dialog.component';
import { LoginService } from '../services/login.service';
import { InsertPromotionDialogComponent } from './insert-promotion-dialog/insert-promotion-dialog.component';
import { DeletePromotionDialogComponent } from './delete-promotion-dialog/delete-promotion-dialog.component';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css'],
})
export class PromocionesComponent implements OnInit {
  promotions: MatTableDataSource<Promocion>;
  status: boolean;
  displayedColumns = ['name', 'startDate', 'expirationDate', 'action'];

  constructor(
    private ps: PromocionService,
    private dialog: MatDialog,
    private loginService: LoginService
  ) {
    this.status = this.loginService.isAuthenticated();
  }

  ngOnInit(): void {
    this.loadPromotions();
  }

  loadPromotions(): void {
    this.ps
      .getPromotions()
      .then((data) => {
        this.promotions = new MatTableDataSource(data);
      })
      .catch((err) => console.log(err));
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
          this.loadPromotions();
        },
        (err) => {
          console.log(err);
        }
      );
  }

  addPromotion(): void {
    this.dialog.open(InsertPromotionDialogComponent, {
      data: {
        titulo: 'Añadir Promoción',
      },
    }).afterClosed()
    .subscribe(
      () => {
        this.loadPromotions();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  openPromotion(promotion: Promocion): void {
    this.dialog.open(ShowPromotionDialogComponent, {
      data: {
        promotion,
      },
    });
  }

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
          this.loadPromotions();
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
