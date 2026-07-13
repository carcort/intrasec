import { Route, Routes } from "react-router"
import LayoutGestor from "./LayoutGestor"
import PivoteGestor from "./PivoteGestor"
import Contactos from "./Contactos/Contactos"
import Permisos from "./Permisos/Permisos"
import Vehiculos from "./Vehiculos/Vehiculos"
import DetalleContacto from "./Contactos/DetalleContacto/DetalleContacto"
import ContactosInternos from "./Contactos/DetalleContacto/ContactosInternos/ContactosInternos"


const Gestor = ({usuario}) => {
  return (
    <Routes>
          <Route path="/*" element={<LayoutGestor usuario={usuario} />}>
            <Route index element={<PivoteGestor usuario={usuario } />} />
            {/* <Route path="consultor/*" element={<Consultor usuario={usuario } />} />
            <Route path="gestor/*" element={<Gestor usuario={usuario } />} /> */}
            <Route path="contactos/*" element={<Contactos />} />
            <Route path="permisos/*" element={<Permisos />} />
            <Route path="vehiculos/*" element={<Vehiculos />} />


            <Route path="contactos/detalleContacto/*" element={<DetalleContacto />} />
            <Route path="contactos/detalleContacto/contactosInternos*" element={<ContactosInternos />} />
            
            
          </Route>
       </Routes>
  )
}

export default Gestor