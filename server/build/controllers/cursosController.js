"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pool = require('../database');
class CursosController {
    // Obtengo una lista cursos registrados
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const arreglo = yield pool.query("SELECT * FROM curso");
            res.json(arreglo);
        });
    }
    //Obtengo solo uno
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const arreglo = yield pool.query('SELECT * FROM curso where cod_curso=?', [id]);
            if (arreglo.length > 0) {
                return res.json(arreglo[0]);
            }
            else {
                res.status(404).json({ text: 'El curso no existe ' });
            }
        });
    }
    // Creo uno    
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.query('INSERT INTO curso set ?', [req.body]);
            res.json({ message: 'Curso Guardado' });
        });
    }
    // elimino
    delete(req, res) {
        const { id } = req.params;
        pool.query('Delete from curso where cod_curso=?', [id]);
        res.json({ messaage: 'El curso fue eliminado' });
    }
    /// Actualizar 
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield pool.query('UPDATE curso set ? WHERE  cod_curso=?', [req.body, id]);
            res.json({ massage: 'El curso se ha sido actualizado' });
        });
    }
    // Obtengo una lista de los cursos disponibles
    listDisponibles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const arreglo = yield pool.query("SELECT * FROM curso where estado='Disponible' ");
            res.json(arreglo);
        });
    }
}
exports.cursosController = new CursosController();
