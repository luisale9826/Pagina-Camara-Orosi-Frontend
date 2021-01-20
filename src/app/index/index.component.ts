import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Promocion } from '../models/Promocion';
import { LoginService } from '../services/login.service';
import { PromocionService } from '../services/promocion.service';
import { WebConfigService } from '../services/web-config.service';
import { ImagesControl } from '../shared/images-control';
import { TextControl } from '../shared/text-control';
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
    private wcs: WebConfigService,
    private ic: ImagesControl,
    private tc: TextControl
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
    this.ic.loadHeaderImages();
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
        text: this.visitOrosi,
      },
    });
  }

  getImage(path: string): string {
    return this.ic.getImage(path);
  }

  loadText(): void {
    const text = 'visitOrosi';
    this.visitOrosi = this.tc.getText(text);
  }
}
