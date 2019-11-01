import { Component, OnInit, HostBinding } from '@angular/core';
import { AsigAuxService} from 'src/app/servicios/asig-aux.service';
import { Router } from '@angular/router';
import {Asig_Aux } from 'src/app/modelos/Asig_Aux';
import {Foro } from 'src/app/modelos/Foro';
import { NgForm } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { CursosService } from 'src/app/servicios/cursos.service';


 
@Component({
  selector: 'app-asignacion-auxiliar',
  templateUrl: './asignacion-auxiliar.component.html',
  styleUrls: ['./asignacion-auxiliar.component.css']
})
export class AsignacionAuxiliarComponent implements OnInit {
  @HostBinding('class') classes='row';  //necesario para desplegar un juego a la par de otro 
  usuarios: any=[];
  cursos_dis: any=[];

  asig_Auxiliares: any=[];

  public isError=false; 
  public isExito=false; 
  public isErrorGuardar=false;

public anio:string='';
public mes:string='';
public dia:string ='';

public anio_asig=0;

asig_aux:Asig_Aux={
  cod_asignacion_auxiliar: 0,
  semestre: '',
  año: 0,
  fecha_limite: '',
  cod_usuario_fk: 0,
  cod_curso_fk: 0,
}

foro:Foro={
  cod_foro: 0,
  nombre: '',
  descripcion: '',
  fecha: '',
  hora_limite: '',
  cod_asignacion_auxiliar_fk: 0,

}



  constructor(private asigauxService:AsigAuxService,private usuariosService: UsuariosService,private cursosService:CursosService, private router: Router) { }

  ngOnInit() {
   //metodo que verifica si hay usuario logueado
   this.loginExist();
   ///Obtengo los usuarios Auxiliares
   this.getUsuarios_Aux();
   ///Obtengo los cursos disponibles
   this.getCursos_dis();
   //Obtengo todas las asignaciones de auxiliares que se han realizado
  this.getAsig_Aux();

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
 

 onAsig(form:NgForm){
  // console.log( form);
 if(form.valid){
 this.saveAsig();
 }else{
 this.Visualizar_Error();
 }
 
 }

/// crear foro despues de haber obtenido la ultima asignacion_auxiliar
crearForo(cod_ultima_asig){
  
  this.foro.nombre='Foro del curso';
  this.foro.descripcion='Publicar aca';
  this.foro.fecha='2029-12-31'
  this.foro.hora_limite='23:59:00'
  this.foro.cod_asignacion_auxiliar_fk=Number(cod_ultima_asig);

  delete this.foro.cod_foro;
  this.asigauxService.createForoAsig(this.foro).subscribe(  /// 
    res => {
    console.log(res);    
    },
    err => console.error(err)
    );}


///obtengo el ultimo registro que me servira para crear un Foro automaticamente
ultimo_registro(cod_usuario_fk){
  let ultimo;
  this.asigauxService.getUltimaAsignacion(cod_usuario_fk).subscribe(  /// 
    res => {
    ultimo=res;
    //console.log(ultimo.cod_asignacion_auxiliar);
    this.crearForo(ultimo.cod_asignacion_auxiliar);

    },
    err => console.error(err)
    );}



///obtiene todas las asignaciones que se han hecho de auxiliares
getAsig_Aux(){
  this.asigauxService.getAsig_auxiliares().subscribe(  /// 
    res => {
    this.asig_Auxiliares= res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
    },
    err => console.error(err)
    );}



 

//metodo para cambiar el estado del curso , porque ya se le asigno un auxiliar
cambioOcupado(codigo_curso:String){
  this.cursosService.updateOcupado(codigo_curso.toString(),"").subscribe(  /// 
    res => {
    console.log("cambio de estado")   ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
    },
    err => console.error(err)
    );}
//metodo para cambiar el estado del curso , porque ya se le asigno un auxiliar
cambioDisponible(codigo_curso:String){
  this.cursosService.updateDisponible(codigo_curso.toString(),"").subscribe(  /// 
    res => {
    console.log("cambio de estado")   ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
    },
    err => console.error(err)
    );}


 //Guardar Auxiliar
  saveAsig(){ 
    const cod_curso_fk =this.asig_aux.cod_curso_fk;
    const cod_auxiliar =this.asig_aux.cod_usuario_fk;
    this.asig_aux.fecha_limite=this.anio+'-'+this.mes+'-'+this.dia;
    this.asig_aux.año=this.anio_asig;

    delete this.asig_aux.cod_asignacion_auxiliar;
    this.asigauxService.saveAsig_aux(this.asig_aux)
    .subscribe(
      res=> { 
      // this.router.navigate(['/']);
      console.log('aux registrado');
      this.getUsuarios_Aux();
      //cambio el estado
      this.cambioOcupado(cod_curso_fk.toString());
      //obtengo el codigo de la asignacion creada y envio a crear foro
      this.ultimo_registro(cod_auxiliar.toString());
      
      //repinto las asignaciones
      this.getAsig_Aux(); 
      this.Visualizar_Exito();

      },
      err=>{ console.error(err);
      this.Visualizar_ErrorGuardar();
      }
    ) 
  
  
      }









   ///Metodo para eliminar
   deleteAsignacion(id: string, cod_curso:string){
    this.asigauxService.deleteAsig_aux(id).subscribe(  /// 
      res => {    
        this.getAsig_Aux();     //pido el meodo de pintar los juegos para que se vea el cambio a la hora de eliminar uno y desaparezca
      this.cambioDisponible(cod_curso.toString());
        location.reload();
      },
      err => console.error(err) );}




//obtengo cursos disponibles que aun no han sido asignados a un auxiliar
getCursos_dis(){
  this.cursosService.getCursos_dis().subscribe(  /// 
    res => {
    this.cursos_dis= res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
    },
    err => console.error(err)
    );}




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
