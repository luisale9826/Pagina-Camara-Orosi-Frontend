import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Promocion } from 'src/app/models/Promocion';
import { PromocionService } from 'src/app/services/promocion.service';

@Component({
  selector: 'app-eliminarPromocion',
  templateUrl: './eliminarPromocion.component.html',
  styleUrls: ['./eliminarPromocion.component.css'],
})
export class EliminarPromocionComponent implements OnInit {
  promocion: Promocion[];
  constructor(
    private promocionService: PromocionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.promocionService.getPromotions().subscribe((data) => {
      this.promocion = data;
    });
  }

  deletePromocion(link: string): void {
    this.promocionService.deletePromotion(link).subscribe(
      (data) => {},
      (err) => {}
    );
  }
}
