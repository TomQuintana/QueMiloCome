import Comidas from '../models/Comidas.js';

const registrarComida = async (req, res) => {

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
  
  try {
  	
  } catch (error) {
    console.log(error)
  }
}


const filtrarComidas = async (req, res) => {

  const {ingrediente} = req.params;
  const {secundario} = req.params;

  const platos = await Comidas.find({})

  let seleccion = [];

  const filter = platos.forEach(plato => {
    if (plato.ingredientes.primero === ingrediente && plato.ingredientes.segundo === secundario) {
      seleccion = [...seleccion, plato]
      return seleccion = [...seleccion, plato]
    }
  });

  return res.json({seleccion})
}


export {
  registrarComida,
  consultarComidas,
  filtrarComidas
}
