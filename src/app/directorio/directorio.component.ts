import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import {Company} from '../model/company.model'; 
import {CompanyService} from '../services/company.service';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent implements OnInit {
  
  dataJSON: any;
  directory:Object;
  companyPhones:Object;
  status: boolean;

  constructor(private loginService: LoginService, public companyService:CompanyService) {
    this.loginService.statusProvider.subscribe((status) => {
      this.status = status;
    });
  }

  ngOnInit(): void {
   this.getCompanies();
  }



  getCompanies(){
    return  this.companyService.getCompanies().then((data) => {
      this.dataJSON =JSON.stringify(data) 
      this.directory = JSON.parse(this.dataJSON);
      
    });
      
  }


  

}
