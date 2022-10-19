import mongoose from 'mongoose'

const comidasSchema = mongoose.Schema({

  nombrePlato: {
    type: String,
    required: true,
    trim: true,
  },
  ingredientes: {
    type: String,
    required: true,
    trim: true,
  },
  pasos: {
    type: String,
    required: true,
    trim: true,
  },
})

const Comida = mongoose.model('Comidas', comidasSchema);

export default Comida;
