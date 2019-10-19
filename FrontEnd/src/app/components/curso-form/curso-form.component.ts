import { Component, OnInit, HostBinding } from '@angular/core';
import { CursosService } from 'src/app/servicios/cursos.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { SeccionService} from 'src/app/servicios/seccion.service';
import { HorariosService } from 'src/app/servicios/horarios.service';
import { Router } from '@angular/router';
import { Curso } from 'src/app/modelos/Curso';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {
  @HostBinding('class') classes='row';  //necesario para desplegar un juego a la par de otro 
  usuarios: any=[];
 
  public isError=false; 
  public isExito=false; 
  public isErrorGuardar=false;

  horarios: any=[];
  secciones: any=[];
  cursos: any=[];
  
  
  curso:Curso={  
    cod_curso: 0,
    nombre: '',
    descripcion: '',
    estado: '',
    cod_horario_fk: 0,
    cod_seccion_fk: 0,
}

  

  constructor(private seccionService:SeccionService, private horariosService:HorariosService,private usuariosService: UsuariosService,private cursosService:CursosService, private router: Router) { }


ngOnInit() {
//metodo que verifica si hay usuario logueado
this.loginExist();

//metodo para arreglo de horarios
this.getHorarios();
// metodo para arreglo de Secciones
this.getSecciones();
//obtengo arreglo de cursos para mostrar
this.getCursos();


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
 

onCurso(form:NgForm){
  // console.log( form);
 if(form.valid){
 this.saveCurso();
 }else{
 this.Visualizar_Error();
 }
 
 }
 

 //Guardar Curso
 saveCurso(){    
  delete this.curso.cod_curso;
  delete this.curso.estado;
  this.cursosService.saveCurso(this.curso)
  .subscribe(
    res=> { 
    // this.router.navigate(['/']);
    console.log('Usuario registrado');
    this.getCursos();
    this.Visualizar_Exito();
    },
    err=>{ console.error(err);
    this.Visualizar_ErrorGuardar();
    }
  ) 


    }










 /// obtiene arreglo de horarios para  items de horarios

 getCursos(){
  this.cursosService.getCursos().subscribe(  /// 
    res => {
      this.cursos = res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
     },
    err => console.error(err)
  );
}


 /// obtiene arreglo de horarios para  items de horarios

 getHorarios(){
  this.horariosService.getHorarios().subscribe(  /// 
    res => {
      this.horarios = res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
     },
    err => console.error(err)
  );
}

 /// Obtiene arreglo de secciones para items de seccion

 getSecciones(){
  this.seccionService.getSecciones().subscribe(  /// 
    res => {
      this.secciones = res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
     },
    err => console.error(err)
  );
}








 loginExist(){
 ///si no esta logueado redirecciona a login
 if(this.usuariosService.getSesionNombre()==''){
 this.router.navigate(['/login']);    
 }}



}
