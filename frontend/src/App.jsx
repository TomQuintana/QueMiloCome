import {useState} from 'react'
import Header from "./components/Header"
import Formaulario from './components/Formulario'

function App() {

  const [plato, setPlato] = useState([])

  return (
    <div className="container mx-auto mt-5 ">
      <Header />
      <div className="mt-12">
	<Formaulario 
	  plato={plato}
	  setPlato={setPlato}
	/>
      </div>
    </div>
 )
}

export default App

