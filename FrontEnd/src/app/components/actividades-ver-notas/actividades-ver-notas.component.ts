import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Nota} from 'src/app/modelos/Nota';
import {ActividadesService} from '../../servicios/actividades.service'
import { NgForm } from '@angular/forms';
import { EvaluacionesService } from 'src/app/servicios/evaluaciones.service';
 
@Component({
  selector: 'app-actividades-ver-notas',
  templateUrl: './actividades-ver-notas.component.html',
  styleUrls: ['./actividades-ver-notas.component.css']
})
export class ActividadesVerNotasComponent implements OnInit {

  notas: any=[];
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


//Obtengo las actividades creaadar por el usuario auxiliar logueado
this.getNotas();




  
  }

























/// obtiene todas las actividades hijas dado el codigo padrea de una actividad
  getNotas(){
    let cod=this.usuariosService.getSesionCod();
    this.actividadesService.getactividadesNotas(cod.toString()).subscribe( 
     res => { 
      this.notas= res;  
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
