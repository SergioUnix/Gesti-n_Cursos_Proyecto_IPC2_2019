import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Horario } from 'src/app/modelos/Horario';
import {HorariosService} from '../../servicios/horarios.service'

@Component({
  selector: 'app-horario-form',
  templateUrl: './horario-form.component.html',
  styleUrls: ['./horario-form.component.css']
})
export class HorarioFormComponent implements OnInit {
    @HostBinding('class') classes='row';  //necesario para desplegar un producto a la par de otro 
    horarios: any=[];
public hora:string='';
public minuto:string='';
public hora2:string ='';
public minuto2:string='';



    horario: Horario = {
      cod_horario: 0,
      hora_inicio: '',
      hora_final: '',
  }

  constructor(private horariosService:HorariosService, private usuariosService: UsuariosService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    //metodo que verifica si hay usuario logueado
    this.loginExist();
    //Obtengo todos los horarios
    this.getHorarios();
  

  
  
  
  
    }
  
  
  
  
  
  
  
  
  
  
  
/////guardo 
saveHorario(){
  delete this.horario.cod_horario;
  this.horario.hora_inicio=this.hora+':'+this.minuto+':'+'00';
  this.horario.hora_final=this.hora2+':'+this.minuto2+':'+'00';
  this.horariosService.saveHorario(this.horario)
  .subscribe(
    res=> {
      console.log(res);
      this.getHorarios();
    },
    err=> console.error(err)

  ) 
}
  
  
  
  
  
  
   ///Metodo para eliminar
deleteHorario(id: string){
this.horariosService.deleteHorario(id).subscribe(  /// 
  res => {    
  this.getHorarios();     //pido el meodo de pintar los juegos para que se vea el cambio a la hora de eliminar uno y desaparezca
  location.reload();
  },
  err => console.error(err) );}

  
  
  
//obtengo los horarios guardados
getHorarios(){
this.horariosService.getHorarios().subscribe(  /// 
  res => {
  this.horarios= res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
  },
  err => console.error(err)
  );}
  
  
    loginExist(){
      ///si no esta logueado redirecciona a login
      if(this.usuariosService.getSesionNombre()==''){
      this.router.navigate(['/login']);    
     }}
  
  
  }
  