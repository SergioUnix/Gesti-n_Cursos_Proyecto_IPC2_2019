import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './components/login/login.component'; //importamos componente
import {PerfilComponent} from './components/perfil/perfil.component'; //importamos componente
import {HorarioFormComponent} from './components/horario-form/horario-form.component'; //importamos componente
import {HorarioEditComponent} from './components/horario-edit/horario-edit.component'; //importamos componente


import {SeccionFormComponent} from './components/seccion-form/seccion-form.component'; //importamos componente
import {SeccionEditComponent} from './components/seccion-edit/seccion-edit.component'; //importamos componente
import {RegistroAuxiliarComponent} from './components/registro-auxiliar/registro-auxiliar.component'; //importamos componente
import {RegistroAuxiliarEditComponent} from './components/registro-auxiliar-edit/registro-auxiliar-edit.component'; //importamos componente
import {RegistroEstudianteComponent} from './components/registro-estudiante/registro-estudiante.component'; //importamos componente
import {CursoFormComponent} from './components/curso-form/curso-form.component'; //importamos componente
import {CursoEditComponent} from './components/curso-edit/curso-edit.component'; //importamos componente
import {AsignacionAuxiliarComponent} from './components/asignacion-auxiliar/asignacion-auxiliar.component'; //importamos componente
import {AsignarComponent} from './components/asignar/asignar.component'; //importamos componente
import {ForoComponent} from './components/foro/foro.component'; //importamos componente
import {PublicaListComponent} from './components/publica-list/publica-list.component'; //importamos componente
import {EvaluacionComponent} from './components/evaluacion/evaluacion.component'; //importamos componente




const routes: Routes = [

  
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
    
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'horario',
    component: HorarioFormComponent
  },
  {
  path: 'horario/edit/:id',
  component: HorarioEditComponent
  },
  {
    path: 'seccion',
    component: SeccionFormComponent
  },
  {
    path: 'seccion/edit/:id',
    component: SeccionEditComponent
  },
  {
    path: 'auxiliar',
    component: RegistroAuxiliarComponent
  },
  {
    path: 'auxiliar/edit/:id',
    component: RegistroAuxiliarEditComponent
  },
  {
    path: 'estudiante',
    component: RegistroEstudianteComponent
  },
  {
    path: 'curso',
    component: CursoFormComponent
  },
  {
    path: 'curso/edit/:id',
    component: CursoEditComponent
  },
  {
    path: 'asig_auxiliar',
    component: AsignacionAuxiliarComponent
  },
  {
    path: 'asignar',
    component: AsignarComponent
  },
  {
    path: 'foro/:id',
    component: ForoComponent
  },
  {
    path: 'foro/publicacion/:id',
    component: PublicaListComponent
  },
  {
    path: 'evaluacion',
    component: EvaluacionComponent
  }









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
