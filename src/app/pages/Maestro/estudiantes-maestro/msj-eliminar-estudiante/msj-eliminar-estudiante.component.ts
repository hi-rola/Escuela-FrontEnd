import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-msj-eliminar-estudiante',
  templateUrl: './msj-eliminar-estudiante.component.html',
  styleUrls: ['./msj-eliminar-estudiante.component.scss']
})
export class MsjEliminarEstudianteComponent implements OnInit {

  nombre: string = '';
  apellidos: string;

  constructor(public dialogRef: MatDialogRef<MsjEliminarEstudianteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.nombre = this.data.nombre
    this.apellidos = this.data.apellidos
  }

}
