import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Company } from '../models/company';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class DirectorioService {
  private readonly PATHVISITER = `${environment.VISITERURL}directory`;
  private readonly PATHADMIN = `${environment.ADMINURL}directory`;
  private readonly headers = { Authorization: this.loginService.currentUser };

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {}

  getCompany(): Promise<Company[]> {
    return this.httpClient
      .get<Company[]>(`${this.PATHVISITER}`)
      .toPromise();
  }

  insertarCompany(company: Company): Promise<HttpResponse<any>> {
    return this.httpClient
      .post<any>(`${this.PATHADMIN}`, company, {
        observe: 'response',
        headers: this.headers,
      })
      .toPromise();
  }

  uploadFile(companyId: string, image: File): Promise<HttpResponse<any>> {
    const formData = new FormData();
    formData.append('companyId', companyId);
    formData.append('image', image);

    return this.httpClient
      .post<any>(`${this.PATHADMIN}/image`, formData, {
        observe: 'response',
        headers: this.headers,
      })
      .toPromise();
  }

  editFile(companyId: string, image: File): Promise<HttpResponse<any>> {
    const formData = new FormData();
    formData.append('companyId', companyId);
    formData.append('image', image);

    return this.httpClient
      .put<any>(`${this.PATHADMIN}/image`, formData, {
        observe: 'response',
        headers: this.headers,
      })
      .toPromise();
  }

  eliminarCompany(companyId: any): Promise<any> {
    const formData = new FormData();
    formData.append('companyId', companyId);
    return this.httpClient
      .request('delete', `${this.PATHADMIN}`, {
        body: companyId,
        observe: 'response',
        headers: this.headers,
      })
      .toPromise();
  }

  modificarCompany(company: Company): Promise<HttpResponse<any>> {
    return this.httpClient
      .put(`${this.PATHADMIN}`, company, {
        observe: 'response',
        headers: this.headers,
      })
      .toPromise();
  }

  getCompanyById(id: string): Promise<HttpResponse<any>> {
    return this.httpClient
      .get(`${this.PATHVISITER}/`, {
        observe: 'response',
        params: { id },
      })
      .toPromise();
  }
}
