import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  @HostBinding('class') classes='row';  //necesario para desplegar un juego a la par de otro 
  usuarios: any=[];
  constructor(private usuariosService:UsuariosService, private router: Router) { }

  ngOnInit() {
       //metodo que verifica si hay usuario logueado
   this.loginExist();
   ///Obtengo los usuarios Auxiliares
   this.getUsuarios();
  }
















  //obtengo los horarios guardados
getUsuarios(){
  this.usuariosService.getUsuarios().subscribe(  /// 
    res => {
    this.usuarios= res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
    },
    err => console.error(err)
    );}
    

      loginExist(){
        ///si no esta logueado redirecciona a login
        if(this.usuariosService.getSesionNombre()==''){
        this.router.navigate(['/login']);    
       }}
    

}
