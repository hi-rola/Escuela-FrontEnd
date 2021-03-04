import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MaestroService } from '../maestro.service';
import { Tarea } from '../Tarea';
import { RegistrarTareaComponent } from './registrar-tarea/registrar-tarea.component';
import { MsjEliminarTareaComponent } from './msj-eliminar-tarea/msj-eliminar-tarea.component';
import { ActualizarTareaComponent } from './actualizar-tarea/actualizar-tarea.component';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {
  centered = false;
  listTareas: Tarea[] = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private maestroService: MaestroService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getTareasByMaestro();
  }

  getTareasByMaestro() {
    let id_mestro = this.getId();
    this.maestroService.getTareasByMaestro(id_mestro).subscribe(
      (result: Tarea[]) => {
        this.listTareas = result;
      }
    );
  }

  dialogRegistrarTarea() {
    const dialogRef = this.dialog.open(RegistrarTareaComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        setTimeout(() => {
          this.ngOnInit();
          this.getTareasByMaestro();
        }, 3000);
      }
    });
  }

  dialogEliminarTarea(tarea: Tarea) {
    const dialogRef = this.dialog.open(MsjEliminarTareaComponent, {
      width: '450px',
      data: { nombre: tarea.nombre }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.maestroService.eliminarTarea(tarea.id_tarea).subscribe(
          result => {
            this.ngOnInit();
            this._snackBar.open('Tarea eliminada exitosamente', '', {
              duration: 2000,
              panelClass: 'error-alert-snackbar',
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
          },
          error => {
            this._snackBar.open('Problemas al eliminar la tarea, por favor inténtelo más tarde', '', {
              duration: 2000,
              panelClass: 'error-alert-snackbar',
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
          }
        );
      }
    });
  }

  dialogActualizarTarea(tarea: Tarea) {
    const dialogRef = this.dialog.open(ActualizarTareaComponent, {
      width: '450px',
      data: { id_tarea: tarea.id_tarea }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        setTimeout(() => {
          this.ngOnInit();
          this.getTareasByMaestro();
        }, 3000);
      }
    });
  }

  getId(): string {
    return localStorage.getItem('idM');
  }

}