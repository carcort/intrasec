import { Route, Routes } from "react-router"
import LayoutGestor from "./LayoutGestor"
import PivoteGestor from "./PivoteGestor"
import Contactos from "./Contactos/Contactos"
import Permisos from "./Permisos/Permisos"
import Vehiculos from "./Vehiculos/Vehiculos"


const Gestor = ({usuario}) => {
  return (
    <Routes>
          <Route path="/*" element={<LayoutGestor />}>
            <Route index element={<PivoteGestor usuario={usuario } />} />
            {/* <Route path="consultor/*" element={<Consultor usuario={usuario } />} />
            <Route path="gestor/*" element={<Gestor usuario={usuario } />} /> */}
            <Route path="contactos/*" element={<Contactos />} />
            <Route path="permisos/*" element={<Permisos />} />
            <Route path="vehiculos/*" element={<Vehiculos />} />
            
            
          </Route>
       </Routes>
  )
}

export default Gestor