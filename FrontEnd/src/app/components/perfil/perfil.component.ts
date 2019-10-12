import { Component, OnInit } from '@angular/core';

import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private usuariosService: UsuariosService, private router:Router) { }

  ngOnInit() {
        //metodo que verifica si hay usuario logueado
        this.loginExist();
  }











  loginExist(){
    ///si no esta logueado redirecciona a login
    if(this.usuariosService.getSesionNombre()==''){
    this.router.navigate(['/login']);    
   }}





 
}
