import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Board } from '../models/board';

@Injectable({
  providedIn: 'root',
})
export class ConozcanosService {

  private readonly PATHVISITER = `${environment.VISITERURL}configuration`;

  constructor(private httpClient: HttpClient) {}

  getBoard(): Promise<any> {
    return this.httpClient.get<any>(`${this.PATHVISITER}/board`).toPromise();
  }

  getBenefits(): Promise<any> {
    return this.httpClient.get<any>(`${this.PATHVISITER}/benefits`).toPromise();
  }

  getValues(): Promise<any> {
    return this.httpClient.get<any>(`${this.PATHVISITER}/values`).toPromise();
  }
}
