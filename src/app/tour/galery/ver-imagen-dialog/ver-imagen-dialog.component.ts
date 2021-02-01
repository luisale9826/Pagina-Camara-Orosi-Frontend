import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ver-imagen-dialog',
  templateUrl: './ver-imagen-dialog.component.html',
  styleUrls: ['./ver-imagen-dialog.component.css'],
})
export class VerImagenDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<VerImagenDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(): void {}
}
