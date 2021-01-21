import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Value } from 'src/app/models/value';
import { ConozcanosService } from 'src/app/services/conozcanos.service';
import { notNullOrBlank } from 'src/app/shared/custome-validations';

@Component({
  selector: 'app-edit-values',
  templateUrl: './edit-values.component.html',
  styleUrls: ['./edit-values.component.css'],
})
export class EditValuesComponent implements OnInit {
  valuesForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditValuesComponent>,
    private cs: ConozcanosService,
    public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.valuesForm = this.fb.group({
      values: this.fb.array([]),
    });
    this.loadValues(this.data.values);
  }

  loadValues(values: Value[]): void {
    values.forEach((value) => {
      this.values.push(this.loadValue(value));
    });
  }

  private loadValue({ valueName, valueDescription }: Value): FormGroup {
    return this.fb.group({
      valueName: [valueName, notNullOrBlank],
      valueDescription: [valueDescription, notNullOrBlank],
    });
  }

  addValue(): void {
    this.values.push(this.newValue());
  }

  get values(): FormArray {
    return this.valuesForm.get('values') as FormArray;
  }

  newValue(): FormGroup {
    return this.fb.group({
      valueName: ['', notNullOrBlank],
      valueDescription: ['', notNullOrBlank],
    });
  }

  removeValue(i: number): void {
    this.values.removeAt(i);
  }

  saveClose(): void {
    if (this.valuesForm.valid) {
      const values: any = this.valuesForm.value;
      this.cs
        .editValues(values.values)
        .then(() => {
          this.toastr.success(
            'Se actualizaron los valores',
            'Valores actualizados correctamente'
          );
        })
        .then(() => {
          this.dialogRef.close();
        })
        .catch((err) => {
          console.log(err);
          this.toastr.error(
            'Error al modificar valores',
            'Se produjo un error al modificar los valores'
          );
        });
    }
  }
}
