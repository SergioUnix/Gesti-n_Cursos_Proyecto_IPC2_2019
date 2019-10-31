import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Nota} from 'src/app/modelos/Nota';
import {ActividadesService} from '../../servicios/actividades.service'
import { NgForm } from '@angular/forms';
import { EvaluacionesService } from 'src/app/servicios/evaluaciones.service';
  
@Component({
  selector: 'app-actividades-crear-nota',
  templateUrl: './actividades-crear-nota.component.html',
  styleUrls: ['./actividades-crear-nota.component.css']
})
export class ActividadesCrearNotaComponent implements OnInit {
  asignaciones: any=[];
  actividades_hijas: any=[];
  @HostBinding('class') classes='row';  //necesario para desplegar un producto a la par de otro 

  public isError=false; 
  public isExito=false; 
  public isErrorGuardar=false;

public cod_actividad_padre=0;

nota:Nota={    
  cod_nota: 0,
  nota_obtenida: 0,
  Usuario_cod_usuario: 0,
  Actividad_cod_actividad: 0,
}


constructor(private evaluacionesService:EvaluacionesService,private actividadesService:ActividadesService, private usuariosService: UsuariosService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    //metodo que verifica si hay usuario logueado
this.loginExist();

const params =this.activatedRoute.snapshot.params;
if(params.id){        //este params.id me detecta el numero
  this.cod_actividad_padre=params.id;

//Obtengo las actividades creaadar por el usuario auxiliar logueado
this.getActividades_hijas();

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
 

onNota(form:NgForm){
   console.log( form);
   console.log(this.nota);
 if(form.valid){
 
// this.existNota();
}else{
 this.Visualizar_Error();
 }
 
 }
 



existNota(usuario:string,actividad:string,nota:string){

  this.actividadesService.existNota(usuario.toString(),actividad.toString()).subscribe(  /// 
    res => {
    //console.log(res);
    console.log('Ya existe la nota de la actividad');
    this.Visualizar_ErrorGuardar();
    },
    err => {
    
    console.log('No existe por lo tanto se Creara');
    this.saveNota(usuario,actividad,nota);
    this.Visualizar_Exito();



    }
    );

}




 //Guardar Curso
 saveNota(usuario:string,actividad:string,nota:string){    
  delete this.nota.cod_nota;
  this.nota.Usuario_cod_usuario=Number(usuario);
  this.nota.Actividad_cod_actividad=Number(actividad);
  this.nota.nota_obtenida=Number(nota);

this.actividadesService.saveNota(this.nota)
.subscribe(
  res=> { 
  // this.router.navigate(['/']);
  console.log('nota registrada');
 
  this.Visualizar_Exito();
  },
  err=>{ console.error(err);
  this.Visualizar_ErrorGuardar();
  }
) 


    }























/// obtiene todas las actividades hijas dado el codigo padrea de una actividad
  getActividades_hijas(){
   
    this.actividadesService.getActividades_hijas(this.cod_actividad_padre.toString()).subscribe( 
     res => { 
      this.actividades_hijas= res;  
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
