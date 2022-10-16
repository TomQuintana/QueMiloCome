import mongoose from 'mongoose'

const comidasSchema = mongoose.Schema({

  nombrePlato: {
    type: String
    required: true,
    trim: ture,
  },
  ingredientes: {
    type: String
    required: true,
  trim: ture,
  },
  pasos: {
    type: String
    required: true,
    trim: ture,
  },
})

const Comida = mongoose.model('Comida', comidasSchema);

export defualt Comida;
