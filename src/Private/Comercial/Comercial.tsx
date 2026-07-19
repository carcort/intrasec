import { Route, Routes } from "react-router"
import LayoutComercial from "./LayoutComercial"
import PivoteComercial from "./PivoteComercial"
import GerenteComercial from "./GerenteComercial/GerenteComercial"
import SupervisorFinanzas from "./SupervisorFinanzas/SupervisorFinanzas"
import SupervisorMarketing from "./SupervisorMarketing/SupervisorMarketing"
import SupervisorComunicaciones from "./SupervisorComunicaciones/SupervisorComunicaciones"


const Comercial = ({usuario}) => {
  return (
    <Routes>
          <Route path="/*" element={<LayoutComercial />}>
            <Route index element={<PivoteComercial usuario={usuario } />} />
            <Route path="supervisorFinanzas/*" element={<SupervisorFinanzas usuario={usuario } />} />
            <Route path="supervisorMarketing/*" element={<SupervisorMarketing usuario={usuario } />} />
            <Route path="supervisorComunicaciones/*" element={<SupervisorComunicaciones usuario={usuario } />} />

            <Route path="gerente/*" element={<GerenteComercial usuario={usuario } />} />
            
          </Route>
       </Routes>
  )
}

export default Comercial