import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { VerImagenDialogComponent } from './ver-imagen-dialog/ver-imagen-dialog.component';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css'],
})
export class GaleryComponent implements OnInit {
  imagenOne =
    'https://firebasestorage.googleapis.com/v0/b/sitio-web-camara-orosi.appspot.com/o/tour%2Fimagen-1.jpg?alt=media&token=a087bc86-fb3d-42eb-879f-416647815cab';
  imagenDos =
    'https://firebasestorage.googleapis.com/v0/b/sitio-web-camara-orosi.appspot.com/o/tour%2Fimagen-2.jpg?alt=media&token=e08d3ab7-c45d-4f5e-bc7c-5d5dc3b48b55';
  imagenTres =
    'https://firebasestorage.googleapis.com/v0/b/sitio-web-camara-orosi.appspot.com/o/tour%2Fimagen-3.jpg?alt=media&token=ae4e3f2e-1561-46ba-a160-e460b1478abe';
  imagenCuatro =
    'https://firebasestorage.googleapis.com/v0/b/sitio-web-camara-orosi.appspot.com/o/tour%2Fimagen-4.jpg?alt=media&token=b746fd85-84f1-480f-baa6-00c69ccb21d1';
  imagenCinco =
    'https://firebasestorage.googleapis.com/v0/b/sitio-web-camara-orosi.appspot.com/o/tour%2Fimagen-5.jpg?alt=media&token=d43181b6-aebe-4d2f-ab37-4b8bb51f36f3';
  imagenSeis =
    'https://firebasestorage.googleapis.com/v0/b/sitio-web-camara-orosi.appspot.com/o/tour%2Fimagen-6.jpg?alt=media&token=a90246ab-619c-4c7d-b001-27f6f7250c77';

  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {}

  return(): void {
    this.router.navigate(['/tour']);
  }

  openImageDialog(image): void {
    this.dialog.open(VerImagenDialogComponent, {
      data: {
        image,
      },
    });
  }
}
