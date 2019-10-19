import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/Usuario';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro-estudiante',
  templateUrl: './registro-estudiante.component.html',
  styleUrls: ['./registro-estudiante.component.css']
})
export class RegistroEstudianteComponent implements OnInit {
  @HostBinding('class') classes='row';  //necesario para desplegar un juego a la par de otro 
  usuarios: any=[];
  public isError=false; 
  public isExito=false; 
  public isErrorGuardar=false;
  
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


  }




///manejar el form y alertas

Visualizar_ErrorGuardar(){
  this.isErrorGuardar=true; 
  setTimeout(( ) =>{this.isErrorGuardar= false;}   ,   3000);
}
Visualizar_Exito(){
  this.isExito=true; 
  setTimeout(( ) =>{this.isExito= false;}   ,   3000);
}


Visualizar_Error(){
  this.isError=true; 
  setTimeout(( ) =>{this.isError= false;}   ,   3000);
}
 

onEstudiante(form:NgForm){
  // console.log( form);
 if(form.valid){
 this.saveUsuario();
 }else{
 this.Visualizar_Error();
 }
 
 }
 





 //Guardar Estudiante
  saveUsuario(){    
    delete this.usuario.cod_usuario;
    this.usuariosService.saveUsuario(this.usuario)
    .subscribe(
      res=> { 
      this.router.navigate(['/login']);
      console.log('Usuario registrado');
     
      this.Visualizar_Exito();
      },
      err=>{ console.error(err);
      this.Visualizar_ErrorGuardar();
      }
    ) 
  
  
      }










    
    

}
