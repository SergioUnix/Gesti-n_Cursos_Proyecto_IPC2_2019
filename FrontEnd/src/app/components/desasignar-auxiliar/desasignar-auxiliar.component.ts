import { Component, OnInit, HostBinding } from '@angular/core';
import { AsigAuxService} from 'src/app/servicios/asig-aux.service';
import { Router } from '@angular/router';
import {Asig_Aux } from 'src/app/modelos/Asig_Aux';
import {Foro } from 'src/app/modelos/Foro';
import { NgForm } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { CursosService } from 'src/app/servicios/cursos.service';


@Component({
  selector: 'app-desasignar-auxiliar',
  templateUrl: './desasignar-auxiliar.component.html',
  styleUrls: ['./desasignar-auxiliar.component.css']
})
export class DesasignarAuxiliarComponent implements OnInit {
  asig_Auxiliares: any=[];
  constructor(private asigauxService:AsigAuxService,private usuariosService: UsuariosService,private cursosService:CursosService, private router: Router) { }
  filterAsig ='';
  ngOnInit() {

       //metodo que verifica si hay usuario logueado
   this.loginExist();
 
   //Obtengo todas las asignaciones de auxiliares que se han realizado
  this.getAsig_Aux();
  }






///obtiene todas las asignaciones que se han hecho de auxiliares
getAsig_Aux(){
  this.asigauxService.getAsig_auxiliares().subscribe(  /// 
    res => {
    this.asig_Auxiliares= res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
    },
    err => console.error(err)
    );}


///////////////////
loginExist(){
  ///si no esta logueado redirecciona a login
  if(this.usuariosService.getSesionNombre()==''){
  this.router.navigate(['/login']);    
 }}



}
