import React from 'react'
import Error from './Error'
import { useState } from 'react'

//TODO: usando props 
const Formulario = ({plato, setPlato}) => {

  const [nombrePlato, setNombrePlato] = useState('')
  const [primerIngrediente, setPrimerIngrediente] = useState('')
  const [segundoIngrediente, setSegundoIngrediente] = useState('')
  const [pasos, setPasos] = useState('')

  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    // validacion
    if ([nombrePlato, primerIngrediente, segundoIngrediente, pasos].includes('')) {
      console.log('Hay campos vacios')

      setError(true)
      return;
    } 

      setError(false)

    // objeto de platos
    const objetoPlato = {
      nombrePlato, 
      primerIngrediente, 
      segundoIngrediente, 
      pasos
    }

    console.log(objetoPlato)

    setPlato([...plato, objetoPlato])

    // reiniciar el form
    setNombrePlato('')
    setPrimerIngrediente('')
    setSegundoIngrediente('')
    setPasos('')
  }

  return (
    <div className='text-center w-full'>

      <h2 className='font-black text-5xl text-lime-400'>Registra Tu Plato <span>{''}Favorito</span></h2>
      <form
	onSubmit={handleSubmit}
	className='bg-white shadow-md  pb-3 mt-10'>
	{error && <Error>Todos los campos son obligatorios</Error>}
	
	<div className='mt-4'>
	  <label htmlFor='plato' className='uppercase text-gray-700 block text-3xl font-black'>Nombre del Plato </label>
	  <input
	    id='nombrePlato'
	    className='border-2 rounded-md p-2 mt-2 pacleholder-gray-400 w-1/2'
	    type='text'
	    value={nombrePlato}
	    onChange={e => setNombrePlato(e.target.value)}
	  />

	</div>
	<div className='mt-3'>
	  <label htmlFor='primer-ingrediente' className='uppercase text-gray-700 block text-3xl font-black'>Primer Ingrediente </label>
	  <input
	    id='primer-ingrediente'
	    className='border-2 rounded-md p-2 mt-2 pacleholder-gray-400 w-1/2'
	    type='text'
	    value={primerIngrediente}
	    onChange={e => setPrimerIngrediente(e.target.value)}
	  />
	</div>
	<div className='mt-3 mb-4'>
	  <label htmlFor='segundo-ingrediente' className='uppercase text-gray-700 block text-3xl font-black'>Segundo Ingrediente </label>
	  <input
	    id='segundo-ingrediente'
	    className='border-2 rounded-md p-2 mt-2 pacleholder-gray-400 w-1/2'
	    type='text'
	    value={segundoIngrediente}
	    onChange={e => setSegundoIngrediente(e.target.value)}
	  />
	</div>
	<div className='mt-3 mb-4'>
	  <label htmlFor='segundo-ingrediente' className='uppercase text-gray-700 block text-3xl font-black'>Pasos a seguir</label>
	  <textarea
	    id='segundo-ingrediente'
	    className='border-2 rounded-md p-2 mt-2 pacleholder-gray-400 w-1/2'
	    type='text'
	    value={pasos}
	    onChange={e => setPasos(e.target.value)}
	  />
	</div>
	<input
	  type='submit'
	  className="bg-indigo-600 p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all w-80 rounded-md mt-4"
	  value="Agregar Plato"
	/>
      </form>
    </div>
  )
}

export default Formulario
