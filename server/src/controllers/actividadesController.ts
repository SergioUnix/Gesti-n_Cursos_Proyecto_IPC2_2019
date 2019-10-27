import {Request, Response} from 'express';
const pool = require ('../database');

class ActividadesController{
    
    // Obtengo una lista de tickets de cualquier usuario
    public async list(req: Request, res: Response ){ 
    const productos =await pool.query("SELECT * FROM proyecto.actividad" );
    res.json(productos);  
    }
    //Actividades realizadas por un usuario dado un cod_usuario_fk
    public async getList_user(req: Request, res: Response ): Promise<any>{    
    const {id} =req.params;
    const arreglo = await pool.query('SELECT cod_actividad, actividad.nombre, hora, actividad.fecha_limite as fecha_actividad, ponderacion, archivo, texto, ruta_archivo, cod_asignacion_auxiliar_fk, actividad.cod_usuario_fk as usuario_actividad, usuario.nombre as auxiliar, curso.nombre as curso, seccion.nombre as seccion FROM proyecto.actividad inner join usuario on actividad.cod_usuario_fk= usuario.cod_usuario inner join asignacion_auxiliar on cod_asignacion_auxiliar = actividad.cod_asignacion_auxiliar_fk inner join curso on asignacion_auxiliar.cod_curso_fk = curso.cod_curso inner join seccion on seccion.cod_seccion= curso.cod_seccion_fk where actividad.cod_usuario_fk=?', [id]);         
    if(arreglo.length>0){
        return res.json(arreglo);
    }else{
    res.status(404).json({text:'No hay actividades '});}  
    }

    //Actividades por hacer dado un cod_asignacion_auxiliar, todas las actividades de un curso
    public async getActividades_curso(req: Request, res: Response ): Promise<any>{    
        const {id} =req.params;
        const arreglo = await pool.query('SELECT cod_actividad, actividad.nombre, hora, actividad.fecha_limite as fecha_actividad, ponderacion, archivo, texto, ruta_archivo, cod_asignacion_auxiliar_fk, actividad.cod_usuario_fk as usuario_actividad, usuario.nombre as auxiliar, curso.nombre as curso, seccion.nombre as seccion FROM proyecto.actividad inner join usuario on actividad.cod_usuario_fk= usuario.cod_usuario inner join asignacion_auxiliar on cod_asignacion_auxiliar = actividad.cod_asignacion_auxiliar_fk inner join curso on asignacion_auxiliar.cod_curso_fk = curso.cod_curso inner join seccion on seccion.cod_seccion= curso.cod_seccion_fk where actividad.cod_asignacion_auxiliar_fk=?', [id]);      
            if(arreglo.length>0){
            return res.json(arreglo);
        }else{
        res.status(404).json({text:'No hay actividades '});}  
        }

    //obtengo solo una actividad
    public async getOne(req: Request, res: Response ): Promise<any>{    
        const {id} =req.params;
        const arreglo = await pool.query('Select * from actividad where cod_actividad=?', [id]);      
            if(arreglo.length>0){
            return res.json(arreglo[0]);
        }else{
        res.status(404).json({text:'No hay actividades '});}  
        }



    // Creo una actividad ----------------------
    public async create(req: Request, res: Response ){
    await pool.query('INSERT INTO actividad set ?', [req.body]);
    res.json({message: 'actividad Guardada'});    
    }

    // elimino ------------------
    public delete(req: Request, res: Response ){
        const {id}= req.params;
        pool.query('Delete from actividad where cod_actividad=?',[id]);
        res.json({messaage: 'Actividad Eliminada'});
        
    }

    /// Actualizar
    public async update(req: Request, res: Response ){
        const {id}=req.params;
        await pool.query('UPDATE ticket set ? WHERE  cod_ticket=?', [req.body,id]);
        res.json({massage: 'El horario se ha sido actualizado'});
    }
    
    
    // Funcion 
    public async updateEstado(req: Request, res: Response ){
        const {id}=req.params;
        const {estado}=req.params;
        await pool.query("UPDATE ticket set cod_estado_fkt=?  WHERE  cod_ticket=?", [estado,id]);
        res.json({massage: 'Estado Cambiado'});
    }


}

export const actividadesController = new ActividadesController();