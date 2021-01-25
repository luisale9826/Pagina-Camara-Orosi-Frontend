import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ConozcanosService } from 'src/app/services/conozcanos.service';
import { notNullOrBlank } from 'src/app/shared/custome-validations';

@Component({
  selector: 'app-edit-benefits',
  templateUrl: './edit-benefits.component.html',
  styleUrls: ['./edit-benefits.component.css'],
})
export class EditBenefitsComponent implements OnInit {
  benefitsForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditBenefitsComponent>,
    private cs: ConozcanosService,
    public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.benefitsForm = this.fb.group({
      benefits: this.fb.array([]),
    });
    this.loadBenefits(this.data.benefits);
  }

  loadBenefits(benefits: string[]): void {
    benefits.forEach((benefit) => {
      this.benefits.push(this.loadBenefit(benefit));
    });
  }

  private loadBenefit(benefit: string): FormGroup {
    return this.fb.group({
      benefit: [benefit, notNullOrBlank],
    });
  }

  addBenefit(): void {
    this.benefits.push(this.newBenefit());
  }

  get benefits(): FormArray {
    return this.benefitsForm.get('benefits') as FormArray;
  }

  newBenefit(): FormGroup {
    return this.fb.group({
      benefit: ['', notNullOrBlank],
    });
  }

  removeBenefit(i: number): void {
    this.benefits.removeAt(i);
  }

  saveClose(): void {
    if (this.benefitsForm.valid) {
      const benefitsArray: FormArray = this.benefits;
      const benefits = [];
      benefitsArray.controls.forEach((con) => {
        benefits.push(con.value.benefit);
      });
      this.cs
        .editBenefits(benefits)
        .then(() => {
          this.toastr.success(
            'Se actualizaron los beneficios',
            'Beneficios actualizados correctamente'
          );
        })
        .then(() => {
          this.dialogRef.close();
        })
        .catch((err) => {
          console.log(err);
          this.toastr.error(
            'Error al modificar beneficios',
            'Se produjo un error al modificar los beneficios'
          );
        });
    }
  }
}
