import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Promocion } from '../models/Promocion';
import { PromocionService } from '../services/promocion.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
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
}
