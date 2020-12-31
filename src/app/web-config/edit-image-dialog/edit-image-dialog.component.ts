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
import { isImage } from 'src/app/shared/custome-validations';

@Component({
  selector: 'app-edit-image-dialog',
  templateUrl: './edit-image-dialog.component.html',
  styleUrls: ['./edit-image-dialog.component.css'],
})
export class EditImageDialogComponent implements OnInit {
  public imageForm: FormGroup;
  progress: number;
  imageScr: string;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private webConfig: WebConfigService,
    private toastr: ToastrService
  ) {
    this.imageForm = this.formBuilder.group({
      image: new FormControl('', [Validators.required, isImage]),
    });
  }

  ngOnInit(): void {}

  /**
   * on file drop handler
   */
  onFileDropped($event): void {
    this.prepareFilesList($event);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  private prepareFilesList(files): void {
    const file = files[0];
    this.previewFile(file);
  }

  private previewFile(file): void {
    const render = new FileReader();
    render.readAsDataURL(file);
    this.progress = 0;
    render.onprogress = (data: ProgressEvent) => {
      if (data.lengthComputable) {
        const imageLoaded = ((data.loaded / data.total) * 100) as number;
        this.progress = imageLoaded;
      }
    };

    render.onload = () => {
      this.progress = 100;
      this.imageScr = render.result as string;
      this.imageForm.get('image').setValue(file);
    };
  }

  onFileUpload(event): void {
    const file = event.target.files[0];
    this.previewFile(file);
  }

  onSubmit(): void {
    if (this.imageForm.valid) {
      this.webConfig
        .updateImage(this.data.name, this.imageForm.get('image').value)
        .then(() => {
          this.toastr.success(`Se ha editado la image`, 'Modificado!!!');
          this.webConfig.deleteLocalStorageItem(this.data.name);
          setTimeout(() => {
            this.dialogRef.close();
            location.reload();
          });
        })
        .catch((err) => {
          this.toastr.error(
            `Ha ocurrido un error editado la image`,
            'Error!!!'
          );
          console.log(err);
        });
    }
  }
}
