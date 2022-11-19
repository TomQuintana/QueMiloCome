import mongoose from 'mongoose'
// le pego a la api para guarda el plato

const comidasSchema = mongoose.Schema({

  nombrePlato: {
    type: String,
    required: true,
    trim: true,
  },
  primerIngrediente: {
    type: String,
    required: true,
    trim: true,
  },
  segundoIngrediente: {
    type: String,
    required: true,
    trim: true,
  },
  pasos: {
    type: String,
    required: false,
    trim: true,
  },
})

const Comida = mongoose.model('Comidas', comidasSchema);

export default Comida;
