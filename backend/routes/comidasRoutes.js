import express from 'express';
import {registrarComida, consultarComidas, filtrarComidas} from '../controllers/comidaController.js'

const router = express.Router();

router.post('/registrar', registrarComida)
router.get('/platos-all/:comidas', consultarComidas)
router.get('/plato-filter/:ingrediente/:secundario', filtrarComidas)

export default router 
