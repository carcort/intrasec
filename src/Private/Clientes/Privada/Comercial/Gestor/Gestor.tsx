import { Route, Routes } from "react-router"
import LayoutGestor from "./LayoutGestor"
import PivoteGestor from "./PivoteGestor"
import Contactos from "./Contactos/Contactos"


const Gestor = ({usuario}) => {
  return (
    <Routes>
          <Route path="/*" element={<LayoutGestor />}>
            <Route index element={<PivoteGestor usuario={usuario } />} />
            {/* <Route path="consultor/*" element={<Consultor usuario={usuario } />} />
            <Route path="gestor/*" element={<Gestor usuario={usuario } />} /> */}
            <Route path="contactos/*" element={<Contactos />} />
            
          </Route>
       </Routes>
  )
}

export default Gestor