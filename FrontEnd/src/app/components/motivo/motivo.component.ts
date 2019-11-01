import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { AsigAuxService} from 'src/app/servicios/asig-aux.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Motivo } from 'src/app/modelos/Motivo';
import { Asig_Aux } from 'src/app/modelos/Asig_Aux';
import { NgForm } from '@angular/forms';
import { CursosService } from 'src/app/servicios/cursos.service';

@Component({
  selector: 'app-motivo',
  templateUrl: './motivo.component.html',
  styleUrls: ['./motivo.component.css']
})
export class MotivoComponent implements OnInit {
  public isError=false; 
  public isExito=false; 
  public isErrorGuardar=false;

  public cod_asignacion_auxiliar=0;
  public cod_usuario =0; 
  public nombre='';

  motivo_des:Motivo={  
    cod_desasignacion: 0,
    nombre: '',
    carnet: '',
    curso: '',
    motivo: '',
    cod_usuario_fk: 0,
}


asig_aux:Asig_Aux={
  cod_asignacion_auxiliar: 0,
  semestre: '',
  año: 0,
  fecha_limite: '',
  cod_usuario_fk: 0,
  cod_curso_fk: 0,
}

constructor(private cursosService:CursosService,private asigauxService:AsigAuxService, private activatedRoute:ActivatedRoute,private usuariosService: UsuariosService, private router: Router) { }


  ngOnInit() {
    
//metodo que verifica si hay usuario logueado
this.loginExist();


const params =this.activatedRoute.snapshot.params;
if(params.id){        //este params.id me detecta el numero
  this.cod_asignacion_auxiliar=params.id;
  this.cod_usuario= Number(this.usuariosService.getSesionCod());
  this.nombre = this.usuariosService.getSesionNombre();
this.getAsignacion();


}



  }

/// obtengo datos de la asignación enviada
getAsignacion(){
  this.asigauxService.getAsignacion(this.cod_asignacion_auxiliar.toString()).subscribe(  /// 
    res => {
    this.asig_aux= res;  
    console.log(this.asig_aux)  
    },
    err => console.error(err)
    );}







///manejar el form y alertas

Visualizar_ErrorGuardar(){
  this.isErrorGuardar=true; 
  setTimeout(( ) =>{this.isErrorGuardar= false;}   ,   3000);
}
Visualizar_Exito(){
  this.isExito=true; 
  setTimeout(( ) =>{this.isExito= false;}   ,   3000);
}


Visualizar_Error(){
  this.isError=true; 
  setTimeout(( ) =>{this.isError= false;}   ,   3000);
}
 

onMotivo(form:NgForm){
  // console.log( form);
 if(form.valid){
 //this.saveCurso();
 this.saveMotivo();
}else{
 this.Visualizar_Error();
 }
 
 }
 





 //Guardar motivo de desasignación
 saveMotivo(){ 

  
  delete  this.motivo_des.cod_desasignacion;
  delete this.motivo_des.curso;
  delete this.motivo_des.carnet;
 this.motivo_des.nombre=this.nombre;
 this.motivo_des.cod_usuario_fk=this.cod_usuario;


 this.asigauxService.saveMotivo(this.motivo_des)
 .subscribe(
   res=> { 
   console.log('Motivo Guardado');

   this.Visualizar_Exito();
  this.deleteAsignacion(this.cod_asignacion_auxiliar.toString(), this.asig_aux.cod_curso_fk.toString());
   },
   err=>{ 
   this.Visualizar_ErrorGuardar();
   }
 ) 



    }





   ///Metodo para eliminar
   deleteAsignacion(id: string, cod_curso:string){
    this.asigauxService.deleteAsig_aux(id).subscribe(  /// 
      res => {    
      console.log('Se elimino la asignacion_auxiliar')   //pido el meodo de pintar los juegos para que se vea el cambio a la hora de eliminar uno y desaparezca
      this.cambioDisponible(cod_curso.toString());
      location.reload();
      },
      err => console.error(err) );}



cambioDisponible(codigo_curso:String){
  this.cursosService.updateDisponible(codigo_curso.toString(),"").subscribe(  /// 
    res => {
    console.log("cambio de estado")   ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
    },
    err => console.error(err)
    );}




  
 loginExist(){
  ///si no esta logueado redirecciona a login
  if(this.usuariosService.getSesionNombre()==''){
  this.router.navigate(['/login']);    
  }}
 
}
