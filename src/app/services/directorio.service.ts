import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { file } from '@rxweb/reactive-form-validators';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../model/company';

@Injectable({
  providedIn: 'root',
})
export class DirectorioService {
  readonly PATH = environment.apiURL;
  readonly endpoint = 'management/cto/directory';
  statusProvider: BehaviorSubject<boolean>;
  private status = false;

  constructor(private http: HttpClient) {
    if (localStorage.getItem('currentUser') !== null) {
      this.status = true;
    }
    this.statusProvider = new BehaviorSubject<boolean>(this.status);
  }

  insertarCompany(company: Company): Promise<HttpResponse<any>> {
    return this.http
      .post<any>(this.PATH + this.endpoint, company, {
        observe: 'response',
        headers: { Authorization: localStorage.getItem('currentUser') },
      })
      .toPromise();
  }

  uploadFile(companyId: string, image: File): Promise<HttpResponse<any>> {
    const formData = new FormData();
    formData.append('companyId', companyId);
    formData.append('image', image);

    return this.http
      .post<any>(this.PATH + this.endpoint + '/image', formData, {
        observe: 'response',
        headers: {
          Authorization: localStorage.getItem('currentUser'),
        },
      })
      .toPromise();
  }
}
