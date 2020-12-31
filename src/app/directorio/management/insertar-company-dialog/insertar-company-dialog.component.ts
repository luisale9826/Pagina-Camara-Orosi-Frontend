import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { ToastrService } from 'ngx-toastr';
import { Company } from 'src/app/models/company';
import { Phone } from 'src/app/models/phone';
import { Error } from 'src/app/models/error';
import { DirectorioService } from 'src/app/services/directorio.service';
import { isImage, notNullOrBlank } from 'src/app/shared/custome-validations';

@Component({
  selector: 'app-insertar-company-dialog',
  templateUrl: './insertar-company-dialog.component.html',
  styleUrls: ['./insertar-company-dialog.component.css'],
})
export class InsertarCompanyDialogComponent implements OnInit {
  public companyForm: FormGroup;
  public companyClasifications;
  public uploadedFileName: string;
  public apiErrors: Error[];
  imageScr: string;
  progress: number;
  private editedLogo = false;
  clicked = false;

  constructor(
    public dialogRef: MatDialogRef<InsertarCompanyDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data,
    private directorioService: DirectorioService,
    private toastr: ToastrService,
  ) {
    this.companyClasifications = [
      { value: 'Actividades Térmicas' },
      { value: 'Artesanías' },
      { value: 'Gastronomía' },
      { value: 'Guías Locales y Tour Operador' },
      { value: 'Hospedaje' },
      { value: 'Servicios Básicos' },
      { value: 'Termales, Aventura y Recreación' },
    ];
  }

  ngOnInit(): void {
    if (this.data.company !== undefined) {
      this.companyForm = this.formBuilder.group({
        companyName: [
          this.data.company.companyName,
          [Validators.required, notNullOrBlank],
        ],
        companyLogo: this.data.company.companyLogo,
        companyDescription: this.data.company.companyDescription,
        companyCategory: [
          this.data.company.companyCategory,
          [Validators.required],
        ],
        companyEmail: [this.data.company.companyEmail, [Validators.email]],
        companyPhones: this.formBuilder.array([]),
        companyAddress: this.data.company.companyAddress,
        companyLocation: this.data.company.companyLocation,
        companyFacebookProfile: this.data.company.companyFacebookProfile,
        companyInstagramProfile: this.data.company.companyInstagramProfile,
      });
      this.loadPhoneNumbers(this.data.company.companyPhones);
      this.imageScr = this.data.company.companyLogo;
    } else {
      this.companyForm = this.formBuilder.group({
        companyName: ['', [Validators.required, notNullOrBlank]],
        companyLogo: ['', [Validators.required, isImage]],
        companyDescription: '',
        companyCategory: ['', [Validators.required]],
        companyEmail: ['', [Validators.email]],
        companyPhones: this.formBuilder.array([]),
        companyAddress: '',
        companyLocation: '',
        companyFacebookProfile: '',
        companyInstagramProfile: '',
      });
    }
  }

  addPhoneNumber(): void {
    this.phones.push(this.newPhone());
  }

  private loadPhoneNumbers(phones: Phone[]): void {
    phones.forEach((phone) => {
      this.phones.push(this.loadPhone(phone.phone));
    });
  }

  private loadPhone(phone: string): FormGroup {
    return this.formBuilder.group({
      phone: [phone, RxwebValidators.unique()],
    });
  }

  private newPhone(): FormGroup {
    return this.formBuilder.group({
      phone: ['', RxwebValidators.unique()],
    });
  }

  removePhone(i: number): void {
    this.phones.removeAt(i);
  }

  public get phones(): FormArray {
    return this.companyForm.get('companyPhones') as FormArray;
  }

  onSubmit(companyData: Company): void {
    if (this.companyForm.valid) {
      if (this.data.company) {
        companyData.companyId = this.data.company.companyId;
        companyData.companyLogo = this.data.company.companyLogo;
        this.directorioService
          .modificarCompany(companyData)
          .then((data) => {
            const companyId = this.data.company.companyId;
            if (this.editedLogo) {
              this.directorioService
                .editFile(companyId, this.companyForm.get('companyLogo').value)
                .then(() => {
                  this.toastr.success(
                    `Se ha modificado la compañía ${companyData.companyName}`,
                    'Modificado!!!'
                  );
                  setTimeout(() => {
                    this.dialogRef.close();
                    location.reload();
                  }, 2000);
                })
                .catch((err) => {
                  this.toastr.error(
                    'Se produjo un error al modificar',
                    'Error'
                  );
                  this.apiErrors = Object.values(err.error.errors);
                });
            } else {
              setTimeout(() => {
                this.dialogRef.close();
                location.reload();
              });
            }
          })
          .catch((err) => {
            this.toastr.error('Se produjo un error al modificar', 'Error');
            this.apiErrors = Object.values(err.error.errors);
          });
      } else {
        this.directorioService
          .insertarCompany(companyData)
          .then((data) => {
            const companyId = data.body.companyId;
            this.directorioService
              .uploadFile(companyId, this.companyForm.get('companyLogo').value)
              .then(() => {
                this.toastr.success(
                  `Se ha insertado la compañía ${companyData.companyName}`,
                  'Insertado!!!'
                );
                this.dialogRef.close();
              })
              .catch((err) => {
                this.toastr.error('Se produjo un error al insertar', 'Error');
                console.log(err);
              });
          })
          .catch((err) => {
            this.toastr.error('Se produjo un error al insertar', 'Error');
            this.apiErrors = Object.values(err.error.errors);
          });
      }
    }
  }

  get getCompanyNameError(): string {
    return this.companyForm.controls.companyName.hasError('required') ||
      this.companyForm.controls.companyName.hasError('blankOrNull')
      ? 'Este campo no puede estar vacio'
      : '';
  }

  get getDuplicatedNameError(): string {
    if (this.apiErrors) {
      const companyNameError = this.apiErrors.find(
        (error) => error.errorId === 'invalidCompanyName'
      );
      return companyNameError !== undefined
        ? companyNameError.errorMessage
        : '';
    }
  }

  get getDuplicatedEmailError(): string {
    if (this.apiErrors) {
      const companyEmailError = this.apiErrors.find(
        (error) => error.errorId === 'invalidCompanyEmail'
      );
      return companyEmailError !== undefined
        ? companyEmailError.errorMessage
        : '';
    }
  }

  get getDuplicatedPhoneError(): string {
    if (this.apiErrors) {
      const companyPhoneError = this.apiErrors.find(
        (error) => error.errorId === 'invalidPhoneNumber'
      );
      return companyPhoneError !== undefined
        ? companyPhoneError.errorMessage
        : '';
    }
  }

  onFileUploaded(event): void {
    if (this.data.company) {
      this.editedLogo = true;
    }
    const file = event.target.files[0];
    this.previewFile(file);
    this.companyForm.get('companyLogo').setValue(event.target.files[0]);
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
    };
  }
}
