import { Route, Routes } from "react-router"
// import BadgeEmpleado from "../Components/BadgeEmpleado"
// import { dataEmpleados } from "../Utils/dataEmpleados"
// import Modal from "../../../Components/Modal"
// import ModalEmpleadoLaboral from "../../../Components/ModalEmpleadoLaboral"
// import ModalEmpleadoPersonal from "../../../Components/ModalEmpleadoPersonal"
// import ModalEmpleadoContrato from "../../../Components/ModalEmpleadoContrato"
// import ModalEmpleadoNomina from "../../../Components/ModalEmpleadoNomina"
// import ModalEmpleadoCompetencias from "../../../Components/ModalEmpleadoCompetencias"
// import { useState } from "react"
import Layout_Administrador_Rrhh from "./Layout_Administrador_Rrhh"
import Empleados from "./Empleados/Empleados"

import Vacaciones from "./Vacaciones/Vacaciones"
import PivoteAdministradorRrhh from "./PivoteAdministradorRrhh"



const Administrador_Rrhh = ({usuario}) => {

  
   
  return (
    <Routes>
          <Route path="/*" element={<Layout_Administrador_Rrhh/>}>
            <Route index  element={<PivoteAdministradorRrhh usuario={usuario} />} />

            <Route path="empleados/*" element={<Empleados usuario={usuario}  />} />
            <Route path="vacaciones/*" element={<Vacaciones  />} />


            {/* <Route path="/empleados/*" element={<Empleados  />} /> */}
            
            
            {/* <Route path="gerente/*" element={<Gerente_Rrhh usuario={usuario } />} />
            <Route path="administrador/*" element={<Administrador_Rrhh usuario={usuario } />} />
            <Route path="reclutador/*" element={<Reclutador usuario={usuario } />} />
            <Route path="generalista/*" element={<Generalista_Rrhh usuario={usuario } />} /> */}
          </Route>
       </Routes>
  )
}

export default Administrador_Rrhh