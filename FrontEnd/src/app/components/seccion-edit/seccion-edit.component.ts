import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Seccion } from 'src/app/modelos/Seccion';
import {SeccionService} from '../../servicios/seccion.service'

@Component({
  selector: 'app-seccion-edit',
  templateUrl: './seccion-edit.component.html',
  styleUrls: ['./seccion-edit.component.css']
})
export class SeccionEditComponent implements OnInit {

  @HostBinding('class') classes='row';  //necesario para desplegar un producto a la par de otro 

  seccion:Seccion={
    cod_seccion: 0,
    nombre: '',
  }

  constructor(private seccionService:SeccionService, private usuariosService: UsuariosService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
          //metodo que verifica si hay usuario logueado
          this.loginExist();
  
  
  


  const params =this.activatedRoute.snapshot.params;
  //console.log(params);
  if(params.id){        //este params.id me detecta el numero
  this.seccionService.getSeccion(params.id)
      .subscribe(
      res =>{
      console.log(res)
      this.seccion=res; ///cuando accedo ala ruta game/edit/id ,, aca hago el objeto con el id recibido y eso me muestra en visualizacion
      },
      err => console.error(err)        )}
      
      




  }







//Actualizo Seccion
updateSeccion(){
  const numero =this.seccion.cod_seccion;
  delete this.seccion.cod_seccion;


  console.log(this.seccion);
  this.seccionService.updateSeccion(numero.toString(), this.seccion)
    .subscribe(
    res =>{
      console.log(res);
      this.router.navigate(['/seccion']);
    },
    err => console.error(err)

  )
}








  loginExist(){
    ///si no esta logueado redirecciona a login
    if(this.usuariosService.getSesionNombre()==''){
    this.router.navigate(['/login']);    
   }}



}
