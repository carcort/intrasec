import { Route, Routes } from "react-router"
import Layout_Reclutador from "./Layout_Reclutador"
import Candidatos from "./Candidatos/Candidatos"


const Reclutador = ({usuario}) => {
  return (
    <Routes>
          <Route path="/*" element={<Layout_Reclutador/>}>
            <Route index element={<Candidatos  />} />
            {/* <Route path="gerente/*" element={<Gerente_Rrhh usuario={usuario } />} />
            <Route path="administrador/*" element={<Administrador_Rrhh usuario={usuario } />} />
            <Route path="reclutador/*" element={<Reclutador usuario={usuario } />} />
            <Route path="generalista/*" element={<Generalista_Rrhh usuario={usuario } />} /> */}
          </Route>
       </Routes>
  )
}

export default Reclutador