import express from 'express';
import {registrarComida, buscarPlatos, filtrarComidas, filtrarTipo} from '../controllers/comidaController.js'

const router = express.Router();

router.post('/registrar', registrarComida)
router.post('/buscar-platos', buscarPlatos)
router.get('/plato-filter/:primario/:secundario', filtrarComidas)
router.post('/tipo-comida', filtrarTipo)

console.log()

export default router 
