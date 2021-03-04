import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateAdapter } from '@angular/material/core';
import { MaestroService } from '../../maestro.service';
import { Estudiante } from '../Estudiante';
import { Maestro } from '../../Maestro';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-actualizar-estudiante',
  templateUrl: './actualizar-estudiante.component.html',
  styleUrls: ['./actualizar-estudiante.component.scss']
})
export class ActualizarEstudianteComponent implements OnInit {

  private isValidEmail = /\S+@\S+\.\S+/;

  maestro: Maestro[];
  id_estudiante: number;
  correo: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  formActualizarEstudiante = this.fb.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    correo: [''],
    contrasena: ['', Validators.required],
    facultad: [''],
    experiencia_educativa: [''],
    rol: [''],
    estatus: [''],
    estatus_boolean: [''],
    id_maestro: [''],
  });

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private _adapter: DateAdapter<any>,
    private maestroService: MaestroService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.id_estudiante = this.data.id_estudiante;
    this.maestroService.getEstudianteById(this.id_estudiante).subscribe(
      (result: Estudiante) => {
        this.correo = result[0].correo;
        this.formActualizarEstudiante.get('nombre')?.setValue(result[0].nombre);
        this.formActualizarEstudiante.get('apellidos')?.setValue(result[0].apellidos);
      });

    this.maestroService.getMaestroById().subscribe(
      result => {
        this.maestro = result;
      }
    );
  }

  actualizarInformacion() {
    if (this.formActualizarEstudiante.valid) {
      let experiencia_educativa = this.maestro[0].experiencia_educativa;
      let facultad = this.maestro[0].facultad;
      let id_maestro = this.maestro[0].id_maestro;
      this.formActualizarEstudiante.get('facultad').setValue(facultad);
      this.formActualizarEstudiante.get('experiencia_educativa').setValue(experiencia_educativa);
      this.formActualizarEstudiante.get('rol').setValue('Estudiante');
      this.formActualizarEstudiante.get('correo').setValue(this.correo);
      this.formActualizarEstudiante.get('estatus').setValue('Activo');
      this.formActualizarEstudiante.get('estatus_boolean').setValue(true);
      this.formActualizarEstudiante.get('id_maestro').setValue(id_maestro);

      let datos = this.formActualizarEstudiante.value;

      this.maestroService.updateEstudiante(this.id_estudiante, datos).subscribe(
        result => {
          this._snackBar.open('Información actualizada exitosamente', '', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        },
        error => {
          this._snackBar.open('Problemas al procesar la solicitud, por favor inténtelo más tarde', '', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        });
    }
  }

  get form(): any {
    return this.formActualizarEstudiante?.controls;
  }

}
