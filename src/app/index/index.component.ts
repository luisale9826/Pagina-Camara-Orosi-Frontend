import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Promocion } from '../models/Promocion';
import { LoginService } from '../services/login.service';
import { PromocionService } from '../services/promocion.service';
import { WebConfigService } from '../services/web-config.service';
import { EditImageDialogComponent } from '../web-config/edit-image-dialog/edit-image-dialog.component';
import { EditTextDialogComponent } from '../web-config/edit-text-dialog/edit-text-dialog.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  promocion: Promocion[];
  status: boolean;
  visitOrosi: string;

  constructor(
    private promocionService: PromocionService,
    private loginService: LoginService,
    private dialog: MatDialog,
    private wcs: WebConfigService
  ) {
    this.status = this.loginService.isAuthenticated();
  }

  ngOnInit(): void {
    this.promocionService
      .getPromotions()
      .then((data) => {
        this.promocion = data;
      })
      .catch((err) => console.log(err));
    this.loadText();
    this.loadImages();
  }

  editImage(name: string): void {
    this.dialog.open(EditImageDialogComponent, {
      data: {
        name,
      },
    });
  }

  editText(name: string): void {
    this.dialog.open(EditTextDialogComponent, {
      data: {
        name,
        text: this.visitOrosi
      },
    });
  }

  getImage(path: string): string {
    return this.wcs.getLocalStorageItem(path);
  }

  loadText(): void {
    const text = 'visitOrosi';
    if (this.wcs.getLocalStorageItem(text) === null) {
      this.wcs
        .getText(text)
        .then((data) => {
          this.visitOrosi = data.text;
          this.wcs.saveLocalStorageItem(text, this.visitOrosi);
        })
        .catch((err) => console.log(err));
    } else {
      this.visitOrosi = this.wcs.getLocalStorageItem(text);
    }
  }

  loadImages(): void {
    const images = ['principalHeader', 'principalCompany', 'principalFooter'];
    images.forEach((image) => {
      if (this.wcs.getLocalStorageItem(image) === null) {
        this.wcs
          .getImage(image)
          .then((data) => this.wcs.saveLocalStorageItem(image, data.url))
          .catch((err) => console.log(err));
      }
    });
  }
}
