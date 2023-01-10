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


const buscarPlatos = async (req,res) => {
  console.time('Time')

  const peticion = req.body;
  
  if (Object.entries(peticion).length === 0) {
    console.log('No hay ningun ingrediente')
    const platosAll = await Comidas.find({})

    const error = new Error('No hay ningun ingrediente');
  }

  try {
    const platos = await Comidas.find({})
  
    platos.forEach( platoSeleccionado => {
      let seleccion = []
  
      if(platoSeleccionado.ingredientes.primero === peticion.ingrediente1 || platoSeleccionado.ingredientes.segundo === peticion.ingrediente2 ) {
        seleccion.push(platoSeleccionado)
        console.log(seleccion)
        return res.json({seleccion})
      }
    })
    
  } catch (error) {
    console.log(error)
  }
  
  console.timeEnd('Time')
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

const filtrarTipo = async (req, res) => {
  const {tipo} = req.body;

  //NOTE: el tipo tiene que ser exacto o no devuelve nada
  const tipoComida = await Comidas.find({tipo})
  return res.json({tipoComida})
}

const comidasPorDia = () => {
  
}

export {
  registrarComida,
  buscarPlatos,
  filtrarComidas,
  filtrarTipo,
  comidasPorDia
}

//TODO: comitear los cambios