import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  status: boolean;
  constructor(private loginService: LoginService) {
    this.loginService.statusProvider.subscribe((status) => {
      this.status = status;
    });
  }

  ngOnInit(): void {}

  logout(): void {
    this.loginService.logout();
  }
}
