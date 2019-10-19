import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { ForosService} from 'src/app/servicios/foros.service';
import { NgForm } from '@angular/forms';
import { Publicacion } from 'src/app/modelos/Publicacion';

@Component({
  selector: 'app-publica-list',
  templateUrl: './publica-list.component.html',
  styleUrls: ['./publica-list.component.css']
})
export class PublicaListComponent implements OnInit {


  constructor(private forosService:ForosService,private usuariosService:UsuariosService, private router: Router,private activatedRoute:ActivatedRoute) { }
  public isError2=false; 
  public isError=false; 
  public isExito=false; 
  public isErrorGuardar=false;

  public ref_publi=0;

  public creador_pu_usuario=0;
  public pu_hijos: any=[];

  
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
    this.ref_publi=params.id;
    //obtengo el codigo del usuario logueado
    this.creador_pu_usuario=Number(this.usuariosService.getSesionCod());
         
    //obtengo la lista de publicaciones padre
    this.getHijos(params.id); 
  }

  }




  Visualizar_ErrorGuardar(){
    this.isErrorGuardar=true; 
    setTimeout(( ) =>{this.isErrorGuardar= false;}   ,   3000);
  }
  Visualizar_Exito(){
    this.isExito=true; 
    setTimeout(( ) =>{this.isExito= false;}   ,   3000);
  }
  

  Visualizar_Error2(){
    this.isError2=true; 
    setTimeout(( ) =>{this.isError= false;}   ,   3000);
  }
   

  Visualizar_Error(){
    this.isError=true; 
    setTimeout(( ) =>{this.isError= false;}   ,   5000);
  }
   



 onPublicar(form:NgForm){
  // console.log( form);
 if(form.valid){
 this.saveHijo();

 }else{
 this.Visualizar_Error2();
 }
 
 }
 





 //Guardar Auxiliar
  saveHijo(){    

    delete this.publicacion.cod_publicacion;
    delete this.publicacion.cod_foro_fk;

    this.publicacion.creador_pu_usuario=this.creador_pu_usuario;
    this.publicacion.ref_publi= this.ref_publi;

    this.forosService.savePadre(this.publicacion)
    .subscribe(
      res=> { 
      // this.router.navigate(['/']);
      console.log('Comentario Padre Guardado');
      this.getHijos(this.ref_publi); 
      this.Visualizar_Exito();
      },
      err=>{ console.error(err);
      this.Visualizar_ErrorGuardar();
      }
    ) 
  
  
      }













/// obtengo todas las publicaciones padre
getHijos(ref_publi){
  this.forosService.getHijos(ref_publi).subscribe(  /// 
    res => {
      this.pu_hijos = res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
     },
    err => {console.log('no hay respuestas a esta publicación');
  this.Visualizar_Error();
  }
  );
}





  loginExist(){
    ///si no esta logueado redirecciona a login
    if(this.usuariosService.getSesionNombre()==''){
    this.router.navigate(['/login']);    
   }}

}
