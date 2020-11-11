import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-ver-imagen-company-dialog',
  templateUrl: './ver-imagen-company-dialog.component.html',
  styleUrls: ['./ver-imagen-company-dialog.component.css'],
})
export class VerImagenCompanyDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<VerImagenCompanyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(): void {}
}
