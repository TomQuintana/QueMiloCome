import mongoose from 'mongoose'

const comidasSchema = mongoose.Schema({

  nombrePlato: {
    type: String,
    required: true,
    trim: true,
  },
  ingredientes: {
    primero : {
      type: String,
      required: true,
      trim: true,
    },
    segundo: {
      type: String,
      required: false,
      trim: true,
    }
  },
  pasos: {
    type: String,
    required: true,
    trim: true,
  },
})

const Comida = mongoose.model('Comidas', comidasSchema);

export default Comida;
