import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Actividad} from 'src/app/modelos/Actividad';
import {ActividadesService} from '../../servicios/actividades.service'
import { NgForm } from '@angular/forms';
import { EvaluacionesService } from 'src/app/servicios/evaluaciones.service';
 
@Component({
  selector: 'app-actividades-cursos-asig',
  templateUrl: './actividades-cursos-asig.component.html',
  styleUrls: ['./actividades-cursos-asig.component.css']
})
export class ActividadesCursosAsigComponent implements OnInit {
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

//Obtengo las actividades creaadar por el usuario auxiliar logueado
this.getActividades_user();

  
  }





  ///obtiene todas las asignaciones que se han hecho de auxiliares
  getActividades_user(){
    let cod=this.usuariosService.getSesionCod();
    this.actividadesService.getList_user(cod.toString()).subscribe(  /// 
     res => { //console.log(res);
      this.actividades_user= res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
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
