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

  console.log(req.params)

  const {comidas} = req.params
  
  const platos = await Comidas.find({comidas})
  console.log(platos)
  return res.json({platos})
  
  try {
  	
  } catch (error) {
    console.log(error)
  }
}

export {
  registrarComida,
  consultarComidas
}
