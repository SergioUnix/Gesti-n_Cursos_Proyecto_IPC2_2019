import {Request, Response} from 'express';
const pool = require ('../database');

class EvaluacionesController{

    
    
    // Obtengo una lista cursos registrados
    public async list(req: Request, res: Response ){ 
        const arreglo =await pool.query("Select * From evaluacion");
        res.json(arreglo);  
        }
        //Obtengo un solo foro con el codigo de asignacion_auxiliar
        public async getOne(req: Request, res: Response ): Promise<any>{    
        const {id} =req.params;
        const arreglo = await pool.query('SELECT', [id]);     
        if(arreglo.length>0){
            return res.json(arreglo);
        }else{
        res.status(404).json({text:'El foro no existe '});}  
        }
    
        // Creo uno    
        public async create(req: Request, res: Response ){
        await pool.query('INSERT INTO evaluacion set ?', [req.body]);
        res.json({message: 'evaluacion se guardo'});    
        }
        // elimino
        public delete(req: Request, res: Response ){
            const {id}= req.params;
            pool.query('Delete from evaluacion where cod_evaluacion=?',[id]);
            res.json({messaage: 'la evaluacion fue eliminada'});
            
        }
    
        /// Actualizar 
        public async update(req: Request, res: Response ){
            const {id}=req.params;
            await pool.query('UPDATE evaluacion set ? WHERE  cod_evaluacion=?', [req.body,id]);
            res.json({massage: 'Evaluacion se ha actualizado'});
        }
        
             //Obtengo todos los cursos que se han asignado aun Auxiliar----
             public async getAsig(req: Request, res: Response ): Promise<any>{    
                const {id} =req.params;
                const arreglo = await pool.query('SELECT cod_asignacion_auxiliar, semestre, año as anio, fecha_limite, cod_usuario_fk, cod_curso_fk, usuario.nombre as auxiliar,curso.nombre as curso, seccion.nombre as seccion, horario.hora_inicio, horario.hora_final FROM asignacion_auxiliar INNER JOIN usuario ON cod_usuario_fk =cod_usuario inner join curso on cod_curso=cod_curso_fk inner Join seccion ON cod_seccion=cod_seccion_fk inner join horario On cod_horario = cod_horario_fk where cod_usuario_fk=?', [id]);     
                if(arreglo.length>0){
                    return res.json(arreglo[0]);
                }else{
                res.status(404).json({text:'La asignacion_auxiliar no existe '});}  
                }

}

export const evaluacionesController = new EvaluacionesController();