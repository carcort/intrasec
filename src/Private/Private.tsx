import { Routes, Route } from "react-router";
import LayoutPrivate from "./LayoutPrivate";
//import Legal from "./Legal/Legal";
// import Pivote from "./Pivote";
// import Privada from "./Privada/Privada";
// import Publica from "./Publica/Publica";
import PivoteClientes from "./Privada/Clientes/PivoteClientes";
import Industrial from "./Privada/Clientes/Industrial/Industrial";
import Comercial from "./Privada/Clientes/Comercial/Comercial";
import Clientes from "./Privada/Clientes/Clientes";
import Finanzas from "./Privada/Finanzas/Finanzas";
import Pivote from "./Pivote";
//import Finanzas from "./Finanzas/Finanzas";



const Private = () => {

  

  const usuario = {
    id: '1',
    estaAutenticado:true,
    primer_nombre: 'Juan',
    apellido_paterno: 'Perez',
    apellido_materno: 'Lopez',
    gerencia: 'Clientes',
    tipo_empresa: 'Privada',
    division: 'Industrial',
    cargo: 'Consultor',
    area: 'Energia',
    sub_area: '',
  }


  


  return (
      <Routes>
          <Route path="/*" element={<LayoutPrivate />}>
            <Route index element={<Pivote usuario={usuario } />} />
            <Route path="clientes/*" element={<Clientes usuario={usuario } />} />
            <Route path="finanzas/*" element={<Finanzas usuario={usuario } />} />
          </Route>
       </Routes>
  )
}

export default Private