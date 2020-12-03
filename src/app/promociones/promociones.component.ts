import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { SwiperOptions } from 'swiper';
import { AutoplayOptions } from 'swiper/types/components/autoplay';
import { PaginationOptions } from 'swiper/types/components/pagination';
import { ScrollbarOptions } from 'swiper/types/components/scrollbar';
import { Promocion } from '../models/Promocion';
import { PromocionService } from '../services/promocion.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css'],
})
export class PromocionesComponent implements OnInit {
  public promociones: Promocion[];

  public config: SwiperOptions = {
    direction: 'horizontal',
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
      type: 'bullets',
      bulletElement: 'span'
    },
    autoplay: {
      delay: 5000,
    },
    effect: 'fade',
    speed: 4000,
  };

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
