import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Horario } from 'src/app/modelos/Horario';
import {HorariosService} from '../../servicios/horarios.service'

@Component({
  selector: 'app-horario-edit',
  templateUrl: './horario-edit.component.html',
  styleUrls: ['./horario-edit.component.css']
})
export class HorarioEditComponent implements OnInit {
  @HostBinding('class') classes='row';  //necesario para desplegar un producto a la par de otro 
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
  



    const params =this.activatedRoute.snapshot.params;
    //console.log(params);
    if(params.id){        //este params.id me detecta el numero
      this.horariosService.getHorario(params.id)
        .subscribe(
           res =>{
             console.log(res)
            this.horario=res; ///cuando accedo ala ruta game/edit/id ,, aca hago el objeto con el id recibido y eso me muestra en visualizacion
            var horaInicio = this.horario.hora_inicio.split(":", 3);
            var horaFinal = this.horario.hora_final.split(":", 3);
            this.hora=horaInicio[0];
            this.minuto=horaInicio[1];
            this.hora2=horaFinal[0];
            this.minuto2=horaFinal[1];
           },
           err => console.error(err)        )}



  }










//Actualizo el Horario
  updateHorario(){
    const numero =this.horario.cod_horario;
    delete this.horario.cod_horario;
    this.horario.hora_inicio=this.hora+':'+this.minuto+':'+'00';
    this.horario.hora_final=this.hora2+':'+this.minuto2+':'+'00';

    console.log(this.horario);
    this.horariosService.updateHorario(numero.toString(), this.horario)
      .subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/horario']);
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
