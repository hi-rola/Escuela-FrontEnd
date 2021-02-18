import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private isValidEmail = /\S+@\S+\.\S+/;
  loading = false;
  mensaje = true;
  hide = true;

  formLogin = this.fb.group({
    correo: ['', [Validators.required, Validators.pattern(this.isValidEmail)]],
    contrasena: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  get form() {
    return this.formLogin?.controls;
  }

  iniciarSesion() {
    if (this.formLogin.valid) {
      this.loading = true;
      let correo = this.formLogin.get('correo').value;
      let contrasena = this.formLogin.get('contrasena').value;
      this.loginService.login(correo, contrasena).subscribe(
        result => {
          if (result.message) {
            this.mensaje = false;
            this.loading = false;
          } else {
            this.loading = false;
            this.router.navigate(['/home-academico']);
            localStorage.setItem('idM', result.user[0].id_maestro);
            localStorage.setItem('nombre', result.user[0].nombre);
            localStorage.setItem('apellidos', result.user[0].apellidos);
          }
        }
      );
    }
  }
}