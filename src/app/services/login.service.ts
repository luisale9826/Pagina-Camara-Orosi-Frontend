import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly PATH = environment.BASICURL;
  private jwtHelper = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  get currentUser(): string {
    return localStorage.getItem('currentUser');
  }

  get user(): string {
    return localStorage.getItem('userName');
  }

  public isAuthenticated(): boolean {
    const token = this.currentUser;
    return this.jwtHelper.isTokenExpired(token);
  }

  login(userName: string, password: string): Promise<HttpResponse<any>> {
    return this.http
      .post<any>(
        `${this.PATH}login`,
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
    this.router.navigate(['/login']).then(() => location.reload());
  }
}
