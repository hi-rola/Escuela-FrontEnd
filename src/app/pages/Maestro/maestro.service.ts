import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from './Tarea';

@Injectable({
  providedIn: 'root'
})
export class MaestroService {

  URL_BACKEND = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  getTareasByMaestro(id_maestro: any): Observable<any> {
    return this.http.get(this.URL_BACKEND + '/maestros/tareas/' + id_maestro);
  }

  registrarTarea(tarea: Tarea): Observable<any> {
    return this.http.post(this.URL_BACKEND + '/tareas/', tarea);
  }


  eliminarTarea(id_tarea: number): Observable<any> {
    return this.http.delete(this.URL_BACKEND + '/tareas/' + id_tarea);
  }
}
