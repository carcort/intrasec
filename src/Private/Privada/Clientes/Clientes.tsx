import { Route, Routes } from "react-router"
import LayoutClientes from "./LayoutClientes"
import PivoteClientes from "./PivoteClientes"
// import Industrial from "./Industrial/Industrial"
// import Comercial from "./Comercial/Comercial"
import Privada from "../Privada"
import Publica from "../../Publica/Publica"


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