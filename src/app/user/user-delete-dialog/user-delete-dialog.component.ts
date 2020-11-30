import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-delete-dialog',
  templateUrl: './user-delete-dialog.component.html',
  styleUrls: ['./user-delete-dialog.component.css'],
})
export class UserDeleteDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private userService: UserService,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<UserDeleteDialogComponent>,
    private router: Router
  ) {}

  ngOnInit(): void {}

  eliminarUsuario(): void {
    this.userService
      .eliminarUser(this.data.userId)
      .then((data) => {
        this.dialogRef.close(this.data);
        this.router.navigate(['/usuarios']).then(() => {
          location.reload();
          this.toastr.success(
            `Se ha eliminado el usuario ${this.data.userName}`,
            'Eliminado!!!'
          );
        });
      })
      .catch((err) => {
        console.log(err);
        this.toastr.error(
          'Se produjo un error al Eliminar el usuario',
          'Error'
        );
      });
  }
}
