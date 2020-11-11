import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Promocion } from '../models/Promocion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PromocionService {
  readonly PATH = environment.BASICURL;

  constructor(private httpClient: HttpClient) {}

  insertPromotion(promocion: Promocion) {
    return this.httpClient.post<Promocion>(
      this.PATH + 'visiter/promotion/addPromotion',
      promocion
    );
  }

  getPromotions() {
    return this.httpClient.get<Promocion[]>(this.PATH + 'visiter/promotion');
  }

  insertPromotionFile(uploadImageData: FormData) {
    return this.httpClient
      .post(this.PATH + 'visiter/promotion/savefile', uploadImageData, {
        observe: 'response',
      })
      .subscribe((response) => {});
  }

  public deletePromotion(link: string): Observable<any> {
    return this.httpClient.post<Promocion>(
      this.PATH + 'visiter/promotion/deletePromotion',
      link
    );
  }
}
