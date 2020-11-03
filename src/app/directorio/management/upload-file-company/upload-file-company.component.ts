import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DirectorioService } from 'src/app/services/directorio.service';
import { isImage } from 'src/app/shared/custome-validations';

@Component({
  selector: 'app-upload-file-company',
  templateUrl: './upload-file-company.component.html',
  styleUrls: ['./upload-file-company.component.css'],
})
export class UploadFileCompanyComponent implements OnInit {

  public companyForm: FormGroup;
  public companyClasifications;
  public uploadedFileName: string;
  public dropzoneActive = false;

  constructor(
    public dialogRef: MatDialogRef<UploadFileCompanyComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data,
    private directorioService: DirectorioService
  ) {
    this.uploadedFileName = '';
  }

  ngOnInit(): void {
    this.companyForm = this.formBuilder.group({
      companyLogo: ['', isImage],
    });
  }

  onFileUploaded(event): void {
    this.uploadedFileName = event.target.files[0].name;
    this.companyForm.get('companyLogo').setValue(event.target.files[0]);
  }

  dropzoneState($event: boolean): void {
    this.dropzoneActive = $event;
  }

  handleDrop(file: File): void {
    this.uploadedFileName = file.name;
    this.companyForm.get('companyLogo').setValue(file);
  }

  onSubmit(): void {
    if (this.companyForm.valid) {
      this.directorioService
        .uploadFile(this.data.companyId, this.companyForm.controls.companyLogo.value)
        .then((data) => this.dialogRef.close())
        .catch((err) => console.log(err));
    }
  }
}
