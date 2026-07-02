import { Routes, Route } from "react-router";
import LayoutPrivate from "./LayoutPrivate";
import Cliente from "./Cliente/Cliente";
import Finanza from "./Finanza/Finanza";
import Legal from "./Legal/Legal";



const Private = () => {

  

  const usuario = {
    id: '1',
    estaAutenticado:true,
    primer_nombre: 'Juan',
    apellido_paterno: 'Perez',
    apellido_materno: 'Lopez',
    gerencia: 'Finanza',
    cargo: 'Consultor',
    division: 'Industria',
    area: 'Energia',
  }


  


  return (
      <Routes>
          <Route path="/*" element={<LayoutPrivate />}>
            <Route index element={<Cliente usuario={usuario } />} />
            <Route path="legal" element={<Legal usuario={usuario}/>} />
            <Route path="finanza" element={<Finanza usuario={usuario} />} />
          </Route>
       </Routes>
  )
}

export default Private