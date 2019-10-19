import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { CursosService } from 'src/app/servicios/cursos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/modelos/Curso';
import { NgForm } from '@angular/forms';
import { SeccionService} from 'src/app/servicios/seccion.service';
import { HorariosService } from 'src/app/servicios/horarios.service';

@Component({
  selector: 'app-curso-edit',
  templateUrl: './curso-edit.component.html',
  styleUrls: ['./curso-edit.component.css']
})
export class CursoEditComponent implements OnInit {
  @HostBinding('class') classes='row';  //necesario para desplegar un juego a la par de otro 
  public isError=false; 
  public isExito=false; 
  public isErrorGuardar=false;

  horarios: any=[];
  secciones: any=[];

  curso:Curso={  
    cod_curso: 0,
    nombre: '',
    descripcion: '',
    estado: '',
    cod_horario_fk: 0,
    cod_seccion_fk: 0,
}


  constructor(private seccionService:SeccionService, private horariosService:HorariosService,private cursosService:CursosService,private usuariosService:UsuariosService, private router: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
     //metodo que verifica si hay usuario logueado
  this.loginExist();
  


//metodo para arreglo de horarios
this.getHorarios();
// metodo para arreglo de Secciones
this.getSecciones();




  const params =this.activatedRoute.snapshot.params;
  //console.log(params);
  if(params.id){        //este params.id me detecta el numero
    this.cursosService.getCurso(params.id)
      .subscribe(
         res =>{
           //console.log(res)
          this.curso=res; ///cuando accedo ala ruta game/edit/id ,, aca hago el objeto con el id recibido y eso me muestra en visualizacion

         },
         err => console.error(err)        )}




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
 this.updateCurso();
 }else{
 this.Visualizar_Error();
 }
 
 }
 



 

//Actualizo el curso
updateCurso(){
  const numero =this.curso.cod_curso;
  delete this.curso.cod_curso;
  delete this.curso.estado;


  //console.log(this.curso);
  this.cursosService.updateCurso(numero.toString(), this.curso)
    .subscribe(
    res =>{
      console.log(res);
      this.Visualizar_Exito();
      this.router.navigate(['/curso']);
    },
    err => {console.error(err);
    this.Visualizar_ErrorGuardar();
    }

  )
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
