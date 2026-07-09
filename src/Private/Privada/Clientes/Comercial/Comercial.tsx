import { Route, Routes } from "react-router"
import LayoutComercial from "./LayoutComercial"
import PivoteComercial from "./PivoteComercial"
import Consultor from "./Consultor/Consultor"
import Gestor from "./Gestor/Gestor"

const Comercial = ({usuario}) => {
  return (
    <Routes>
          <Route path="/*" element={<LayoutComercial />}>
            <Route index element={<PivoteComercial usuario={usuario } />} />
            <Route path="consultor/*" element={<Consultor usuario={usuario } />} />
            <Route path="gestor/*" element={<Gestor usuario={usuario } />} />
          </Route>
       </Routes>
  )
}

export default Comercial