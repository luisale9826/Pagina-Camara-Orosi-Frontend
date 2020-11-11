import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Promocion } from 'src/app/models/Promocion';
import { PromocionService } from 'src/app/services/promocion.service';

@Component({
  selector: 'app-promocion',
  templateUrl: './promocion.component.html',
  styleUrls: ['./promocion.component.css'],
})
export class PromocionComponent implements OnInit {
  myForm = new FormGroup({
    name: new FormControl(''),
    file: new FormControl(''),
    fileSource: new FormControl(''),
  });
  error = '';
  promocion: Promocion = new Promocion();

  selectedFile: File;
  constructor(
    private promocionService: PromocionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public onFileChanged(event): void {
    this.selectedFile = event.target.files[0];
  }

  submit(): void {
    const uploadImageData = new FormData();
    uploadImageData.append(
      'archivo',
      this.selectedFile,
      this.selectedFile.name
    );
    uploadImageData.append('nombre', this.myForm.get('name').value);
    this.promocionService.insertPromotionFile(uploadImageData);
  }
}
