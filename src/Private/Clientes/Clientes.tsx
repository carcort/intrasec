import { Route, Routes } from "react-router"
import LayoutClientes from "./LayoutClientes"
import PivoteClientes from "./PivoteClientes"
import Publica from "./Publica/Publica"
import Privada from "./Privada/Privada"


const Clientes = ({usuario}) => {
  return (
    <Routes>
          <Route path="/*" element={<LayoutClientes />}>
            <Route index element={<PivoteClientes usuario={usuario } />} />
            <Route path="privada/*" element={<Privada usuario={usuario } />} />
            <Route path="publica/*" element={<Publica usuario={usuario } />} />
          </Route>
       </Routes>
  )
}

export default Clientes