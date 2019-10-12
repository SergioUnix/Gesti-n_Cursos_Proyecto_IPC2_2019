import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public admin_funcion = false;
  public auxiliar_funcion = false;
  public estudiante_funcion = false;
  public usuario_activo='';
  public buscar='';


  constructor(private usuariosService:UsuariosService, private router: Router) { }

  ngOnInit() {
   // Obtengo los privilegios segun el tipo de rol
   this.onCheckUser();
   //Obtengo el nombre del Usuario Logueado
   this.usuario_activo=this.usuariosService.getSesionNombre();

   console.log(this.usuariosService.getSesionTipo());
   console.log(this.usuariosService.getSesionNombre());



  }







  /// Privilegios segun el tipo de Usuario
  onCheckUser(): void {
    if (this.usuariosService.getSesionTipo()=='1') {
      this.admin_funcion = true; 
      this.auxiliar_funcion=true;
      this.estudiante_funcion=true;   
    } else if(this.usuariosService.getSesionTipo()=='2') {
      this.auxiliar_funcion = true;
      this.estudiante_funcion=true;   
    }else if(this.usuariosService.getSesionTipo()=='3') {
      this.estudiante_funcion = true;
      this.auxiliar_funcion=true;
  }}


 
 ///Salir de la sesión
  logOut(){
    this.usuariosService.OutSesion();

    this.router.navigate(['/login']);
    location.reload();
    }







}
