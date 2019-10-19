import { Injectable } from '@angular/core';
import { Foro } from 'src/app/modelos/Foro';   //importo el tipo de dato,
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Publicacion } from 'src/app/modelos/Publicacion';   //importo el tipo de dato,

@Injectable({
  providedIn: 'root'
})
export class EvaluacionesService {
  API_URI = 'http://localhost:3000/api';


constructor(private router:Router, private http:HttpClient) { }



//metodo para pedir 
getEvaluaciones(){
return this.http.get(`${this.API_URI}/evaluaciones`);
}



//metodo para obtener 
getEvaluacion(id: string){
return this.http.get(`${this.API_URI}/evaluaciones/${id}`);
}

//metodo para guardar 
saveEvaluacion(foro:Foro){
return this.http.post(`${this.API_URI}/evaluaciones`, foro);

}
//metodo de borrar
deleteEvaluacion(id: string){
return this.http.delete(`${this.API_URI}/evaluaciones/${id}`);
}
//metodo de actualizar 
updateEvaluacion(id:string, updated:Evaluacion){
return this.http.put(`${this.API_URI}/evaluaciones/${id}`, updated);

}

//metodo para obtener todas las a signaciones de un auxiliar-- utilizo para obtener cursos-- doy el cod_Usuario auxiliar 
getAsig(id: string){
  return this.http.get(`${this.API_URI}/evaluaciones/asig/${id}`);
  }






}
