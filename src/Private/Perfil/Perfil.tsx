import { Route, Routes } from "react-router"
import LayoutPerfil from "./LayoutPerfil"
import PerfilLaboral from "./PerfilLaboral/PerfilLaboral"
import PerfilPersonal from "./PerfilPersonal/PerfilPersonal"
import PerfilNomina from "./PerfilNomina/PerfilNomina"
import PerfilCompetencias from "./PerfilCompetencias/PerfilCompetencias"




const Perfil = ({usuario}) => {
  return (
    <Routes>
          <Route path="/" element={<LayoutPerfil usuario={usuario} />}>
            <Route index element={<PerfilLaboral usuario={usuario } />} />
            
            {/* <Route path="laboral/*" element={<PerfilLaboral usuario={usuario } />} /> */}
            <Route path="personal/*" element={<PerfilPersonal usuario={usuario } />} />
            <Route path="nomina/*" element={<PerfilNomina usuario={usuario } />} />
            <Route path="competencias/*" element={<PerfilCompetencias usuario={usuario } />} />
            
          </Route>
       </Routes>
  )
}

export default Perfil