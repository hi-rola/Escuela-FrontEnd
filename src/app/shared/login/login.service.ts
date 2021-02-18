import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL_BACKEND = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  login(correo : any, contrasena : any): Observable<any> {
    let datos = [correo, contrasena]
    return this.http.post(this.URL_BACKEND + '/maestros/login', datos);
  }
}
