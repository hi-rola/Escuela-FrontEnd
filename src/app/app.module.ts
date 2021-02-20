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
    RegistrarEstudianteComponent
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
    RegistrarEstudianteComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
