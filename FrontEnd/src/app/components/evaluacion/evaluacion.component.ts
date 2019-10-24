import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { EvaluacionesService } from 'src/app/servicios/evaluaciones.service';
import { Router } from '@angular/router';
import { Evaluacion } from 'src/app/modelos/Evaluacion';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {

  @HostBinding('class') classes='row';  //necesario para desplegar un producto a la par de otro 
 asignaciones: any=[];
eva_tipo1: any=[];
eva_tipo2: any=[];

public isError=false; 
public isExito=false; 
public isErrorGuardar=false;

  evaluacion: Evaluacion ={
    cod_evaluacion: 0,
    nombre: '',
    estado: '',
    tipo_evaluacion: '',
    cod_asignacion_auxiliar_fk: 0,
    usuario_fk_eva: 0,    
  };
  

 constructor(private evaluacionesService:EvaluacionesService, private usuariosService:UsuariosService, private router: Router) { }

  ngOnInit() {
 //metodo que verifica si hay usuario logueado
   this.loginExist();


   //Obtengo todas las asignaciones de auxiliares que se han realizado
   this.getAsig_Cursos();
  ///Obtengo las evaluaciones creadas
this.getEva_tipo1();
this.getEva_tipo2();

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
 

onEvaluacion(form:NgForm){
  // console.log( form);
 if(form.valid){
 this.saveEvaluacion();
 }else{
 this.Visualizar_Error();
 }
 
 }
 

 //Guardar evaluacion
 saveEvaluacion(){    
  delete this.evaluacion.cod_evaluacion;
  delete this.evaluacion.estado;
  this.evaluacion.usuario_fk_eva = Number(this.usuariosService.getSesionCod());

  this.evaluacionesService.saveEvaluacion(this.evaluacion)
  .subscribe(
    res=> { 
    // this.router.navigate(['/']);
    console.log('Evaluacion creada');
    this.getEva_tipo1();
    this.getEva_tipo2();
    this.Visualizar_Exito();
    },
    err=>{ console.error(err);
    this.Visualizar_ErrorGuardar();
    }
  ) 


    }








  ///Cambia el estado a habilitada
  deleteEvaluacion(cod_evaluacion){
    
  this.evaluacionesService.deleteEvaluacion(cod_evaluacion.toString()).subscribe(  /// 
  res => { //console.log(res);
  this.getEva_tipo1();
  this.getEva_tipo2();
  location.reload();
  },
  err => console.error(err)
  );}



  ///Cambia el estado a habilitada
  estado(cod_evaluacion){
    
    this.evaluacionesService.updateEstado(cod_evaluacion.toString(),'solo_habilita').subscribe(  /// 
     res => { //console.log(res);
      this.getEva_tipo1();
      this.getEva_tipo2();
      },
      err => console.error(err)
      );}


  ///Cambia el orden de preguntas
  orden(cod_evaluacion){
    
    this.evaluacionesService.updateOrden(cod_evaluacion.toString(),'solo_cambia_orden').subscribe(  /// 
     res => { //console.log(res);
      this.getEva_tipo1();
      this.getEva_tipo2();
      },
      err => console.error(err)
      );}







  ///obtiene las evaluaciones tipo Selección Múltiple creadas por el auxiliar
getEva_tipo2(){
  let cod=this.usuariosService.getSesionCod();
  this.evaluacionesService.getEva_tipo2(cod.toString()).subscribe(  /// 
   res => { //console.log(res);
    this.eva_tipo2= res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
    },
    err => console.error(err)
    );}

  ///obtiene las evaluaciones tipo Verdadero/Falso creadas por el auxiliar
getEva_tipo1(){
  let cod=this.usuariosService.getSesionCod();
  this.evaluacionesService.getEva_tipo1(cod.toString()).subscribe(  /// 
   res => { //console.log(res);
    this.eva_tipo1= res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
    },
    err => console.error(err)
    );}

///obtiene todas las asignaciones que se han hecho de auxiliares
getAsig_Cursos(){
  let cod=this.usuariosService.getSesionCod();
  this.evaluacionesService.getAsig_cursos(cod.toString()).subscribe(  /// 
   res => { //console.log(res);
    this.asignaciones= res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
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
