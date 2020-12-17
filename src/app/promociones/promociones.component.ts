import { Component, OnInit } from '@angular/core';
import { Promocion } from '../models/Promocion';
import { PromocionService } from '../services/promocion.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css'],
})
export class PromocionesComponent implements OnInit {
  public promociones: Promocion[];
  constructor(public promocionService: PromocionService) {}

  ngOnInit(): void {
    this.promocionService
      .getPromotions()
      .then((data) => {
        this.promociones = data;
      })
      .catch((err) => console.log(err));
  }
}
