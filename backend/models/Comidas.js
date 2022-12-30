import mongoose from 'mongoose'
// le pego a la api para guarda el plato

const comidasSchema = mongoose.Schema({

  nombrePlato: {
    type: String,
    required: true,
    trim: true,
  },
  ingredientes: {
    primero: {
      type: String,
      required: true,
      trim: true,
    },
    segundo: {
      type: String,
      required: true,
      trim: true,
    },
  },
  pasos: {
    type: String,
    required: false,
    trim: true,
  },
  tipo: {
    type: String,
    required: true,
    trim: true
  }
})

const Comida = mongoose.model('Comidas', comidasSchema);

export default Comida;
