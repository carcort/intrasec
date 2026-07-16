import { Route, Routes } from "react-router"
import PivoteTeamLeaderClientes from "./PivoteTeamLeaderClientes"
import LayoutTeamLeaderClientes from "./LayoutTeamLeaderClientes"
import Home from "./Home/Home"
import EquipoClientes from "./EquipoClientes/EquipoClientes"
import EvaluacionClientes from "./EvaluacionClientes/EvaluacionClientes"


const TeamLeaderClientes = ({usuario}) => {
  return (
    <Routes>
          <Route path="/*" element={<LayoutTeamLeaderClientes usuario={usuario} />}>
            <Route index element={<PivoteTeamLeaderClientes usuario={usuario } />} />
            <Route path="home/*" element={<Home usuario={usuario } />} />
            <Route path="equipoClientes/*" element={<EquipoClientes usuario={usuario } />} />

            <Route path="evaluacionClientes/*" element={<EvaluacionClientes usuario={usuario } />} />
            {/* <Route path="teamLeader/*" element={<TeamLeader usuario={usuario } />} /> */}
          </Route>
       </Routes>
  )
}

export default TeamLeaderClientes