import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
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
  users: MatTableDataSource<User>;
  displayedColumns = ['userName', 'action'];

  constructor(
    private userService: UserService,
    public loginService: LoginService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userService.getUsers
      .then((data) => {
        data = data.filter((user) => user.userName !== this.loginService.user);
        this.users = new MatTableDataSource(data);
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
