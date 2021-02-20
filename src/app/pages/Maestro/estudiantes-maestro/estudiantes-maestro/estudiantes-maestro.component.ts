import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaestroService } from '../../maestro.service';
import { RegistrarEstudianteComponent } from '../registrar-estudiante/registrar-estudiante.component';

@Component({
  selector: 'app-estudiantes-maestro',
  templateUrl: './estudiantes-maestro.component.html',
  styleUrls: ['./estudiantes-maestro.component.scss']
})
export class EstudiantesMaestroComponent implements OnInit {

  listEstudiantes: [] = [];

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

  getIdMaestro(): number {
    return Number(localStorage.getItem('idM'));
  }

}
