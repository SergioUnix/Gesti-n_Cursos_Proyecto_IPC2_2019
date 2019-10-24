import { Component, OnInit, HostBinding } from '@angular/core';
import { AsigAuxService} from 'src/app/servicios/asig-aux.service';
import { Router } from '@angular/router';
import {Asig_Estu} from 'src/app/modelos/Asig_Estu';
import { NgForm } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { AsigEstuService} from 'src/app/servicios/asig-estu.service';


@Component({
  selector: 'app-auxiliar-cursos-asig',
  templateUrl: './auxiliar-cursos-asig.component.html',
  styleUrls: ['./auxiliar-cursos-asig.component.css']
})
export class AuxiliarCursosAsigComponent implements OnInit {
  @HostBinding('class') classes='row';  //necesario para desplegar un juego a la par de otro 
  asig_Auxiliares: any=[];

  public isError=false; 
  public isExito=false; 
  public isErrorGuardar=false;


  asig_estu:Asig_Estu={
    cod_asignacion_estudiante: 0,
    cod_asignacion_auxiliar_fk: 0,
    cod_usuario_fk: 0,
  }


  constructor(private asigestuService:AsigEstuService,private asigauxService:AsigAuxService,private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit() {
       //metodo que verifica si hay usuario logueado
   this.loginExist();

   //Obtengo todas las asignaciones de auxiliares que se han realizado
   this.getAsig_Aux();


  }
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
   





///guardar Asignación Estudiante

 //Guardar Auxiliar
 saveAsig(cod_asig){ 
  const cod_usuario= this.usuariosService.getSesionCod();

  this.asig_estu.cod_asignacion_auxiliar_fk=cod_asig;
  this.asig_estu.cod_usuario_fk=Number(cod_usuario);

  delete this.asig_estu.cod_asignacion_estudiante;

  this.asigestuService.saveAsig_estudiante(this.asig_estu)
  .subscribe(
    res=> { 
    // this.router.navigate(['/']);
    console.log('estudiante registrado');
    },
    err=>{ console.error(err);
    this.Visualizar_ErrorGuardar();
    }
  ) 


    }















  ///obtiene todas las asignaciones que se han hecho de auxiliares
getAsig_Aux(){
  let cod=this.usuariosService.getSesionCod();
  this.asigauxService.getAsig_aux(cod.toString()).subscribe(  /// 
    res => {
    this.asig_Auxiliares= res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
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
