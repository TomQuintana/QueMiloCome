import express from 'express';
import dotenv from 'dotenv';
import conectarDb from './config/db.js'
import comidasRoutes from './routes/comidasRoutes.js'

const app = express();

app.use(express.json())

dotenv.config();

conectarDb();

//NOTE: routing base
app.use('/api/comidas', comidasRoutes)

app.listen(4000, () => {
  console.log('Servidor corriendo en el puerto 4000')
})
