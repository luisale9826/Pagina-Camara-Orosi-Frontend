import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class WebConfigService {
  private readonly PATHADMIN = `${environment.ADMINURL}configuration`;
  private readonly PATHVISITER = `${environment.VISITERURL}configuration`;
  private readonly headers = { Authorization: this.loginService.currentUser };

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {}

  updateImage(path: string, file: File): Promise<any> {
    const formData = new FormData();
    formData.append('path', path);
    formData.append('file', file);
    return this.httpClient
      .post(`${this.PATHADMIN}/image`, formData, {
        observe: 'response',
        headers: this.headers,
      })
      .toPromise();
  }

  editText(position: string, text: string): Promise<any> {
    const formData = new FormData();
    formData.append('position', position);
    formData.append('text', text);
    return this.httpClient
      .post(`${this.PATHADMIN}/text`, formData, {
        observe: 'response',
        headers: this.headers,
      })
      .toPromise();
  }

  getImage(path: string): Promise<any> {
    return this.httpClient
      .get(`${this.PATHVISITER}/images`, { params: { path } })
      .toPromise();
  }

  getLocalStorageItem(variable: string): string | null {
    return localStorage.getItem(variable);
  }

  saveLocalStorageItem(variableName: string, variable: string): void {
    localStorage.setItem(variableName, variable);
  }

  deleteLocalStorageItem(variable: string): void {
    localStorage.removeItem(variable);
  }

  getText(text: string): Promise<any> {
    return this.httpClient
      .get(`${this.PATHVISITER}/text`, { params: { text } })
      .toPromise();
  }
}
