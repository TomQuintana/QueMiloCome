import express from 'express';
import {registrarComida, consultarComidas} from '../controllers/comidaController.js'

const router = express.Router();

router.post('/registrar', registrarComida)
router.get('/consultar/:comidas', consultarComidas)

export default router 
