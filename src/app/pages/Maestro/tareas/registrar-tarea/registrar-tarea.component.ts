import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { Tarea } from '../../Tarea';
import { MaestroService } from '../../maestro.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registrar-tarea',
  templateUrl: './registrar-tarea.component.html',
  styleUrls: ['./registrar-tarea.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-MX' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ]
})
export class RegistrarTareaComponent implements OnInit {

  formRegistrarTarea = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
    fecha_creacion: [''],
    fecha_entrega: ['', Validators.required],
    estatus_expiracion: [''],
    id_maestro: ['']
  });
  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private fb: FormBuilder, private maestroService: MaestroService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  get form(): any {
    return this.formRegistrarTarea?.controls;
  }


  registrarTarea() {
    if (this.formRegistrarTarea.valid) {
      let fecha_creacrion = new Date();
      let id_maestro = this.getIdMaestro();
      this.formRegistrarTarea.get('fecha_creacion').setValue(fecha_creacrion);
      this.formRegistrarTarea.get('estatus_expiracion').setValue(false);
      this.formRegistrarTarea.get('id_maestro').setValue(id_maestro);

      let nuevaTarea: Tarea = this.formRegistrarTarea.value;

      this.maestroService.registrarTarea(nuevaTarea).subscribe(
        result => {
          this._snackBar.open('Tarea registrada exitosamente', '', {
            duration: 2000,
            panelClass: 'error-alert-snackbar',
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        },
        error => {
          this._snackBar.open('Problemas al registrar la tarea, por favor inténtelo más tarde', '', {
            duration: 2000,
            panelClass: 'error-alert-snackbar',
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        }
      );
    }
  }


  getIdMaestro(): number {
    return Number(localStorage.getItem('idM'));
  }

}
