import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Error } from 'src/app/models/error';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.css'],
})
export class UserFormDialogComponent implements OnInit {
  userForm: FormGroup;
  apiErrors: Error[];
  titulo: string;
  habilitado: boolean;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UserFormDialogComponent>,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.titulo = this.data.titulo;
    if (this.data.user !== undefined) {
      this.userForm = this.formBuilder.group({
        userName: [this.data.user.userName, [Validators.required]],
        password: [null],
      });
      this.habilitado = true;
    } else {
      this.userForm = this.formBuilder.group({
        userName: [null, [Validators.required]],
        password: [null, [Validators.required, Validators.minLength(6)]],
      });
      this.habilitado = false;
    }
  }

  onSubmit(user: User): void {
    if (this.userForm.valid) {
      if (this.data.user !== undefined) {
        if (!this.habilitado) {
          user.password = this.data.user.password;
        }
        user.userId = this.data.user.userId;
        user.role = this.data.user.role;
        this.userService
          .modificarUser(user)
          .then(() => {
            this.data.userName = user.userName;
            this.dialogRef.close(this.data);
            this.router.navigate(['/usuarios']).then(() => {
              location.reload();
              this.toastr.success(
                `Se ha modificado el usuario ${user.userName}`,
                'Modificado!!!'
              );
            });
          })
          .catch((error) => {
            this.toastr.error('Se produjo un error al modificar', 'Error');
            this.apiErrors = Object.values(error.error.errors);
          });
      } else {
        this.userService
          .insertarUser(user)
          .then(() => {
            this.data.userName = user.userName;
            this.dialogRef.close(this.data);
            this.router.navigate(['/usuarios']).then(() => {
              location.reload();
              this.toastr.success(
                `Se ha insertado el usuario ${user.userName}`,
                'Insertado!!!'
              );
            });
          })
          .catch((error) => {
            this.toastr.error('Se produjo un error al insertar', 'Error');
            this.apiErrors = Object.values(error.error.errors);
          });
      } // else
    } // if
  }

  get getUserNameErrors(): Error[] {
    const errors: Error[] = [];
    if (this.apiErrors) {
      const userNameError = this.apiErrors.find(
        (error) => error.errorId === 'invalidUserName'
      );
      if (userNameError !== undefined) {
        errors.push(userNameError);
      }
    }

    if (this.userForm.get('userName').errors.required) {
      errors.push(new Error('0', 'Este campo no puede estar vacio'));
    }

    return errors;
  }

  get getPasswordErrors(): Error[] {
    const errors: Error[] = [];
    if (this.userForm.get('password').errors.minlength) {
      errors.push(
        new Error('0', 'El mínimo de caracteres para la contraseña debe ser 6')
      );
    }

    if (this.userForm.get('password').errors.required) {
      errors.push(new Error('1', 'Este campo no puede estar vacio'));
    }
    return errors;
  }

  habilitar(valor: boolean): void {
    this.habilitado = valor;
    if (!this.habilitado) {
      const formControl = this.userForm.get('password');
      formControl.setValidators([Validators.required, Validators.minLength(6)]);
      this.userForm.get('password').updateValueAndValidity();
    } else {
      this.userForm.get('password').setValidators(null);
      this.userForm.get('password').updateValueAndValidity();
    }
  }

}
