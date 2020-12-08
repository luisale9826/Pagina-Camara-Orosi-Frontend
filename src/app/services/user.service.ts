import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly PATHADMIN = `${environment.ADMINURL}user`;
  private readonly headers = { Authorization: this.loginService.currentUser };

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {}

  get getUsers(): Promise<User[]> {
    return this.httpClient
      .get<User[]>(this.PATHADMIN, { headers: this.headers })
      .toPromise();
  }

  public insertarUser(user: User): Promise<any> {
    return this.httpClient
      .post<User>(this.PATHADMIN, user, { observe: 'response', headers: this.headers })
      .toPromise();
  }

  public modificarUser(user: User): Promise<any> {
    return this.httpClient
      .put<User>(this.PATHADMIN, user, { observe: 'response', headers: this.headers })
      .toPromise();
  }

  eliminarUser(companyId: any): Promise<any> {
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
}
