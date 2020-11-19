import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Promocion } from '../models/Promocion';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class PromocionService {
  readonly PATH = environment.BASICURL;
  private readonly PATHVISITER = `${environment.VISITERURL}promotion`;
  private readonly PATHADMIN = `${environment.ADMINURL}promotion`;
  private readonly headers = { Authorization: this.loginService.currentUser };

  constructor(private httpClient: HttpClient, private loginService: LoginService) {}

  getPromotions(): Promise<Promocion[]> {
    return this.httpClient
      .get<Promocion[]>(this.PATH + 'visiter/promotion')
      .toPromise();
  }

  /*insertPromotionFile(uploadImageData: FormData): Promise<HttpResponse<any>> {
    return this.httpClient
      .post<any>(
        `${this.PATHADMIN}/savefile`,
        { uploadImageData },
        { observe: 'response', headers: this.headers, }
      )
      .toPromise();
  }*/

  insertPromotionFile(nombre: string, imagen: File): Promise<HttpResponse<any>> {
    const formData = new FormData();
    formData.append('name', nombre);
    formData.append('file', imagen);

    return this.httpClient
      .post<any>(`${this.PATHADMIN}/saveFile`, formData, {
        observe: 'response',
        headers: this.headers,
      })
      .toPromise();
  }


  // insertPromotionFile(uploadImageData:FormData){

  // return this.httpClient.post(this.PATH + "visiter/promotion/savefile", uploadImageData, { observe: 'response' })
  // .subscribe((response) => {
  // }
  // );
  // }

  public deletePromotion(link: string): Observable<any> {
    return this.httpClient.post<Promocion>(
      this.PATH + 'visiter/promotion/deletePromotion',
      link
    );
  }
}
