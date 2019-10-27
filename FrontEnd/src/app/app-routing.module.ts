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
import {PreguntaMultipleComponent} from './components/pregunta-multiple/pregunta-multiple.component'; //importamos componente
import {PreguntaFvComponent} from './components/pregunta-fv/pregunta-fv.component'; //importamos componente
import {ListaUsuariosComponent} from './components/lista-usuarios/lista-usuarios.component'; //importamos componente
import {ListaUsuariosEditComponent} from './components/lista-usuarios-edit/lista-usuarios-edit.component'; //importamos componente
import {ActividadComponent} from './components/actividad/actividad.component'; //importamos componente
import {ActividadesVistaComponent} from './components/actividades-vista/actividades-vista.component'; //importamos componente
import {AuxiliarCursosAsigComponent} from './components/auxiliar-cursos-asig/auxiliar-cursos-asig.component'; //importamos componente
import {EvaluacionesVistaComponent} from './components/evaluaciones-vista/evaluaciones-vista.component'; //importamos componente
import {TicketComponent} from './components/ticket/ticket.component'; //importamos componente
import {TicketAdminComponent} from './components/ticket-admin/ticket-admin.component'; //importamos componente
import {ActividadRealizarComponent} from './components/actividad-realizar/actividad-realizar.component'; //importamos componente









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
  },
  {
    path: 'evaluacion/multiple/:id',
    component: PreguntaMultipleComponent
  },
  {
    path: 'evaluacion/verdadero/:id',
    component: PreguntaFvComponent
  },
  {
    path: 'lista_usuarios',
    component: ListaUsuariosComponent
  },
  {
    path: 'lista_usuarios/edit/:id',
    component: ListaUsuariosEditComponent
  },
  {
    path: 'auxiliar-cursos',
    component: AuxiliarCursosAsigComponent
  },
  {
    path: 'evaluaciones-vista/:id',
    component: EvaluacionesVistaComponent
  },
  {
    path: 'actividad',
    component: ActividadComponent
  },
  {
    path: 'actividades-vista/:id',
    component: ActividadesVistaComponent 
  },
  {
    path: 'actividades-realizar/:id',
    component: ActividadRealizarComponent
  },
  {
    path: 'ticket',
    component: TicketComponent
  },
  {
    path: 'ticket/admin',
    component: TicketAdminComponent
  }








 














];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
