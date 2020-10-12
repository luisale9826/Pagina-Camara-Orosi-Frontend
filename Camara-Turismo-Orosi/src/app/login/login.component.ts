import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private service: LoginService) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.service.login(this.loginForm.get('username').value, this.loginForm.get('password').value)
    .subscribe((data: HttpResponse<any>) => {
      console.log(data.headers.get('Authorization'));
    });
  }

}
