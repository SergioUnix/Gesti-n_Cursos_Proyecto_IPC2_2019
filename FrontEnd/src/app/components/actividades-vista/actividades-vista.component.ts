import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Actividad} from 'src/app/modelos/Actividad';
import {ActividadesService} from '../../servicios/actividades.service'
import { NgForm } from '@angular/forms';
import { EvaluacionesService } from 'src/app/servicios/evaluaciones.service';
 
@Component({
  selector: 'app-actividades-vista',
  templateUrl: './actividades-vista.component.html',
  styleUrls: ['./actividades-vista.component.css']
})
export class ActividadesVistaComponent implements OnInit {
  asignaciones: any=[];
  actividades_curso: any=[];
  @HostBinding('class') classes='row';  //necesario para desplegar un producto a la par de otro 

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
//console.log(params);
if(params.id){        //este params.id me detecta el numero
  this.cod_asig_curso=params.id;

  this.getActividades_curso();

}
  }














  ///obtiene todas las actividades de un curso
  getActividades_curso(){
    ///let cod=this.usuariosService.getSesionCod();
    this.actividadesService.getActividades_curso(this.cod_asig_curso.toString()).subscribe(  /// 
     res => { 
      this.actividades_curso= res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
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