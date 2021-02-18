import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  centered = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
   
  }

  tareas() {
    this.router.navigate(['/tareas-academico']);
  }


  

}
