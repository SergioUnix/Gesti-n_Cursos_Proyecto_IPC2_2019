import {Router} from 'express';
import {actividadesController} from '../controllers/actividadesController';

 class ActividadesRoutes{

    public router: Router= Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', actividadesController.list); /// obtendo 
        this.router.get('/usuario/:id', actividadesController.getList_user);  //obtengo todas las actividades de un usuario -------
        this.router.get('/asignacion/aux/:id', actividadesController.getActividades_curso);  //obtengo todas las actividades de un curso -------
        this.router.get('/lista/actividad/usuario/:id', actividadesController.getOne);  //obtengo solo una actividad dado un cod_actividad -------

        this.router.post('/', actividadesController.create);  // creo una actividad -----------
        this.router.put('/:id', actividadesController.update);  //actualizo
        this.router.delete('/:id', actividadesController.delete);  // Elimino uno
        

        this.router.put('/estado/:estado/:id', actividadesController.updateEstado);  //actualizo
        
    }
}

const actividadesRoutes =new ActividadesRoutes();
export default actividadesRoutes.router; 