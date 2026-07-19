import { Route, Routes } from "react-router"
import Layout_Administrador_Rrhh from "./Layout_Administrador_Rrhh"
import Empleados from "./Empleados/Empleados"
import Vacaciones from "./Vacaciones/Vacaciones"
import PivoteAdministradorRrhh from "./PivoteAdministradorRrhh"
import Bonos from "./Bonos/Bonos"
import Evaluaciones from "./Evaluaciones/Evaluaciones"
import Desvinculaciones from "./Desvinculaciones/Desvinculaciones"

const Administrador_Rrhh = ({usuario}) => {

  return (
    <Routes>
          <Route path="/*" element={<Layout_Administrador_Rrhh usuario={usuario}/>}>
            <Route index  element={<PivoteAdministradorRrhh usuario={usuario} />} />

            <Route path="empleados/*" element={<Empleados usuario={usuario}  />} />
            <Route path="vacaciones/*" element={<Vacaciones  usuario={usuario} />} />
            <Route path="bonos/*" element={<Bonos usuario={usuario}  />} />
            <Route path="evaluaciones/*" element={<Evaluaciones  usuario={usuario} />} />
            <Route path="desvinculaciones/*" element={<Desvinculaciones  usuario={usuario} />} />

          </Route>
       </Routes>
  )
}

export default Administrador_Rrhh