import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-msj-eliminar-tarea',
  templateUrl: './msj-eliminar-tarea.component.html',
  styleUrls: ['./msj-eliminar-tarea.component.scss']
})
export class MsjEliminarTareaComponent implements OnInit {


  nombre: string = '';

  constructor(public dialogRef: MatDialogRef<MsjEliminarTareaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.nombre = this.data.nombre
  }

}
