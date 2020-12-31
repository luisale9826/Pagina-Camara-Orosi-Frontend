import { NgModule } from '@angular/core';
import { EditImageDialogComponent } from './edit-image-dialog/edit-image-dialog.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FileDropDirective } from '../directives/file-drop.directive';
import { EditTextDialogComponent } from './edit-text-dialog/edit-text-dialog.component';

@NgModule({
  declarations: [EditImageDialogComponent, FileDropDirective, EditTextDialogComponent],
  imports: [AngularMaterialModule],
})
export class WebConfigModule {}
