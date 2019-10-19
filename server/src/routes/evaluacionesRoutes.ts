import {Router} from 'express';
import {evaluacionesController} from '../controllers/evaluacionesController';

 class EvaluacionesRoutes{

    public router: Router= Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', evaluacionesController.list); /// obtendo todos 
        this.router.get('/:id', evaluacionesController.getOne);  //obtengo solo uno
        this.router.post('/', evaluacionesController.create);  // creo uno
        this.router.put('/:id', evaluacionesController.update);  //actualizo
        this.router.delete('/:id', evaluacionesController.delete);  // Elimino uno

        this.router.get('/asig/:id', evaluacionesController.getAsig);  //obtengo las asignaciones que se han hecho a un auxiliar
    
    }
}

const evaluacionesRoutes =new EvaluacionesRoutes();
export default evaluacionesRoutes.router; 