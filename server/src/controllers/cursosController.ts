import {Request, Response} from 'express';
const pool = require ('../database');

class CursosController{

    
    
    // Obtengo una lista cursos registrados
    public async list(req: Request, res: Response ){ 
        const arreglo =await pool.query("SELECT * FROM curso");
        res.json(arreglo);  
        }
        //Obtengo solo uno
        public async getOne(req: Request, res: Response ): Promise<any>{    
        const {id} =req.params;
        const arreglo = await pool.query('SELECT * FROM curso where cod_curso=?', [id]);     
        if(arreglo.length>0){
            return res.json(arreglo[0]);
        }else{
        res.status(404).json({text:'El curso no existe '});}  
        }
    
        // Creo uno    
        public async create(req: Request, res: Response ){
        await pool.query('INSERT INTO curso set ?', [req.body]);
        res.json({message: 'Curso Guardado'});    
        }
        // elimino
        public delete(req: Request, res: Response ){
            const {id}= req.params;
            pool.query('Delete from curso where cod_curso=?',[id]);
            res.json({messaage: 'El curso fue eliminado'});
            
        }
    
        /// Actualizar 
        public async update(req: Request, res: Response ){
            const {id}=req.params;
            await pool.query('UPDATE curso set ? WHERE  cod_curso=?', [req.body,id]);
            res.json({massage: 'El curso se ha sido actualizado'});
        }
        
        
     




    // Obtengo una lista de los cursos disponibles
    public async listDisponibles(req: Request, res: Response ){ 
        const arreglo =await pool.query("SELECT * FROM curso where estado='Disponible' ");
        res.json(arreglo);  
        }




}

export const cursosController = new CursosController();