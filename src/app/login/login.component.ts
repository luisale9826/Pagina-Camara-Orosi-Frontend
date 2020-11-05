import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

  loading = false;

  error = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.loading = true;
    this.loginService
    .login(this.loginForm.get('username').value, this.loginForm.get('password').value)
    .then((res) => {
      localStorage.setItem('currentUser', res.headers.get('Authorization'));
      this.router.navigate(['/']);
    }).catch(err => {
      this.loading = false;
      this.error = 'Nombre de Usuario o Contraseña inválidos';
    });
    }

}
