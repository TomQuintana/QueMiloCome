import express from 'express';
import dotenv from 'dotenv';
import conectarDb from './config/db.js'
import comidasRoutes from './routes/comidasRoutes.js'

const app = express();
dotenv.config();

conectarDb();

app.use('/api/comidas', comidasRoutes)

app.listen(4000, () => {
  console.log('Servidor corriendo en el puerto 4000')
})
