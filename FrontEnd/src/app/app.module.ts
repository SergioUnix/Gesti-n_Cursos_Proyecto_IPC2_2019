import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';//tambien se necesita importa HttpClientModule
import {FormsModule} from '@angular/forms';  //necesario para lanzar mis datos por medio de [NGModel]


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HorarioFormComponent } from './components/horario-form/horario-form.component';
import { SeccionFormComponent } from './components/seccion-form/seccion-form.component';
import { CursoFormComponent } from './components/curso-form/curso-form.component';
import { HorarioEditComponent } from './components/horario-edit/horario-edit.component';

import {HorariosService} from './servicios/horarios.service'
import {UsuariosService} from './servicios/usuarios.service';
import { SeccionService } from './servicios/seccion.service';
import { CursosService } from './servicios/cursos.service';
import { AsigAuxService } from './servicios/asig-aux.service';
import { AsigEstuService } from './servicios/asig-estu.service';



import { SeccionEditComponent } from './components/seccion-edit/seccion-edit.component';
import { RegistroAuxiliarComponent } from './components/registro-auxiliar/registro-auxiliar.component';
import { RegistroAuxiliarEditComponent } from './components/registro-auxiliar-edit/registro-auxiliar-edit.component';
import { RegistroEstudianteComponent } from './components/registro-estudiante/registro-estudiante.component';
import { CursoEditComponent } from './components/curso-edit/curso-edit.component';
import { AsignacionAuxiliarComponent } from './components/asignacion-auxiliar/asignacion-auxiliar.component';
import { AsignarComponent } from './components/asignar/asignar.component';
import { ForoComponent } from './components/foro/foro.component';
import { ActividadComponent } from './components/actividad/actividad.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { PublicaListComponent } from './components/publica-list/publica-list.component';
import { PreguntaMultipleComponent } from './components/pregunta-multiple/pregunta-multiple.component';
import { PreguntaFvComponent } from './components/pregunta-fv/pregunta-fv.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { ListaUsuariosEditComponent } from './components/lista-usuarios-edit/lista-usuarios-edit.component';
import { EvaluacionesVistaComponent } from './components/evaluaciones-vista/evaluaciones-vista.component';
import { ActividadesVistaComponent } from './components/actividades-vista/actividades-vista.component';
import { AuxiliarCursosAsigComponent } from './components/auxiliar-cursos-asig/auxiliar-cursos-asig.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilComponent,
    NavigationComponent,
    HorarioFormComponent,
    SeccionFormComponent,
    CursoFormComponent,
    HorarioEditComponent,
    SeccionEditComponent,
    RegistroAuxiliarComponent,
    RegistroAuxiliarEditComponent,
    RegistroEstudianteComponent,
    CursoEditComponent,
    AsignacionAuxiliarComponent,
    AsignarComponent,
    ForoComponent,
    ActividadComponent,
    EvaluacionComponent,
    PublicaListComponent,
    PreguntaMultipleComponent,
    PreguntaFvComponent,
    ListaUsuariosComponent,
    ListaUsuariosEditComponent,
    EvaluacionesVistaComponent,
    ActividadesVistaComponent,
    AuxiliarCursosAsigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,         //escribo aca el httpClientModule
    FormsModule,             //necesario ponerlo para enlazar datos con el objeto creado tipo interfaz
    AppRoutingModule
  ],
  providers: [
    UsuariosService,  /// permite poder tener los metodos para pedir datos
    HorariosService,
    SeccionService,
    CursosService,
    AsigAuxService,
    AsigEstuService




  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
