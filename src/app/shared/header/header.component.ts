import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nombreMaestro: string;

  constructor() { }

  ngOnInit(): void {
    this.getNombre();
  }

  getNombre(): string {
    return this.nombreMaestro = localStorage.getItem('nombre') + ' ' + localStorage.getItem('apellidos');
  }

}
