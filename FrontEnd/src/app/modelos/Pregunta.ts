export interface Pregunta  {
    cod_pregunta?: number;
    pregunta?: string;
    correcta?: string;
    respuesta?: string;
    opcion1?: string;
    opcion2?: string;
    opcion3?: string;
    cod_evaluacion_fk?: number;
   
}