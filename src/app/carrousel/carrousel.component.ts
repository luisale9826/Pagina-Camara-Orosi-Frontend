import { Component, OnInit } from '@angular/core';
import { Promocion } from '../models/promocion';
import { PromocionService } from '../services/promocion.service';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],
})
export class CarrouselComponent implements OnInit {
  public promociones: Promocion[];
  constructor(public promocionService: PromocionService) {}

  ngOnInit(): void {
    this.promocionService
      .getTopTenPromotions()
      .then((data) => {
        this.promociones = data;
      })
      .catch((err) => console.log(err));
  }
}
