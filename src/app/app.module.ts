import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialDesignModule } from './models/MaterialDesing.module';

//componentes
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/Maestro/home/home.component';
import { TareasComponent } from './pages/Maestro/tareas/tareas.component';
import { EstudiantesComponent } from './pages/Maestro/estudiantes/estudiantes.component';
import { LoginComponent } from './shared/login/login.component';
import { RegistrarTareaComponent } from './pages/Maestro/tareas/registrar-tarea/registrar-tarea.component';
import { MsjEliminarTareaComponent } from './pages/Maestro/tareas/msj-eliminar-tarea/msj-eliminar-tarea.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TareasComponent,
    EstudiantesComponent,
    LoginComponent,
    RegistrarTareaComponent,
    MsjEliminarTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    HttpClientModule
  ],
  entryComponents: [
    RegistrarTareaComponent, MsjEliminarTareaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
