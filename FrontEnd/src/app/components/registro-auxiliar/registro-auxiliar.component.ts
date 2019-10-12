import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/Usuario';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro-auxiliar',
  templateUrl: './registro-auxiliar.component.html',
  styleUrls: ['./registro-auxiliar.component.css']
})
export class RegistroAuxiliarComponent implements OnInit {
  @HostBinding('class') classes='row';  //necesario para desplegar un juego a la par de otro 
  usuarios: any=[];
  public isError=false; 
  public isExito=false; 

  
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
   ///Obtengo los usuarios Auxiliares
   this.getUsuarios_Aux();

  }




///manejar el form y alertas
  
Visualizar_Exito(){
  this.isExito=true; 
  setTimeout(( ) =>{this.isExito= false;}   ,   4000);
}


Visualizar_Error(){
  this.isError=true; 
  setTimeout(( ) =>{this.isError= false;}   ,   4000);
}
 

onAuxiliar(form:NgForm){
  // console.log( form);
 if(form.valid){
 this.saveUsuario();
 }else{
 this.Visualizar_Error();
 }
 
 }
 





 //Guardar Auxiliar
  saveUsuario(){    
    delete this.usuario.cod_usuario;
    this.usuariosService.saveUsuario(this.usuario)
    .subscribe(
      res=> { 
      // this.router.navigate(['/']);
      console.log('Usuario registrado');
      this.getUsuarios_Aux();
      this.Visualizar_Exito();
      },
      err=> console.error(err)
  
    ) 
  
  
      }






 ///Metodo para eliminar un Usuario atravez del id
 deleteUsuario(id: string){
  this.usuariosService.deleteUsuario(id).subscribe(  /// 
  res => {    
    this.getUsuarios_Aux();     //pido el meodo de pintar los auxiliares para que se vea el cambio a la hora de eliminar uno y desaparezca
    location.reload(); 
  },
  err => console.error(err)
    );
   }







//obtengo los horarios guardados
getUsuarios_Aux(){
  this.usuariosService.getUsuarios_auxiliares().subscribe(  /// 
    res => {
    this.usuarios= res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
    },
    err => console.error(err)
    );}
    

      loginExist(){
        ///si no esta logueado redirecciona a login
        if(this.usuariosService.getSesionNombre()==''){
        this.router.navigate(['/login']);    
       }}
    
    
    

}
