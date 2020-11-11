import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, combineAll, map} from 'rxjs/operators';
import { Company } from '../model/company.model';
import { environment } from 'src/environments/environment';



@Injectable()
export class CompanyService{
    
    title = 'app';
    affiliates: any;
    url = 'http://localhost:8080/visiter/cto/directory';
    url2='http://localhost:8080/management/cto/directory';

    constructor(private http: HttpClient){
        
    }
      

      getCompanies(): Promise<Company> {
        return this.http.get<Company>(`${this.url}`).toPromise();
      }



      
}