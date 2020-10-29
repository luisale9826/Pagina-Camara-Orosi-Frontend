import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-insertar-company-dialog',
  templateUrl: './insertar-company-dialog.component.html',
  styleUrls: ['./insertar-company-dialog.component.css'],
})
export class InsertarCompanyDialogComponent implements OnInit {
  public companyForm: FormGroup;
  public companyClasifications;
  public uploadedFileName: string;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.uploadedFileName = 'Imagen o Logo de la Compañía';
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
      companyName: '',
      companyDescription: '',
      companyClasification: '',
      companyEmail: '',
      companyPhones: this.formBuilder.array([]),
      companyAddress: '',
      companyLocation: '',
      companyLogo: null,
      companyFacebookProfile: '',
      companyInstagramProfile: '',
    });
  }

  addPhoneNumber(): void {
    this.phones.push(this.newPhone());
  }

  private newPhone(): FormGroup {
    return this.formBuilder.group({
      phone: '',
    });
  }

  removePhone(i: number): void {
    this.phones.removeAt(i);
  }

  public get phones(): FormArray {
    return this.companyForm.get('companyPhones') as FormArray;
  }

  onFileUploaded(event): void {
    this.uploadedFileName = event.target.files[0].name;
    this.companyForm.get('companyLogo').setValue(event.target.files[0]);
  }

  onSubmit(companyData): void {
    console.log(companyData);
  }
}
