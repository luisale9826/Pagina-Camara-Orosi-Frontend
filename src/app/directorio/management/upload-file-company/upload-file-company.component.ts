import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  public btnText = 'Saltar';

  constructor(
    public dialogRef: MatDialogRef<UploadFileCompanyComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data,
    private directorioService: DirectorioService,
    private toastr: ToastrService,
    private router: Router
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
    if (
      this.companyForm.valid &&
      this.companyForm.get('companyLogo').value !== ''
    ) {
      if (this.data.titulo === `Editar Image de ${this.data.companyName}`) {
        this.directorioService
          .editFile(
            this.data.companyId,
            this.companyForm.controls.companyLogo.value
          )
          .then((data) => {
            this.dialogRef.close();
            this.toastr.success('Imagen subida correctamente', 'Imagen subida');
            this.router.navigate(['/directorio']).then(() => location.reload());
          })
          .catch((err) => {
            console.log(err);
            this.toastr.error('Error al subir la imagen', 'Error');
          });
      } else {
        this.directorioService
          .uploadFile(
            this.data.companyId,
            this.companyForm.controls.companyLogo.value
          )
          .then((data) => {
            this.dialogRef.close();
            this.router.navigate(['/directorio']).then(() => {
              location.reload();
              this.toastr.success(
                'Imagen subida correctamente',
                'Imagen subida'
              );
            });
          })
          .catch((err) => {
            console.log(err);
            this.toastr.error('Error al subir la imagen', 'Error');
          });
      }
    }
    this.dialogRef.close();
  }

  get getButtonText(): string {
    return this.companyForm.controls.companyLogo.value === ''
      ? 'Saltar'
      : 'Guardar';
  }
}
