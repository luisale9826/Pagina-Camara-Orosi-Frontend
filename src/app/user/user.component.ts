import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { UserDeleteDialogComponent } from './user-delete-dialog/user-delete-dialog.component';
import { UserFormDialogComponent } from './user-form-dialog/user-form-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: User[];

  constructor(
    private userService: UserService,
    public loginService: LoginService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userService.getUsers
      .then((data) => {
        this.users = data;
      })
      .catch((error) => console.log(error));
  }

  insertarUsuario(): void {
    this.dialog.open(UserFormDialogComponent, {
      data: { titulo: 'Insertar' },
    });
  }

  modificarUsuario(user: User): void {
    this.dialog.open(UserFormDialogComponent, {
      data: { titulo: 'Modificar', user },
    });
  }

  eliminarUsuario(user: User): void {
    this.dialog.open(UserDeleteDialogComponent, {
      data: user,
    });
  }
}
