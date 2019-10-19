import { Component, OnInit, HostBinding } from '@angular/core';
import {Route, Router, ActivatedRoute} from '@angular/router'; /// sierve para cuando guarde me redireccione a la vista usuario

import { Usuario } from 'src/app/modelos/Usuario';   //importo el tipo de dato,

import {UsuariosService} from '../../servicios/usuarios.service'; ///importo el servicio
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @HostBinding('class') classes='row';  //necesario para desplegar un producto a la par de otro 

public isError=false; 

  usuario: Usuario ={
    cod_usuario: 0,
    nombre: '',
    carne: '',
    correo: '',
    pasword: '',
    cod_rol_fk: 0,
  };

  constructor(private usuariosService:UsuariosService, private router: Router) { }

  ngOnInit() {
    //metodo que verifica si hay usuario logueado
    this.loginExist();


  
  
  
  }


Visualizar_Error(){
  this.isError=true; 
  setTimeout(( ) =>{this.isError= false;}   ,   3000);
}



onLogin(form:NgForm){
 // console.log( form);
if(form.valid){
this.setUsuario();
}else{
this.Visualizar_Error();
}

}






  setUsuario(){    
  this.usuariosService.loginUsuario(this.usuario.correo,this.usuario.pasword)
  .subscribe(
  res=> {      
    this.usuario=res;
    this.usuariosService.setSesion(this.usuario);
    this.usuariosService.setlog();
    this.isError=false; 
    location.reload();
    },
  err=>{
    this.Visualizar_Error();
    ///console.error(err);
  }
  )}
























loginExist(){
   ///si esta logueado redirecciona a productos
   if(this.usuariosService.getSesionNombre()==''){
    console.log("No Logeado ");
   
  }else{this.router.navigate(['/perfil']);}
}


}



