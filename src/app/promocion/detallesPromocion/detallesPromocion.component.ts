import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Promocion } from 'src/app/models/Promocion';
import { PromocionService } from 'src/app/services/promocion.service';




@Component({
  selector: 'app-detallesPromocion',
  templateUrl: './detallesPromocion.component.html',
  styleUrls: ['./detallesPromocion.component.css']
})
export class DetallesPromocionComponent implements OnInit {

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

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let json=localStorage.getItem("jsonPromocion");
    this.promocion = JSON.parse(json);
    console.log(this.promocion.title);
   
  }

}
