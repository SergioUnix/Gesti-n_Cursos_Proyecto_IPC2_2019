"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const evaluacionesController_1 = require("../controllers/evaluacionesController");
class EvaluacionesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', evaluacionesController_1.evaluacionesController.list); /// obtendo todos 
        this.router.get('/:id', evaluacionesController_1.evaluacionesController.getOne); //obtengo solo uno
        this.router.post('/', evaluacionesController_1.evaluacionesController.create); // creo uno
        this.router.put('/:id', evaluacionesController_1.evaluacionesController.update); //actualizo
        this.router.delete('/:id', evaluacionesController_1.evaluacionesController.delete); // Elimino uno
        this.router.get('/asig/:id', evaluacionesController_1.evaluacionesController.getAsig); //obtengo las asignaciones que se han hecho a un auxiliar
    }
}
const evaluacionesRoutes = new EvaluacionesRoutes();
exports.default = evaluacionesRoutes.router;
