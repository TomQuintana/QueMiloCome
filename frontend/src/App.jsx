import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from "./components/Header"
import Formaulario from './components/Formulario'
import Comidas from './components/Comidas'

function App() {

  const [plato, setPlato] = useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Comidas />} />
          <Route path='/formulario' element={<Formaulario />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

