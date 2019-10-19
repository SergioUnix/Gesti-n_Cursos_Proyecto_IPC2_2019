import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { ForosService} from 'src/app/servicios/foros.service';
import { NgForm } from '@angular/forms';
import { Publicacion } from 'src/app/modelos/Publicacion';


@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {

  constructor(private forosService:ForosService,private usuariosService:UsuariosService, private router: Router,private activatedRoute:ActivatedRoute) { }
  foro: any=[];
  public cod_asig_curso=0;
  public cod_foro=0;
  public creador_pu_usuario=0;

  public pu_padres: any=[];

  public isError=false; 
  public isExito=false; 
  public isErrorGuardar=false;
  
  publicacion: Publicacion ={
    cod_publicacion: 0,
    comentario: '',
    ref_publi: 0,
    creador_pu_usuario: 0,
    cod_foro_fk: 0,
     };
  




  ngOnInit() {
           //metodo que verifica si hay usuario logueado
           this.loginExist();


  
  const params =this.activatedRoute.snapshot.params;
  //console.log(params);
  if(params.id){        //este params.id me detecta el numero
    this.cod_asig_curso=params.id;
    this.forosService.getForo(params.id)
    .subscribe(
    res =>{
    this.foro=res;
    //obtengo el codigo del usuario logueado
    this.creador_pu_usuario=Number(this.usuariosService.getSesionCod());
    //busco el foro y obtengo su cod_foro
    this.cod_foro=Number(this.foro[0].cod_foro);
    //obtengo la lista de publicaciones padre
    this.getPadres(this.cod_foro); 
   
    },
    err => console.error(err)        )}

  }





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
 

 onPublicar(form:NgForm){
  // console.log( form);
 if(form.valid){
 this.savePadre();

 }else{
 this.Visualizar_Error();
 }
 
 }
 





 //Guardar Auxiliar
  savePadre(){    

    delete this.publicacion.cod_publicacion;
    delete this.publicacion.ref_publi;

    this.publicacion.cod_foro_fk=this.cod_foro;
    this.publicacion.creador_pu_usuario=this.creador_pu_usuario;
   

    this.forosService.savePadre(this.publicacion)
    .subscribe(
      res=> { 
      // this.router.navigate(['/']);
      console.log('Comentario Padre Guardado');
      this.getPadres(this.cod_foro); 
      this.Visualizar_Exito();
      },
      err=>{ console.error(err);
      this.Visualizar_ErrorGuardar();
      }
    ) 
  
  
      }














/// obtengo todas las publicaciones padre
 getPadres(cod_foro){
    this.forosService.getPadres(cod_foro).subscribe(  /// 
      res => {
        this.pu_padres = res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
       },
      err => console.error(err)
    );
  }
  



  loginExist(){
    ///si no esta logueado redirecciona a login
    if(this.usuariosService.getSesionNombre()==''){
    this.router.navigate(['/login']);    
   }}

}
