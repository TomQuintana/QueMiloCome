import express from 'express';
import dotenv from 'dotenv';
import conectarDb from './config/db.js'
import comidasRoutes from './routes/comidasRoutes.js'

const app = express();

app.use(express.json())

dotenv.config();

// permitir que me pegue x dominio
const dominiosPermitidos = ['http://localhost:5173']

const corsOptions = {
  origin: function(origin, callback) {
    if(dominiosPermitidos.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('No permitido por CORS'))
    }
  }
}


conectarDb();

//NOTE: routing base
app.use('/api/comidas', comidasRoutes)

app.listen(4000, () => {
  console.log('Servidor corriendo en el puerto 4000')
})
