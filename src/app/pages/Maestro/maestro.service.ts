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

  getTareaById(id_tarea: number): Observable<any> {
    return this.http.get(this.URL_BACKEND + '/tareas/' + id_tarea);
  }

  registrarTarea(tarea: Tarea): Observable<any> {
    return this.http.post(this.URL_BACKEND + '/tareas/', tarea);
  }

  eliminarTarea(id_tarea: number): Observable<any> {
    return this.http.delete(this.URL_BACKEND + '/tareas/' + id_tarea);
  }

  actualizarTarea(id_tarea: number, tarea: Tarea): Observable<any> {
    return this.http.put(this.URL_BACKEND + '/tareas/' + id_tarea, tarea);
  }

  getEstadisticas(): Observable<any> {
    return this.http.get('http://localhost:3000/api/tareas-estudiantes/2');
  }

  getMaestroById(): Observable<any> {
    return this.http.get(this.URL_BACKEND + '/maestros/' + this.getIdMaestro());
  }

  getIdMaestro(): number {
    return Number(localStorage.getItem('idM'));
  }

  getEstudianteByMaestro(id_maestro: number): Observable<any> {
    return this.http.get(this.URL_BACKEND + '/maestros/estudiantes/' + id_maestro)
  }

  registrarEstudiante(nuevoEstudiante: any): Observable<any> {
    return this.http.post(this.URL_BACKEND + '/estudiantes/', nuevoEstudiante);
  }

  getEstudianteById(id_estudiane: number): Observable<any> {
    return this.http.get(this.URL_BACKEND + '/estudiantes/' + id_estudiane);
  }

  eliminarEstudiante(id_estudiante: number): Observable<any> {
    return this.http.delete(this.URL_BACKEND + '/estudiantes/' + id_estudiante)
  }

  updateEstudiante(id_estudiante: number, datos: any): Observable<any> {
    return this.http.put(this.URL_BACKEND + '/estudiantes/' + id_estudiante, datos);
  }
}