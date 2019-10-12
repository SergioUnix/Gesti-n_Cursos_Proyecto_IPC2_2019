import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Seccion} from 'src/app/modelos/Seccion';
import {SeccionService} from '../../servicios/seccion.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-seccion-form',
  templateUrl: './seccion-form.component.html',
  styleUrls: ['./seccion-form.component.css']
})
export class SeccionFormComponent implements OnInit {
  secciones: any=[];

  @HostBinding('class') classes='row';  //necesario para desplegar un producto a la par de otro 

  public isError=false; 
  public isExito=false; 

seccion:Seccion={
  cod_seccion: 0,
  nombre: '',
}


constructor(private seccionService: SeccionService, private usuariosService: UsuariosService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    //metodo que verifica si hay usuario logueado
    this.loginExist();
    // metodo para obtener todas las secciones guardadas
    this.getSecciones();




  }


  
  Visualizar_Exito(){
    this.isExito=true; 
    setTimeout(( ) =>{this.isExito= false;}   ,   4000);
  }
  
  
  Visualizar_Error(){
    this.isError=true; 
    setTimeout(( ) =>{this.isError= false;}   ,   4000);
  }
   
  
  onSeccion(form:NgForm){
    // console.log( form);
   if(form.valid){
   this.saveSeccion();
   }else{
   this.Visualizar_Error();
   }
   
   }
   
  
  
/////guardo 
saveSeccion(){
  delete this.seccion.cod_seccion;
  this.seccionService.saveSeccion(this.seccion)
  .subscribe(
    res=> {
      console.log(res);
      this.getSecciones();
      this.Visualizar_Exito();
    },
    err=> console.error(err)

  ) 
}
  
  
  
  
  
  
   ///Metodo para eliminar
deleteSeccion(id: string){
this.seccionService.deleteSeccion(id).subscribe(  /// 
  res => {    
  this.getSecciones();     //pido el meodo de pintar los juegos para que se vea el cambio a la hora de eliminar uno y desaparezca
  location.reload();
  },
  err => console.error(err) );}

  
  
  
//obtengo las secciones  guardadas
getSecciones(){
this.seccionService.getSecciones().subscribe(  /// 
  res => {
  this.secciones= res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
  },
  err => console.error(err)
  );}
























  
  loginExist(){
    ///si no esta logueado redirecciona a login
    if(this.usuariosService.getSesionNombre()==''){
    this.router.navigate(['/login']);    
   }}



}
