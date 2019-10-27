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
class ActividadesController {
    // Obtengo una lista de tickets de cualquier usuario
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productos = yield pool.query("SELECT * FROM proyecto.actividad");
            res.json(productos);
        });
    }
    //Actividades realizadas por un usuario dado un cod_usuario_fk
    getList_user(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const arreglo = yield pool.query('SELECT cod_actividad, actividad.nombre, hora, actividad.fecha_limite as fecha_actividad, ponderacion, archivo, texto, ruta_archivo, cod_asignacion_auxiliar_fk, actividad.cod_usuario_fk as usuario_actividad, usuario.nombre as auxiliar, curso.nombre as curso, seccion.nombre as seccion FROM proyecto.actividad inner join usuario on actividad.cod_usuario_fk= usuario.cod_usuario inner join asignacion_auxiliar on cod_asignacion_auxiliar = actividad.cod_asignacion_auxiliar_fk inner join curso on asignacion_auxiliar.cod_curso_fk = curso.cod_curso inner join seccion on seccion.cod_seccion= curso.cod_seccion_fk where actividad.cod_usuario_fk=?', [id]);
            if (arreglo.length > 0) {
                return res.json(arreglo);
            }
            else {
                res.status(404).json({ text: 'No hay actividades ' });
            }
        });
    }
    //Actividades por hacer dado un cod_asignacion_auxiliar, todas las actividades de un curso
    getActividades_curso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const arreglo = yield pool.query('SELECT cod_actividad, actividad.nombre, hora, actividad.fecha_limite as fecha_actividad, ponderacion, archivo, texto, ruta_archivo, cod_asignacion_auxiliar_fk, actividad.cod_usuario_fk as usuario_actividad, usuario.nombre as auxiliar, curso.nombre as curso, seccion.nombre as seccion FROM proyecto.actividad inner join usuario on actividad.cod_usuario_fk= usuario.cod_usuario inner join asignacion_auxiliar on cod_asignacion_auxiliar = actividad.cod_asignacion_auxiliar_fk inner join curso on asignacion_auxiliar.cod_curso_fk = curso.cod_curso inner join seccion on seccion.cod_seccion= curso.cod_seccion_fk where actividad.cod_asignacion_auxiliar_fk=?', [id]);
            if (arreglo.length > 0) {
                return res.json(arreglo);
            }
            else {
                res.status(404).json({ text: 'No hay actividades ' });
            }
        });
    }
    //obtengo solo una actividad
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const arreglo = yield pool.query('Select * from actividad where cod_actividad=?', [id]);
            if (arreglo.length > 0) {
                return res.json(arreglo[0]);
            }
            else {
                res.status(404).json({ text: 'No hay actividades ' });
            }
        });
    }
    // Creo una actividad ----------------------
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.query('INSERT INTO actividad set ?', [req.body]);
            res.json({ message: 'actividad Guardada' });
        });
    }
    // elimino ------------------
    delete(req, res) {
        const { id } = req.params;
        pool.query('Delete from actividad where cod_actividad=?', [id]);
        res.json({ messaage: 'Actividad Eliminada' });
    }
    /// Actualizar
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield pool.query('UPDATE ticket set ? WHERE  cod_ticket=?', [req.body, id]);
            res.json({ massage: 'El horario se ha sido actualizado' });
        });
    }
    // Funcion 
    updateEstado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { estado } = req.params;
            yield pool.query("UPDATE ticket set cod_estado_fkt=?  WHERE  cod_ticket=?", [estado, id]);
            res.json({ massage: 'Estado Cambiado' });
        });
    }
}
exports.actividadesController = new ActividadesController();
