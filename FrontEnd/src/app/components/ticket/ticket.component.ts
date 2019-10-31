import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Ticket} from 'src/app/modelos/Ticket';
import {TicketsService} from '../../servicios/Tickets.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  tickets: any=[];
  tickets_usuario: any=[];

  @HostBinding('class') classes='row';  //necesario para desplegar un producto a la par de otro 

  public isError=false; 
  public isExito=false; 

ticket:Ticket={    
  cod_ticket: 0,
  asunto: '',
  cuerpo: '',
  cod_estado_fkt: 0,
  cod_usuario_fkt: 0,
}


constructor(private ticketsService: TicketsService, private usuariosService: UsuariosService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    //metodo que verifica si hay usuario logueado
    this.loginExist();
    // metodo para obtener una lista de tickets realizados por un usuario
    this.getTickets_Usuario();




  }


  
  Visualizar_Exito(){
    this.isExito=true; 
    setTimeout(( ) =>{this.isExito= false;}   ,   4000);
  }
  
  
  Visualizar_Error(){
    this.isError=true; 
    setTimeout(( ) =>{this.isError= false;}   ,   4000);
  }
   
  
  onTicket(form:NgForm){
    // console.log( form);
   if(form.valid){
   this.saveTicket();
   }else{
   this.Visualizar_Error();
   }
   
   }
   
  
  
/////guardo 
saveTicket(){
  let cod=this.usuariosService.getSesionCod();
  delete this.ticket.cod_ticket;
  delete this.ticket.cod_estado_fkt;
  this.ticket.cod_usuario_fkt=Number(cod);
  this.ticket.cod_estado_fkt =1;
   console.log(this.ticket);
  this.ticketsService.saveTicket(this.ticket)
  .subscribe(
    res=> {
      console.log(res);
      this.getTickets_Usuario();
      this.Visualizar_Exito();
    },
    err=> console.error(err)

  ) 
}
  
  
  
  
  

  
  
//obtengo las secciones  guardadas
getTickets_Usuario(){
this.ticketsService.getTickets_Usuario(this.usuariosService.getSesionCod().toString()).subscribe(  /// 
  res => {
  this.tickets_usuario= res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
  },
  err =>{ console.log('No se encontraron Tickets');    }
  );}















   ///Metodo para eliminar
   deleteTicket(id: string){
    this.ticketsService.deleteTicket(id).subscribe(  /// 
      res => {    
      this.getTickets_Usuario();     //pido el meodo de pintar los juegos para que se vea el cambio a la hora de eliminar uno y desaparezca
      location.reload();
      },
      err => console.error(err) );}
    
      








  
  loginExist(){
    ///si no esta logueado redirecciona a login
    if(this.usuariosService.getSesionNombre()==''){
    this.router.navigate(['/login']);    
   }}



}
