import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../services/login.service';
import { EditImageDialogComponent } from '../web-config/edit-image-dialog/edit-image-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  status: boolean;
  constructor(private loginService: LoginService, private dialog: MatDialog) {
    this.status = this.loginService.isAuthenticated();
  }

  ngOnInit(): void {}

  logout(): void {
    this.loginService.logout();
    location.reload();
  }

  changeLogoCamara(name: string): void {
    this.dialog.open(EditImageDialogComponent, {
      data: {
        name,
      },
    });
  }
}
