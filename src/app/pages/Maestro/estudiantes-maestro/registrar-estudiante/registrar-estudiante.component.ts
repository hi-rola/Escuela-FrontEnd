import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Maestro } from '../../Maestro';
import { MaestroService } from '../../maestro.service';

@Component({
  selector: 'app-registrar-estudiante',
  templateUrl: './registrar-estudiante.component.html',
  styleUrls: ['./registrar-estudiante.component.scss']
})
export class RegistrarEstudianteComponent implements OnInit {
  private isValidEmail = /\S+@\S+\.\S+/;

  maestro: Maestro[];

  formRegistrarEstudiante = this.fb.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    correo: ['', [Validators.required, Validators.pattern(this.isValidEmail)]],
    contrasena: ['', Validators.required],
    facultad: [''],
    experiencia_educativa: [''],
    rol: [''],
    estatus: [''],
    estatus_boolean: [''],
    id_maestro: [''],
  });

  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  constructor(private fb: FormBuilder, private maestroService: MaestroService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.maestroService.getMaestroById().subscribe(
      result => {
        this.maestro = result;
      }
    );
  }

  get form(): any {
    return this.formRegistrarEstudiante?.controls;
  }

  registrarEstudiante() {
    if (this.formRegistrarEstudiante.valid) {
      let id_maestro = this.getIdMaestro();
      let experiencia_educativa = this.maestro[0].experiencia_educativa;
      let facultad = this.maestro[0].facultad;
      this.formRegistrarEstudiante.get('facultad').setValue(facultad);
      this.formRegistrarEstudiante.get('experiencia_educativa').setValue(experiencia_educativa);
      this.formRegistrarEstudiante.get('rol').setValue('Estudiante');
      this.formRegistrarEstudiante.get('estatus').setValue('Activo');
      this.formRegistrarEstudiante.get('estatus_boolean').setValue(true);
      this.formRegistrarEstudiante.get('id_maestro').setValue(id_maestro);
      let nuevoEstudiante = this.formRegistrarEstudiante.value;
      this.maestroService.registrarEstudiante(nuevoEstudiante).subscribe(
        result => {
          this._snackBar.open('Estudiante registrado exitosamente', '', {
            duration: 2000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        },
        error => {
          if (error.error.message === 'Correo existente, ingrese otro por favor.') {
            this._snackBar.open(error.error.message, '', {
              duration: 2000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
          } else {
            this._snackBar.open('Problemas al registrar el estudiante, por favor inténtelo más tarde', '', {
              duration: 2000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
          }
        }

      )
    }
  }

  getIdMaestro(): number {
    return Number(localStorage.getItem('idM'));
  }

}
