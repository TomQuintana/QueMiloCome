import Comidas from '../models/Comidas.js';

const registrarComida = async (req, res) => {

  const {nombrePlato} = req.body

  const existePlato = await Comidas.findOne({nombrePlato})

  if(existePlato) {
    console.log('Existe')
    const error = new Error('Plato ya registrado');
    return res.status(400).json({msg: error.message})
  }

  try {
    const comidas = new Comidas(req.body)
    const comidaGuardada = await comidas.save();
    res.json({comidaGuardada})

  } catch (error) {
    console.log(error)

  }
}


const consultarComidas = async (req,res) => {

  const {comidas} = req.params

  const platos = await Comidas.find({comidas})
  //console.log(platos)
  return res.json({platos})
  
}


const filtrarComidas = async (req, res) => {

  const {primario} = req.params;
  const {secundario} = req.params;
  console.log(req.params)

  //NOTE: traigo todos los platos
  const platos = await Comidas.find({})
  let seleccion = [];

  //NOTE: requisito necesario 2 alimentos para filtrar
  const filter = platos.forEach(plato => {
    if (plato.ingredientes.primero === primario && plato.ingredientes.segundo === secundario) {
      seleccion = [...seleccion, plato]
    } 
    return seleccion
  });

  if(seleccion.length <= 0) {
    return res.json({msg: "No se encontraron coincidencias"})
  }

  return res.json({seleccion})
}


export {
  registrarComida,
  consultarComidas,
  filtrarComidas
}

