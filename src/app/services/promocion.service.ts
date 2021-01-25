import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Promocion } from '../models/promocion';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class PromocionService {
  private readonly PATHVISITER = `${environment.VISITERURL}promotion`;
  private readonly PATHADMIN = `${environment.ADMINURL}promotion`;
  private readonly headers = { Authorization: this.loginService.currentUser };

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {}

  getPromotions(): Promise<Promocion[]> {
    return this.httpClient.get<Promocion[]>(this.PATHVISITER).toPromise();
  }

  insertPromotion(
    nombre: string,
    imagen: File,
    startDate: string,
    expirationDate: string
  ): Promise<HttpResponse<any>> {
    const formData = new FormData();
    formData.append('name', nombre);
    formData.append('file', imagen);
    formData.append('startDate', startDate);
    formData.append('expirationDate', expirationDate);

    return this.httpClient
      .post<any>(`${this.PATHADMIN}`, formData, {
        observe: 'response',
        headers: this.headers,
      })
      .toPromise();
  }

  public modifyPromotion(
    id: string,
    nombre: string,
    imagen: File,
    startDate: string,
    expirationDate: string
  ): Promise<HttpResponse<any>> {
    const formData = new FormData();

    if (imagen) {
      formData.append('promocionId', id);
      formData.append('name', nombre);
      formData.append('file', imagen);
      formData.append('startDate', startDate);
      formData.append('expirationDate', expirationDate);
      return this.httpClient
        .put<any>(`${this.PATHADMIN}`, formData, {
          observe: 'response',
          headers: this.headers,
        })
        .toPromise();
    } else {
      formData.append('promocionId', id);
      formData.append('name', nombre);
      formData.append('startDate', startDate);
      formData.append('expirationDate', expirationDate);
      return this.httpClient
        .put<any>(`${this.PATHADMIN}/noImage`, formData, {
          observe: 'response',
          headers: this.headers,
        })
        .toPromise();
    }
  }

  public deletePromotion(promocionId: string): Promise<any> {
    return this.httpClient
      .request('delete', `${this.PATHADMIN}`, {
        body: [promocionId],
        observe: 'response',
        headers: this.headers,
      })
      .toPromise();
  }

  getTopTenPromotions(): Promise<Promocion[]> {
    return this.httpClient.get<Promocion[]>(`${this.PATHVISITER}/10`).toPromise();
  }
}
