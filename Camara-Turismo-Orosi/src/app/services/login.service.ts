import { HttpClient, HttpResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  readonly PATH = 'http://localhost:8080/';
  statusProvider: BehaviorSubject<boolean>;
  private status = false;

  constructor(private http: HttpClient, private router: Router) {
    if (localStorage.getItem('currentUser') !== null) {
      this.status = true;
    }
    this.statusProvider = new BehaviorSubject<boolean>(this.status);
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
      headers: localStorage.getItem('currentUser'),
    });
    localStorage.removeItem('currentUser');
    this.statusProvider.next(false);
    this.router.navigate(['/login']);
  }
}
