import { Route, Routes } from "react-router"
import LayoutRrhh from "./LayoutRrhh"
import PivoteRrhh from "./PivoteRrhh"
import Gerente_Rrhh from "./Gerente_Rrhh/Gerente_Rrhh"
import Reclutador from "./Reclutador/Reclutador"
import Administrador_Rrhh from "./Administrador_Rrhh/Administrador_Rrhh"
import Generalista_Rrhh from "./Generalista_Rrhh/Generalista_Rrhh"


const Rrhh = ({usuario}) => {
  return (
    <Routes>
          <Route path="/*" element={<LayoutRrhh />}>
            <Route index element={<PivoteRrhh usuario={usuario } />} />
            <Route path="gerente/*" element={<Gerente_Rrhh usuario={usuario } />} />
            <Route path="administrador/*" element={<Administrador_Rrhh usuario={usuario } />} />
            <Route path="reclutador/*" element={<Reclutador usuario={usuario } />} />
            <Route path="generalista/*" element={<Generalista_Rrhh usuario={usuario } />} />
          </Route>
       </Routes>
  )
}

export default Rrhh