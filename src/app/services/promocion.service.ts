import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Promocion } from '../models/Promocion';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PromocionService {
  readonly PATH = environment.apiURL;

  productoURL = 'http://localhost:8080/producto/';

  constructor(private httpClient: HttpClient) { }

  Url='http://localhost:8080/visiter/promotion/agregar';


  insertPromotion(promocion:Promocion){
    return this.httpClient.post<Promocion>(this.PATH + "visiter/promotion/addPromotion",promocion);
  }

  getPromotions(){
    return this.httpClient.get<Promocion[]>(this.PATH + "visiter/promotion");
  }

 
}
