import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router } from '@angular/router';
import { Evaluacion } from 'src/app/modelos/Evaluacion';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {
 asignaciones: any=[];

  evaluacion: Evaluacion ={
    cod_evaluacion: 0,
    nombre: '',
    estado: '',
    tipo_evaluacion: '',
    cod_asignacion_auxiliar_fk: 0,
    usuario_fk_eva: 0,   
  };
  

 constructor(private usuariosService:UsuariosService, private router: Router) { }

  ngOnInit() {
  }

}
