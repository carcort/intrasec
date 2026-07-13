import { Route, Routes } from "react-router"
import LayoutGestor from "./LayoutGestor"
import PivoteGestor from "./PivoteGestor"
import Contactos from "./Contactos/Contactos"
import Permisos from "./Permisos/Permisos"
import Vehiculos from "./Vehiculos/Vehiculos"
import DetalleContacto from "./Contactos/DetalleContacto/DetalleContacto"
import ContactoInterno from "./Contactos/DetalleContacto/ContactosInternos/ContactoInterno/ContactoInterno"
import Reuniones from "./Reuniones/Reuniones"
//import ContactosInternos from "./Contactos/DetalleContacto/ContactosInternos/ContactosInternos"


const Gestor = ({usuario}) => {
  return (
    <Routes>
          <Route path="/*" element={<LayoutGestor usuario={usuario} />}>
            <Route index element={<PivoteGestor usuario={usuario } />} />
            <Route path="contactos/*" element={<Contactos />} />
            <Route path="reuniones/*" element={<Reuniones />} />
            <Route path="permisos/*" element={<Permisos />} />
            <Route path="vehiculos/*" element={<Vehiculos />} />

            <Route path="contactos/detalleContacto/*" element={<DetalleContacto usuario={usuario} />} />

            {/* INTERNOS */}
            <Route path="contactos/contactoInterno/*" element={<ContactoInterno  />} />
            
          </Route>
       </Routes>
  )
}

export default Gestor