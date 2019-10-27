import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Actividad} from 'src/app/modelos/Actividad';
import {ActividadesService} from '../../servicios/actividades.service'
import { NgForm } from '@angular/forms';
import { EvaluacionesService } from 'src/app/servicios/evaluaciones.service';

@Component({
  selector: 'app-actividad-realizar',
  templateUrl: './actividad-realizar.component.html',
  styleUrls: ['./actividad-realizar.component.css']
})
export class ActividadRealizarComponent implements OnInit {

  public permiso = false;

  public isError=false; 
  public isExito=false; 
  public isErrorGuardar=false;
  public cod_asig_curso=0;
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

const params =this.activatedRoute.snapshot.params;


////Convierte un string a boolean
function convertToBoolean(input: string): boolean | undefined {
  try {
      return JSON.parse(input);
  }
  catch (e) {
      return undefined;
  }
}




if(params.id){        //este params.id me detecta el numero
  this.actividadesService.getOne_actividad(params.id)
    .subscribe(
       res =>{
         //console.log(res)
        this.actividad=res; ///cuando accedo ala ruta game/edit/id ,, aca hago el objeto con el id recibido y eso me muestra en visualizacion
        this.permiso=convertToBoolean(this.actividad.archivo);
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
  delete this.actividad.hora;
  delete this.actividad.fecha_limite;
  delete this.actividad.ponderacion;
  delete this.actividad.cod_asignacion_auxiliar_fk;
  delete this.actividad.archivo;

  this.actividad.cod_usuario_fk = Number(this.usuariosService.getSesionCod());

  this.actividadesService.saveActividad(this.actividad)
  .subscribe(
    res=> { 
    // this.router.navigate(['/']);
    console.log('Actividad creada');
 
    this.Visualizar_Exito();

    },
    err=>{ console.error(err);
    this.Visualizar_ErrorGuardar();
    }
  ) 


    } 










 



      
///////////////////
loginExist(){
  ///si no esta logueado redirecciona a login
  if(this.usuariosService.getSesionNombre()==''){
  this.router.navigate(['/login']);    
 }}
}