import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/modelos/Usuario';


@Component({
  selector: 'app-registro-auxiliar-edit',
  templateUrl: './registro-auxiliar-edit.component.html',
  styleUrls: ['./registro-auxiliar-edit.component.css']
})
export class RegistroAuxiliarEditComponent implements OnInit {
  @HostBinding('class') classes='row';  //necesario para desplegar un juego a la par de otro 
 
 
  
  usuario: Usuario ={
    cod_usuario: 0,
    nombre: '',
    carne: '',
    correo: '',
    pasword: '',
    cod_rol_fk: 0,
  };


  constructor(private usuariosService:UsuariosService, private router: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  //metodo que verifica si hay usuario logueado
  this.loginExist();


  
  const params =this.activatedRoute.snapshot.params;
  //console.log(params);
  if(params.id){        //este params.id me detecta el numero
  this.usuariosService.getUsuario(params.id)
  .subscribe(
  res =>{
  console.log(res)
  this.usuario=res; ///cuando accedo ala ruta auxiliar/edit/id ,, aca hago el objeto con el id recibido y eso me muestra en visualizacion
    },
  err => console.error(err)        )}
        
        
        
  }
        
        
        
        
        
        
        
        
        
        
  //Actualizo el Horario
  updateUsuario(){
  const numero =this.usuario.cod_usuario;
  delete this.usuario.cod_usuario;

  console.log(this.usuario);
  this.usuariosService.updateUsuario(numero.toString(), this.usuario)
  .subscribe(
  res =>{
  console.log(res);
  this.router.navigate(['/auxiliar']);
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
