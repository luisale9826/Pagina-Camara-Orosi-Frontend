import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { ImagesControl } from 'src/app/shared/images-control';
import { EditImageDialogComponent } from 'src/app/web-config/edit-image-dialog/edit-image-dialog.component';

@Component({
  selector: 'app-tour-header',
  templateUrl: './tour-header.component.html',
  styleUrls: ['./tour-header.component.css']
})
export class TourHeaderComponent implements OnInit {
  status: boolean;

  constructor(
    private loginService: LoginService,
    private dialog: MatDialog,
    private ic: ImagesControl
  ) {
    this.status = this.loginService.isAuthenticated();
    this.ic.tourImage();
  }

  ngOnInit(): void {}

  editImage(name: string): void {
    this.dialog.open(EditImageDialogComponent, {
      data: {
        name,
      },
    });
  }

  getImage(path: string): string {
    return this.ic.getImage(path);
  }
}
