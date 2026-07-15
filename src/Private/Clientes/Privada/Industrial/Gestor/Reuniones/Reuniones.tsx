import { Route, Routes } from "react-router"
import ReunionesInternas from "./ReunionesInternas/ReunionesInternas"
import ReunionesExternas from "./ReunionesExternas/ReunionesExternas"
import LayoutReuniones from "./LayoutReuniones"


const Reuniones = () => {

  
  return (
    <Routes>
               <Route path="/*" element={<LayoutReuniones  />}>
               <Route index element={<ReunionesInternas />} />
               <Route path="externas/*" element={<ReunionesExternas />} />
               {/* <Route path="contactosInternos/*" element={<ContactosInternos />} />
               <Route path="cotizacionesContactos/*" element={<CotizacionesContactos usuario={usuario} />} />
               <Route path="ventasContactos/*" element={<VentasContactos />} />
               <Route path="facturasContactos/*" element={<FacturasContactos usuario={usuario} />} />
               <Route path="organigramaContactos/*" element={<OrganigramaClientes />} /> 
               <Route path="feedbackContactos/*" element={<FeedbackContactos />} />    */}


               {/* INTERNOS           */}
               {/* <Route path="contactosInternos/contactoInterno/*" element={<ContactoInterno />} />       */}
             </Route>
          </Routes>
  )
}

export default Reuniones