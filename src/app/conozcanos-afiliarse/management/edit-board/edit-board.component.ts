import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Board } from 'src/app/models/board';
import { ConozcanosService } from 'src/app/services/conozcanos.service';
import { notNullOrBlank } from 'src/app/shared/custome-validations';

@Component({
  selector: 'app-edit-board',
  templateUrl: './edit-board.component.html',
  styleUrls: ['./edit-board.component.css'],
})
export class EditBoardComponent implements OnInit {
  boardForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditBoardComponent>,
    private cs: ConozcanosService,
    public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data,
    private toastr: ToastrService
  ) {
    this.boardForm = this.fb.group({
      president: this.fb.group({
        name: [this.data.board.president.name, notNullOrBlank],
        major: [this.data.board.president.major, notNullOrBlank],
      }),
      vicepresident: this.fb.group({
        name: [this.data.board.vicepresident.name, notNullOrBlank],
        major: [this.data.board.vicepresident.major, notNullOrBlank],
      }),
      secretary: this.fb.group({
        name: [this.data.board.secretary.name, notNullOrBlank],
        major: [this.data.board.secretary.major, notNullOrBlank],
      }),
      treasurer: this.fb.group({
        name: [this.data.board.treasurer.name, notNullOrBlank],
        major: [this.data.board.treasurer.major, notNullOrBlank],
      }),
      vocal: this.fb.group({
        name: [this.data.board.vocal.name, notNullOrBlank],
        major: [this.data.board.vocal.major, notNullOrBlank],
      }),
      fiscal: this.fb.group({
        name: [this.data.board.fiscal.name, notNullOrBlank],
        major: [this.data.board.fiscal.major, notNullOrBlank],
      }),
    });
  }

  ngOnInit(): void {}

  saveClose(): void {
    if (this.boardForm.valid) {
      const board: Board = this.boardForm.value;
      this.cs
        .editBoard(board)
        .then(() => {
          this.toastr.success(
            'Se ha modificado la Junta',
            'La Junta Directiva se ha modificado con exito'
          );
        })
        .then(() => this.dialogRef.close())
        .catch((err) => {
          console.log(err);
          this.toastr.error(
            'Hubo un error',
            'Hubo un error al modificar la Junta Directiva'
          );
        });
    }
  }
}
