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
class EvaluacionesController {
    // Obtengo una lista cursos registrados
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const arreglo = yield pool.query("Select * From evaluacion");
            res.json(arreglo);
        });
    }
    //Obtengo un solo foro con el codigo de asignacion_auxiliar
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const arreglo = yield pool.query('SELECT', [id]);
            if (arreglo.length > 0) {
                return res.json(arreglo);
            }
            else {
                res.status(404).json({ text: 'El foro no existe ' });
            }
        });
    }
    // Creo uno    
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.query('INSERT INTO evaluacion set ?', [req.body]);
            res.json({ message: 'evaluacion se guardo' });
        });
    }
    // elimino
    delete(req, res) {
        const { id } = req.params;
        pool.query('Delete from evaluacion where cod_evaluacion=?', [id]);
        res.json({ messaage: 'la evaluacion fue eliminada' });
    }
    /// Actualizar 
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield pool.query('UPDATE evaluacion set ? WHERE  cod_evaluacion=?', [req.body, id]);
            res.json({ massage: 'Evaluacion se ha actualizado' });
        });
    }
    //Obtengo todos los cursos que se han asignado aun Auxiliar----
    getAsig(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const arreglo = yield pool.query('SELECT cod_asignacion_auxiliar, semestre, año as anio, fecha_limite, cod_usuario_fk, cod_curso_fk, usuario.nombre as auxiliar,curso.nombre as curso, seccion.nombre as seccion, horario.hora_inicio, horario.hora_final FROM asignacion_auxiliar INNER JOIN usuario ON cod_usuario_fk =cod_usuario inner join curso on cod_curso=cod_curso_fk inner Join seccion ON cod_seccion=cod_seccion_fk inner join horario On cod_horario = cod_horario_fk where cod_usuario_fk=?', [id]);
            if (arreglo.length > 0) {
                return res.json(arreglo[0]);
            }
            else {
                res.status(404).json({ text: 'La asignacion_auxiliar no existe ' });
            }
        });
    }
}
exports.evaluacionesController = new EvaluacionesController();
