import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Promocion } from 'src/app/models/promocion';
import { PromocionService } from 'src/app/services/promocion.service';
import {
  invalidExpirationDate,
  isImage,
  notNullOrBlank,
} from 'src/app/shared/custome-validations';

@Component({
  selector: 'app-insert-promotion-dialog',
  templateUrl: './insert-promotion-dialog.component.html',
  styleUrls: ['./insert-promotion-dialog.component.css'],
})
export class InsertPromotionDialogComponent implements OnInit {
  promotionForm: FormGroup;
  public uploadedFileName: string;
  public apiErrors: Error[];
  imageScr: string;
  progress: number;
  private editedLogo = false;
  clicked = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<InsertPromotionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private toastr: ToastrService,
    private ps: PromocionService
  ) {
    if (this.data.promotion) {
      this.promotionForm = this.fb.group({
        name: [this.data.promotion.name, [Validators.required, notNullOrBlank]],
        image: [this.data.promotion.link],
        startDate: new FormControl(new Date(this.data.promotion.startDate), [
          Validators.required,
        ]),
        expirationDate: new FormControl(
          new Date(this.data.promotion.expirationDate),
          [Validators.required, invalidExpirationDate]
        ),
      });
      this.imageScr = this.data.promotion.link;
    } else {
      this.promotionForm = this.fb.group({
        name: ['', [Validators.required, notNullOrBlank]],
        image: ['', [Validators.required, isImage]],
        startDate: new FormControl('', [Validators.required]),
        expirationDate: new FormControl('', [
          Validators.required,
          invalidExpirationDate,
        ]),
      });
    }
  }

  ngOnInit(): void {}

  onFileUploaded(event): void {
    if (this.data.productId) {
      this.editedLogo = true;
    }
    const file = event.target.files[0];
    this.previewFile(file);
    this.promotionForm.get('image').setValue(event.target.files[0]);
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

  onSubmit(promocionData: Promocion): void {
    if (this.promotionForm.valid) {
      promocionData.startDate = this.getFormattedDate(promocionData.startDate);
      promocionData.expirationDate = this.getFormattedDate(
        promocionData.expirationDate
      );
      if (this.data.promotion) {
        promocionData.id = this.data.promotion.id;
        this.modifyPromotion(promocionData);
      } else {
        this.insertPromotion(promocionData);
      }
    }
  }

  private getFormattedDate(date: string): string {
    const d = new Date(date);
    const formatedDate = formatDate(d, 'dd/MM/yyyy', 'en-US');
    return formatedDate;
  }

  private modifyPromotion(promocion: Promocion): void {
    let image = this.promotionForm.get('image').value;
    if (!this.editedLogo) {
      image = null;
    }
    this.ps
      .modifyPromotion(
        promocion.id,
        promocion.name,
        image,
        promocion.startDate,
        promocion.expirationDate
      )
      .then(() => {
        this.toastr.success(
          `Se ha insertado la compañía ${promocion.name}`,
          'Insertado!!!'
        );
        this.dialogRef.close();
      })
      .catch((err) => {
        console.log(err);
        this.toastr.error('Se produjo un error al modificar', 'Error');
      });
  }

  private insertPromotion(promocion: Promocion): void {
    this.ps
      .insertPromotion(
        promocion.name,
        this.promotionForm.get('image').value,
        promocion.startDate,
        promocion.expirationDate
      )
      .then(() => {
        this.toastr.success(
          `Se ha insertado la compañía ${promocion.name}`,
          'Insertado!!!'
        );
        this.dialogRef.close();
      })
      .catch((err) => {
        this.toastr.error('Se produjo un error al insertar', 'Error');
        this.apiErrors = Object.values(err.error.errors);
      });
  }
}
