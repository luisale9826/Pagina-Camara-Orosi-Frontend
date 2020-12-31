import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { WebConfigService } from 'src/app/services/web-config.service';
import { notNullOrBlank } from 'src/app/shared/custome-validations';

@Component({
  selector: 'app-edit-text-dialog',
  templateUrl: './edit-text-dialog.component.html',
  styleUrls: ['./edit-text-dialog.component.css'],
})
export class EditTextDialogComponent implements OnInit {
  public textForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditTextDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private webConfig: WebConfigService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.textForm = this.formBuilder.group({
      text: new FormControl(this.data.text, [
        notNullOrBlank,
      ]),
    });
  }

  onSubmit(): void {
    if (this.textForm.valid) {
      this.webConfig
        .editText(this.data.name, this.textForm.get('text').value)
        .then(() => {
          this.toastr.success(`Se ha editado el texto`, 'Modificado!!!');
          this.webConfig.deleteLocalStorageItem(this.data.name);
          setTimeout(() => {
            this.dialogRef.close();
            location.reload();
          });
        })
        .catch((err) => {
          this.toastr.error(
            `Ha ocurrido un error editado el texto`,
            'Error!!!'
          );
          console.log(err);
        });
    }
  }
}
