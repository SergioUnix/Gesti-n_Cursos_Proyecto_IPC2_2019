import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Actividad} from 'src/app/modelos/Actividad';
import {ActividadesService} from '../../servicios/actividades.service'
import { NgForm } from '@angular/forms';
import { EvaluacionesService } from 'src/app/servicios/evaluaciones.service';
  
@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {
  asignaciones: any=[];
  actividades_user: any=[];
  @HostBinding('class') classes='row';  //necesario para desplegar un producto a la par de otro 

  public isError=false; 
  public isExito=false; 
  public isErrorGuardar=false;


public anio:string='';
public mes:string='';
public dia:string ='';

public hora:string='';
public minuto:string=''; 

actividad:Actividad={    
  cod_actividad:0,
  nombre: '',
  hora: '',
  fecha_limite: '',
  ponderacion: '',
  archivo: '',
  texto: '',
  ruta_archivo: '',
  cod_asignacion_auxiliar_fk: 0,
  cod_usuario_fk: 0,
}


constructor(private evaluacionesService:EvaluacionesService,private actividadesService:ActividadesService, private usuariosService: UsuariosService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    //metodo que verifica si hay usuario logueado
this.loginExist();
 /// Obtengo los curso que el auxiliar esta asignado y los muestro en un select item
    this.getAsig_Cursos();
//Obtengo las actividades creaadar por el usuario auxiliar logueado
this.getActividades_user();

  
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
 

onActividad(form:NgForm){
  // console.log( form);
 if(form.valid){
 this.saveActividad();
 }else{
 this.Visualizar_Error();
 }
 
 }
 

 //Guardar Actividad
 saveActividad(){    
  delete this.actividad.cod_actividad;
  delete this.actividad.texto;
  delete this.actividad.ruta_archivo

  this.actividad.hora=this.hora+':'+this.minuto+':'+'00';
  this.actividad.fecha_limite=this.anio+'-'+this.mes+'-'+this.dia;
  this.actividad.cod_usuario_fk = Number(this.usuariosService.getSesionCod());

  this.actividadesService.saveActividad(this.actividad)
  .subscribe(
    res=> { 
    // this.router.navigate(['/']);
    console.log('Actividad creada');
   this.getActividades_user();
    this.Visualizar_Exito();

    },
    err=>{ console.error(err);
    this.Visualizar_ErrorGuardar();
    }
  ) 


    } 










 ///Cambia el estado a habilitada
  deleteActividad(cod_actividad){
    
  this.actividadesService.deleteActividad(cod_actividad.toString()).subscribe(  /// 
  res => { 
  this.getActividades_user();
   location.reload();
  },
  err => console.error(err)
  );}





  ///obtiene todas las asignaciones que se han hecho de auxiliares
  getActividades_user(){
    let cod=this.usuariosService.getSesionCod();
    this.actividadesService.getList_user(cod.toString()).subscribe(  /// 
     res => { //console.log(res);
      this.actividades_user= res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
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
