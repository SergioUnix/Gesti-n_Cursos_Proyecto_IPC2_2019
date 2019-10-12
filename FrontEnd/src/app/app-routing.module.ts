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
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
