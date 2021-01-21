import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Board } from '../models/board';
import { Value } from '../models/value';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class ConozcanosService {
  private readonly PATHVISITER = `${environment.VISITERURL}configuration`;
  private readonly PATHADMIN = `${environment.ADMINURL}configuration`;
  private readonly headers = { Authorization: this.loginService.currentUser };

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {}

  getBoard(): Promise<any> {
    return this.httpClient.get<any>(`${this.PATHVISITER}/board`).toPromise();
  }

  getBenefits(): Promise<any> {
    return this.httpClient.get<any>(`${this.PATHVISITER}/benefits`).toPromise();
  }

  getValues(): Promise<any> {
    return this.httpClient.get<any>(`${this.PATHVISITER}/values`).toPromise();
  }

  editValues(values: Value[]): Promise<any> {
    return this.httpClient
      .post(`${this.PATHADMIN}/values`, values, {
        observe: 'response',
        headers: this.headers,
      })
      .toPromise();
  }

  editBenefits(benefits: string[]): Promise<any> {
    return this.httpClient
      .post(`${this.PATHADMIN}/benefits`, benefits, {
        observe: 'response',
        headers: this.headers,
      })
      .toPromise();
  }
}
