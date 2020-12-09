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
  index = 0;
  private hovered = false;
  constructor(public promocionService: PromocionService) {}

  ngOnInit(): void {
    this.promocionService
      .getPromotions()
      .then((data) => {
        this.promociones = data;
      })
      .catch((err) => console.log(err));
  }

  get getPromocion(): Promocion | null {
    if (this.promociones === undefined) {
      return null;
    } else {
      return this.promociones[this.index];
    }
  }

  setPromotion(newIndex: number): void {
    if (newIndex < 0) {
      this.index = this.promociones.length - 1;
    } else if (newIndex > this.promociones.length - 1) {
      this.index = 0;
    } else {
      this.index = newIndex;
    }
  }
}
