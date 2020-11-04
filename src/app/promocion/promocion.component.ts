import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PromocionService } from '../services/promocion.service';
import {Promocion} from '../models/Promocion'


@Component({
  selector: 'app-promocion',
  templateUrl: './promocion.component.html',
  styleUrls: ['./promocion.component.css']
})
export class PromocionComponent implements OnInit {

  titulo=null;
  nombreEmpresa=null;
  fechaFin=null;
  descripcion=null;

  promocionForm = new FormGroup({
    titulo: new FormControl(''),
    nombreEmpresa: new FormControl(''),
    fechaFin: new FormControl(''),
    descripcion: new FormControl(''),
    imagenPromocion: new FormControl('')
  });


  error = '';
  promocion:Promocion=new Promocion();
  constructor(private promocionService: PromocionService, private router: Router) { }

  ngOnInit(): void {
    
  }

  public onSubmit(): void {
    
    this.promocionService.insertPromotion(this.promocion)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(["listar"]);
    })
   
    }

}
