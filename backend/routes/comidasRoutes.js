import express from 'express';
import {registrarComida, consultarComidas, filtrarComidas, filtrarTipo} from '../controllers/comidaController.js'

const router = express.Router();

router.post('/registrar', registrarComida)
router.get('/platos-all/:comidas', consultarComidas)
router.get('/plato-filter/:primario/:secundario', filtrarComidas)
router.post('/tipo-comida', filtrarTipo)

console.log()

export default router 
