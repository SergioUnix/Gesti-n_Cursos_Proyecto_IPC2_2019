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
import { SeccionEditComponent } from './components/seccion-edit/seccion-edit.component';
import { RegistroAuxiliarComponent } from './components/registro-auxiliar/registro-auxiliar.component';
import { RegistroAuxiliarEditComponent } from './components/registro-auxiliar-edit/registro-auxiliar-edit.component';

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
    RegistroAuxiliarEditComponent
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
    SeccionService  



  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
