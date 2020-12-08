import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserFormDialogComponent } from './user-form-dialog/user-form-dialog.component';
import { UserDeleteDialogComponent } from './user-delete-dialog/user-delete-dialog.component';
import { AngularMaterialModule } from '../angular-material.module';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [UserComponent, UserFormDialogComponent, UserDeleteDialogComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [UserRoutingModule]
})
export class UserModule { }
