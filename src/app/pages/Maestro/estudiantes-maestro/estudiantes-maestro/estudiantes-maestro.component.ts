import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MaestroService } from '../../maestro.service';
import { RegistrarEstudianteComponent } from '../registrar-estudiante/registrar-estudiante.component';
import { Estudiante } from '../Estudiante';
import { MsjEliminarEstudianteComponent } from '../msj-eliminar-estudiante/msj-eliminar-estudiante.component';
import { ActualizarEstudianteComponent } from '../actualizar-estudiante/actualizar-estudiante.component';

@Component({
  selector: 'app-estudiantes-maestro',
  templateUrl: './estudiantes-maestro.component.html',
  styleUrls: ['./estudiantes-maestro.component.scss']
})
export class EstudiantesMaestroComponent implements OnInit {

  listEstudiantes: [] = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private maestroService: MaestroService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getEstudianteByMaestro();
  }

  dialogRegistrarEstudiante() {
    const dialogRef = this.dialog.open(RegistrarEstudianteComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        setTimeout(() => {
          this.ngOnInit();
          this.getEstudianteByMaestro();
        }, 3000);
      }
    });
  }

  getEstudianteByMaestro() {
    let id_mestro = this.getIdMaestro();
    this.maestroService.getEstudianteByMaestro(id_mestro).subscribe(
      result => {
        this.listEstudiantes = result;
      }
    );
  }

  dialogEliminarEstudiante(estudiante: Estudiante) {
    const dialogRef = this.dialog.open(MsjEliminarEstudianteComponent, {
      width: '450px',
      data: { nombre: estudiante.nombre, apellidos: estudiante.apellidos }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.maestroService.eliminarEstudiante(estudiante.id_estudiante).subscribe(
          result => {
            this.ngOnInit();
            this._snackBar.open('Estudiante eliminado exitosamente', '', {
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
          }
        );
      }
    });
  }

  dialogActualizarEstudiante(estudiante: Estudiante) {
    const dialogRef = this.dialog.open(ActualizarEstudianteComponent, {
      width: '450px',
      data: { id_estudiante: estudiante.id_estudiante }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        setTimeout(() => {
          this.ngOnInit();
        }, 3000)
      }
    });
  }

  getIdMaestro(): number {
    return Number(localStorage.getItem('idM'));
  }

}
