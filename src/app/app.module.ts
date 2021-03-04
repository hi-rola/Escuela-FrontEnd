import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialDesignModule } from './models/MaterialDesing.module';

import { ChartsModule } from 'ng2-charts';

//componentes
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/Maestro/home/home.component';
import { TareasComponent } from './pages/Maestro/tareas/tareas.component';
import { LoginComponent } from './shared/login/login.component';
import { RegistrarTareaComponent } from './pages/Maestro/tareas/registrar-tarea/registrar-tarea.component';
import { MsjEliminarTareaComponent } from './pages/Maestro/tareas/msj-eliminar-tarea/msj-eliminar-tarea.component';
import { ActualizarTareaComponent } from './pages/Maestro/tareas/actualizar-tarea/actualizar-tarea.component';
import { EstadisticasTareaComponent } from './pages/Maestro/tareas/estadisticas-tarea/estadisticas-tarea.component';
import { EstudiantesMaestroComponent } from './pages/Maestro/estudiantes-maestro/estudiantes-maestro/estudiantes-maestro.component';
import { RegistrarEstudianteComponent } from './pages/Maestro/estudiantes-maestro/registrar-estudiante/registrar-estudiante.component';
import { MsjEliminarEstudianteComponent } from './pages/Maestro/estudiantes-maestro/msj-eliminar-estudiante/msj-eliminar-estudiante.component';
import { ActualizarEstudianteComponent } from './pages/Maestro/estudiantes-maestro/actualizar-estudiante/actualizar-estudiante.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TareasComponent,
    LoginComponent,
    RegistrarTareaComponent,
    MsjEliminarTareaComponent,
    ActualizarTareaComponent,
    EstadisticasTareaComponent,
    EstudiantesMaestroComponent,
    RegistrarEstudianteComponent,
    MsjEliminarEstudianteComponent,
    ActualizarEstudianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    HttpClientModule,
    ChartsModule
  ],
  entryComponents: [
    RegistrarTareaComponent, MsjEliminarTareaComponent, ActualizarTareaComponent,
    RegistrarEstudianteComponent, MsjEliminarEstudianteComponent,
    ActualizarEstudianteComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
