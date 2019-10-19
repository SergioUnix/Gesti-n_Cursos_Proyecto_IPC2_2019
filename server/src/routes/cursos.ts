import {Router} from 'express';
import {cursosController} from '../controllers/cursosController';

 class CursosRoutes{

    public router: Router= Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', cursosController.list); /// obtendo todos 
        this.router.get('/:id', cursosController.getOne);  //obtengo solo uno
        this.router.post('/', cursosController.create);  // creo uno
        this.router.put('/:id', cursosController.update);  //actualizo
        this.router.delete('/:id', cursosController.delete);  // Elimino uno
        
        this.router.get('/disponibles/dis', cursosController.listDisponibles); /// obtendo los Disponibles
        this.router.put('/Disponi/:id', cursosController.updateDis);  //actualizo
        this.router.put('/Ocupado/Ocu/:id', cursosController.updateOcup);  //actualizo
    }
}

const cursosRoutes =new CursosRoutes();
export default cursosRoutes.router; 