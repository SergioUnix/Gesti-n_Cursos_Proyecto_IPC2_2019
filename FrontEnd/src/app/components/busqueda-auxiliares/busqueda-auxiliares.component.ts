import { Component, OnInit, HostBinding } from '@angular/core';
import { AsigAuxService} from 'src/app/servicios/asig-aux.service';
import { Router } from '@angular/router';
import {Asig_Aux } from 'src/app/modelos/Asig_Aux';
import {Foro } from 'src/app/modelos/Foro';
import { NgForm } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { CursosService } from 'src/app/servicios/cursos.service';


@Component({
  selector: 'app-busqueda-auxiliares',
  templateUrl: './busqueda-auxiliares.component.html',
  styleUrls: ['./busqueda-auxiliares.component.css']
})
export class BusquedaAuxiliaresComponent implements OnInit {
  @HostBinding('class') classes='row';  //necesario para desplegar un juego a la par de otro 
  usuarios: any=[];
 



  constructor(private asigauxService:AsigAuxService,private usuariosService: UsuariosService,private cursosService:CursosService, private router: Router) { }

filterPost ='';


  ngOnInit() {
   //metodo que verifica si hay usuario logueado
   this.loginExist();
   ///Obtengo los usuarios Auxiliares
   this.getUsuarios_Aux();


  }

 


//obtengo los auxiliares guardados
getUsuarios_Aux(){
  this.usuariosService.getUsuarios_auxiliares().subscribe(  /// 
    res => {
    this.usuarios= res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
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
