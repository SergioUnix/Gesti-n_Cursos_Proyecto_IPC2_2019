"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asig_auxController_1 = require("../controllers/asig_auxController");
class Asig_auxRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', asig_auxController_1.asig_auxiliarController.list); /// obtendo todos 
        this.router.get('/:id', asig_auxController_1.asig_auxiliarController.getOne); //obtengo solo uno
        this.router.post('/', asig_auxController_1.asig_auxiliarController.create); // creo uno
        this.router.put('/:id', asig_auxController_1.asig_auxiliarController.update); //actualizo
        this.router.delete('/:id', asig_auxController_1.asig_auxiliarController.delete); // Elimino uno
    }
}
const asig_auxRoutes = new Asig_auxRoutes();
exports.default = asig_auxRoutes.router;
