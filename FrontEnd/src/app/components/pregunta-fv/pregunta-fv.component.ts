import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { EvaluacionesService } from 'src/app/servicios/evaluaciones.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Pregunta } from 'src/app/modelos/Pregunta';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pregunta-fv',
  templateUrl: './pregunta-fv.component.html',
  styleUrls: ['./pregunta-fv.component.css']
})
export class PreguntaFvComponent implements OnInit {
  @HostBinding('class') classes='row';  //necesario para desplegar un producto a la par de otro 
  constructor(private evaluacionesService:EvaluacionesService, private activatedRoute:ActivatedRoute,private usuariosService:UsuariosService, private router: Router) { }
public cod_evaluacion=0;

multiple: any=[];
public isError=false; 
public isExito=false; 
public isErrorGuardar=false;

pregunta: Pregunta ={
  cod_pregunta: 0,
  pregunta: '',
  correcta: '',
  respuesta: '',
  opcion1: '',
  opcion2: '',
  opcion3: '',
  cod_evaluacion_fk:0,
   };



  ngOnInit() {

  //metodo que verifica si hay usuario logueado
  this.loginExist();


  
  const params =this.activatedRoute.snapshot.params;
    //console.log(params);
    if(params.id){        //este params.id me detecta el numero
    this.cod_evaluacion=params.id;
    
     this.getPreguntas();    

    }


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
 

onPregunta(form:NgForm){
  // console.log( form);
 if(form.valid){
 this.savePregunta();
 }else{
 this.Visualizar_Error();
 }
 
 }
 

 //Guardar evaluacion
 savePregunta(){    
  delete this.pregunta.cod_pregunta;
  delete this.pregunta.respuesta;
  delete this.pregunta.opcion1;
  delete this.pregunta.opcion2;
  delete this.pregunta.opcion3;
  
  this.pregunta.cod_evaluacion_fk=this.cod_evaluacion;
  

  this.evaluacionesService.savePregunta(this.pregunta)
  .subscribe(
    res=> { 
    // this.router.navigate(['/']);
    console.log('Pregunta Creada');
    this.getPreguntas();   
    this.Visualizar_Exito();
    },
    err=>{ console.error(err);
    this.Visualizar_ErrorGuardar();
    })}


    getPreguntas(){
    this.evaluacionesService.getPreguntas(this.cod_evaluacion.toString()).subscribe(  /// 
    res => { //console.log(res);
    this.multiple= res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
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
