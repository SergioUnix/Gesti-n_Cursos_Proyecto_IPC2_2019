import { Component, OnInit, HostBinding } from '@angular/core';
import { AsigEstuService} from 'src/app/servicios/asig-estu.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public admin_funcion = false;
  public auxiliar_funcion = false;
  public estudiante_funcion = false;
  public usuario_activo='';
  public buscar='';


  public isExito=false; 
  asig_cursos: any=[]

  constructor(private asigestuService:AsigEstuService,private usuariosService:UsuariosService, private router: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
       // Obtengo los privilegios segun el tipo de rol
   this.onCheckUser();
        //metodo que verifica si hay usuario logueado
        this.loginExist();
     /// metodo que obtiene los cursos asignados al usuario logueado
     this.getCursos_asignados();
  
  



      }






      Visualizar_Exito(){
        this.isExito=true; 
        setTimeout(( ) =>{this.isExito= false;}   ,   3000);
      }
      



desasignar(cod_asignacion_estudiante){
  
  this.asigestuService.deleteAsig_estudiante(cod_asignacion_estudiante.toString()).subscribe(  /// 
    res => { 
    this.Visualizar_Exito();  
    location.reload();
 
    },
    err => console.error(err)
    );}








///obtiene todas las asignaciones que se han hecho de auxiliares
getCursos_asignados(){
  let cod=this.usuariosService.getSesionCod();

  this.asigestuService.getCursos_asignados(cod.toString()).subscribe(  /// 
    res => {
    this.asig_cursos= res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
    },
    err =>  { console.log('No Hay Cursos por parte del Usuario logueado');
    
    }
    );}






  loginExist(){
    ///si no esta logueado redirecciona a login
    if(this.usuariosService.getSesionNombre()==''){
    this.router.navigate(['/login']);    
   }}


  /// Privilegios segun el tipo de Usuario
  onCheckUser(): void {
    if (this.usuariosService.getSesionTipo()=='1') {
      this.admin_funcion = true; 
      this.auxiliar_funcion=true;
      this.estudiante_funcion=true;   
    } else if(this.usuariosService.getSesionTipo()=='2') {
      this.auxiliar_funcion = true;
      this.estudiante_funcion=false;   
    }else if(this.usuariosService.getSesionTipo()=='3') {
      this.estudiante_funcion = true;
      this.auxiliar_funcion=false;
  }}



 
}
