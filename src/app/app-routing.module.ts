import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/Maestro/home/home.component';
import { TareasComponent } from './pages/Maestro/tareas/tareas.component';
import { LoginComponent } from './shared/login/login.component';
import { EstadisticasTareaComponent } from './pages/Maestro/tareas/estadisticas-tarea/estadisticas-tarea.component';
import { EstudiantesMaestroComponent } from './pages/Maestro/estudiantes-maestro/estudiantes-maestro/estudiantes-maestro.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home-academico', component: HomeComponent
  },
  { path: 'tareas-academico', component: TareasComponent },
  { path: 'estadisticas-tarea', component: EstadisticasTareaComponent },
  { path: 'estudiantes-maestros', component: EstudiantesMaestroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }