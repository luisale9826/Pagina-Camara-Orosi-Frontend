import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { ToastrService } from 'ngx-toastr';
import { Error } from 'src/app/model/error';
import { DirectorioService } from 'src/app/services/directorio.service';
import { notNullOrBlank } from 'src/app/shared/custome-validations';

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

  constructor(
    public dialogRef: MatDialogRef<InsertarCompanyDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data,
    private directorioService: DirectorioService,
    private toastr: ToastrService
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
    this.companyForm = this.formBuilder.group({
      companyName: ['', [Validators.required, notNullOrBlank]],
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

  addPhoneNumber(): void {
    this.phones.push(this.newPhone());
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

  onSubmit(companyData): void {
    if (this.companyForm.valid) {
      this.directorioService
        .insertarCompany(companyData)
        .then((data) => {
          this.data.companyId = data.body.companyId;
          this.data.companyName = companyData.companyName;
          this.dialogRef.close(this.data);
          this.toastr.success(
            `Se ha insertado la compañía ${companyData.companyName}`,
            'Insertado!!!'
          );
        })
        .catch((err) => {
          this.toastr.error('Se produjo un error al insertar', 'Error');
          this.apiErrors = Object.values(err.error.errors);
        });
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
      const companyNameError = this.apiErrors.find(error => error.errorId === 'invalidCompanyName');
      return companyNameError !== undefined ? companyNameError.errorMessage : '' ;
    }
  }

  get getDuplicatedEmailError(): string {
    if (this.apiErrors) {
      const companyEmailError = this.apiErrors.find(error => error.errorId === 'invalidCompanyEmail');
      return companyEmailError !== undefined ? companyEmailError.errorMessage : '' ;
    }
  }

  get getDuplicatedPhoneError(): string {
    if (this.apiErrors) {
      const companyPhoneError = this.apiErrors.find(error => error.errorId === 'invalidPhoneNumber');
      return companyPhoneError !== undefined ? companyPhoneError.errorMessage : '' ;
    }
  }
}
