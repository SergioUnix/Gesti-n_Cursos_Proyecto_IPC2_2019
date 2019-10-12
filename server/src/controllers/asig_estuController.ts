import {Request, Response} from 'express';
const pool = require ('../database');

class Asig_estudianteController{

    
  
    
    // Obtengo una lista de los productos disponibles
    public async list(req: Request, res: Response ){ 
        const arreglo =await pool.query("SELECT * FROM asignacion_estudiante");
        res.json(arreglo);  
        }
        //Obtengo solo uno
        public async getOne(req: Request, res: Response ): Promise<any>{    
        const {id} =req.params;
        const arreglo = await pool.query('SELECT * FROM asignacion_estudiante where cod_asignacion_estudiante=?', [id]);     
        if(arreglo.length>0){
            return res.json(arreglo[0]);
        }else{
        res.status(404).json({text:'la asignacion no existe '});}  
        }
    
        // Creo uno    
        public async create(req: Request, res: Response ){
        await pool.query('INSERT INTO asignacion_estudiante set ?', [req.body]);
        res.json({message: 'Guardado'});    
        }
        // elimino
        public delete(req: Request, res: Response ){
            const {id}= req.params;
            pool.query('Delete from asignacion_estudiante where cod_asignacion_estudiante=?',[id]);
            res.json({messaage: 'eliminado'});
            
        }
    
        /// Actualizar 
        public async update(req: Request, res: Response ){
            const {id}=req.params;
            await pool.query('UPDATE asignacion_estudiante set ? WHERE  cod_asignacion_estudiante=?', [req.body,id]);
            res.json({massage: 'se ha sido actualizado'});
        }
        
        
     
     
    

}

export const asig_estudianteController = new Asig_estudianteController();