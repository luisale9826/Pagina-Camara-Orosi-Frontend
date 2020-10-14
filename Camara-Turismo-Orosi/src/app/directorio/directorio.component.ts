import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent implements OnInit {

  status: boolean;
  constructor(private loginService: LoginService) {
    this.loginService.statusProvider.subscribe((status) => {
      this.status = status;
    });
  }

  ngOnInit(): void {
  }

}
