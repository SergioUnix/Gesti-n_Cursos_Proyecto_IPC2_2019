import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { EvaluacionesService } from 'src/app/servicios/evaluaciones.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Evaluacion } from 'src/app/modelos/Evaluacion';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-evaluaciones-vista',
  templateUrl: './evaluaciones-vista.component.html',
  styleUrls: ['./evaluaciones-vista.component.css']
})
export class EvaluacionesVistaComponent implements OnInit {

  @HostBinding('class') classes='row';  //necesario para desplegar un producto a la par de otro 
asignaciones: any=[];
eva_tipo1: any=[];
eva_tipo2: any=[];


public cod_asignacion_auxiliar=0;

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
  

 constructor(private activatedRoute:ActivatedRoute,private evaluacionesService:EvaluacionesService, private usuariosService:UsuariosService, private router: Router) { }

  ngOnInit() {
 //metodo que verifica si hay usuario logueado
   this.loginExist();








const params =this.activatedRoute.snapshot.params;
//console.log(params);
if(params.id){        //este params.id me detecta el numero
  this.cod_asignacion_auxiliar=params.id;

  ///Obtengo las evaluaciones creadas
this.getEva_tipo1_curso();
this.getEva_tipo2_curso();

}



  }














  ///obtiene las evaluaciones tipo Selección Múltiple creadas por el auxiliar
getEva_tipo2_curso(){
 // let cod=this.usuariosService.getSesionCod();
  this.evaluacionesService.getEva_tipo2_curso(this.cod_asignacion_auxiliar.toString()).subscribe(  /// 
   res => { //console.log(res);
    this.eva_tipo2= res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
    },
    err => console.error(err)
    );}

  ///obtiene las evaluaciones tipo Verdadero/Falso creadas por el auxiliar
getEva_tipo1_curso(){

  this.evaluacionesService.getEva_tipo1_curso(this.cod_asignacion_auxiliar.toString()).subscribe(  /// 
   res => { //console.log(res);
    this.eva_tipo1= res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
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
