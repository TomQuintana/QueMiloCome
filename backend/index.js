import express from 'express';
import conectarDb from './config/db.js'

const app = express();

conectarDb();

app.use('/', (req, res) => {
  res.send('Hola Mundo')
})

app.listen(4000, () => {
  console.log('Servidor corriendo en el puerto 4000')
})
