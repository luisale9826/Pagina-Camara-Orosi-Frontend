import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Board } from '../models/board';
import { Value } from '../models/value';
import { ConozcanosService } from '../services/conozcanos.service';
import { LoginService } from '../services/login.service';
import { TextControl } from '../shared/text-control';
import { EditTextDialogComponent } from '../web-config/edit-text-dialog/edit-text-dialog.component';
import { EditBenefitsComponent } from './management/edit-benefits/edit-benefits.component';
import { EditValuesComponent } from './management/edit-values/edit-values.component';

@Component({
  selector: 'app-conozcanos-afiliarse',
  templateUrl: './conozcanos-afiliarse.component.html',
  styleUrls: ['./conozcanos-afiliarse.component.css'],
})
export class ConozcanosAfiliarseComponent implements OnInit {
  benefits: string[];
  whoAreWe: string;
  alliances: string;
  vision: string;
  mission: string;
  values: Value[];
  whyAffiliate: string;
  board: Board;
  status: boolean;

  constructor(
    private cs: ConozcanosService,
    private loginService: LoginService,
    private dialog: MatDialog,
    private tc: TextControl
  ) {
    this.status = this.loginService.isAuthenticated();
    this.loadBoard();
    this.loadBenefits();
    this.loadText();
    this.loadValues();
  }

  ngOnInit(): void {}

  loadBoard(): void {
    this.cs
      .getBoard()
      .then((data) => {
        this.board = data.board;
      })
      .catch((err) => console.log(err));
  }

  loadBenefits(): void {
    this.cs
      .getBenefits()
      .then((data) => {
        this.benefits = data.benefits;
      })
      .catch((err) => console.log(err));
  }

  editText(name: string): void {
    let text: string;
    switch (name) {
      case 'whoAreWe':
        text = this.whoAreWe;
        break;
      case 'alliances':
        text = this.alliances;
        break;
      case 'vision':
        text = this.vision;
        break;
      case 'mission':
        text = this.mission;
        break;
      case 'whyAffiliate':
        text = this.whyAffiliate;
        break;
    }
    this.dialog.open(EditTextDialogComponent, {
      data: {
        name,
        text,
      },
    });
  }

  loadValues(): void {
    this.cs
      .getValues()
      .then((data) => (this.values = data.values))
      .catch((err) => console.log(err));
  }

  loadText(): void {
    const texts = [
      'whoAreWe',
      'alliances',
      'vision',
      'mission',
      'whyAffiliate',
    ];
    texts.forEach((text) => {
      switch (text) {
        case 'whoAreWe':
          this.whoAreWe = this.tc.getText(text);
          break;
        case 'alliances':
          this.alliances = this.tc.getText(text);
          break;
        case 'vision':
          this.vision = this.tc.getText(text);
          break;
        case 'mission':
          this.mission = this.tc.getText(text);
          break;
        case 'whyAffiliate':
          this.whyAffiliate = this.tc.getText(text);
          break;
      }
    });
  }

  editValues(values: Value[]): void {
    const dialogRef = this.dialog.open(EditValuesComponent, {
      data: {
        values,
      },
    });
    dialogRef.afterClosed().subscribe(
      () => {
        this.loadValues();
      },
      (err) => console.log(err)
    );
  }

  editBenefits(benefits: string[]): void {
    const dialogRef = this.dialog.open(EditBenefitsComponent, {
      data: {
        benefits,
      },
    });
    dialogRef.afterClosed().subscribe(
      () => {
        this.loadBenefits();
      },
      (err) => console.log(err)
    );
  }
}
