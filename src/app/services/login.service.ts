import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  readonly PATH = environment.apiURL;
  jwtHelper = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  get currentUser(): any {
    return localStorage.getItem('currentUser');
  }

  public isAuthenticated(): boolean {
    const token = this.currentUser;
    return this.jwtHelper.isTokenExpired(token);
  }

  login(userName: string, password: string): Promise<HttpResponse<any>> {
    return this.http
      .post<any>(
        this.PATH + 'login',
        { userName, password },
        { observe: 'response' }
      )
      .toPromise();
  }

  logout(): void {
    this.http.post<any>(this.PATH + 'logout', {
      headers: this.currentUser,
    });
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
