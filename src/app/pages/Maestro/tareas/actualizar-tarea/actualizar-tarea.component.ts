import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MaestroService } from '../../maestro.service';
import { Tarea } from '../../Tarea';

@Component({
  selector: 'app-actualizar-tarea',
  templateUrl: './actualizar-tarea.component.html',
  styleUrls: ['./actualizar-tarea.component.scss']
})
export class ActualizarTareaComponent implements OnInit {

  formActualizarTarea = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
    fecha_creacion: [''],
    fecha_entrega: ['', Validators.required],
    estatus_expiracion: [''],
    id_maestro: ['']
  });

  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private _adapter: DateAdapter<any>,
    private maestroService: MaestroService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    let id_tarea = Number(this.data.id_tarea);
    this.maestroService.getTareaById(id_tarea).subscribe(
      (result: Tarea) => {
        this.formActualizarTarea.get('nombre')?.setValue(result[0].nombre);
        this.formActualizarTarea.get('descripcion')?.setValue(result[0].descripcion);
        this.formActualizarTarea.get('fecha_entrega')?.setValue(result[0].fecha_entrega);
      }
    )
  }

  get form(): any {
    return this.formActualizarTarea?.controls;
  }

  actualizarTarea() {
    if (this.formActualizarTarea.value) {
      let fecha_creacrion = new Date();
      let id_maestro = this.getIdMaestro();
      this.formActualizarTarea.get('fecha_creacion').setValue(fecha_creacrion);
      this.formActualizarTarea.get('estatus_expiracion').setValue(false);
      this.formActualizarTarea.get('id_maestro').setValue(id_maestro);

      let tareaInformacion: Tarea = this.formActualizarTarea.value;
      let id_tarea = this.data.id_tarea;

      this.maestroService.actualizarTarea(id_tarea, tareaInformacion).subscribe(
        result => {
          this._snackBar.open('Información actualizada exitosamente', '', {
            duration: 2000,
            panelClass: 'error-alert-snackbar',
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        },
        error => {
          this._snackBar.open('Problemas al actualizar la información, por favor inténtelo más tarde', '', {
            duration: 2000,
            panelClass: 'error-alert-snackbar',
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        }
      )
    }

  }

  getIdMaestro(): number {
    return Number(localStorage.getItem('idM'));
  }

}
