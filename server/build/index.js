"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
const horariosRoutes_1 = __importDefault(require("./routes/horariosRoutes"));
const seccionRoutes_1 = __importDefault(require("./routes/seccionRoutes"));
const cursos_1 = __importDefault(require("./routes/cursos"));
const asig_estuRoutes_1 = __importDefault(require("./routes/asig_estuRoutes"));
const asig_auxRoutes_1 = __importDefault(require("./routes/asig_auxRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json()); ///acepta desde angular archivos en formato json
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/api/usuarios', usuariosRoutes_1.default);
        this.app.use('/api/horarios', horariosRoutes_1.default);
        this.app.use('/api/seccion', seccionRoutes_1.default);
        this.app.use('/api/cursos', cursos_1.default);
        this.app.use('/api/asig_estudiante', asig_estuRoutes_1.default);
        this.app.use('/api/asig_auxiliar', asig_auxRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
