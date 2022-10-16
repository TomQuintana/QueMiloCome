import express from 'express';
import dotenv from 'dotenv';
import conectarDb from './config/db.js'

const app = express();
dotenv.config();

conectarDb();

app.use('/', (req, res) => {
  res.send('Hola Mundo')
})

app.listen(4000, () => {
  console.log('Servidor corriendo en el puerto 4000')
})
