import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/Maestro/home/home.component';
import { TareasComponent } from './pages/Maestro/tareas/tareas.component';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home-academico', component: HomeComponent },
  { path: 'tareas-academico', component: TareasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
