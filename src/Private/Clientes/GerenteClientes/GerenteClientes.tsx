import { Route, Routes } from "react-router"
// import Sidebar from "../../../Components/Sidebar"
// //import { dataSidebarConsultorIndustrial } from "../Privada/Industrial/Consultor/Utils/dataSidebarConsultorIndustrial"
// import { dataSidebarGerenteClientes } from "./Utils/dataSidebarGerenteClientes"
import LayoutGerenteClientes from "./LayoutGerenteClientes"
import PivoteGerenteClientes from "./PivoteGerenteClientes"
import Home from "./Home/Home"

import Comercial from "./Comercial/Comercial"
import Industrial from "./Industrial/Industrial"


const GerenteClientes = ({usuario}) => {
  return (
    <Routes>
          <Route path="/*" element={<LayoutGerenteClientes usuario={usuario} />}>
            <Route index element={<PivoteGerenteClientes usuario={usuario } />} />
            <Route path="home/*" element={<Home usuario={usuario } />} />
            <Route path="industrial/*" element={<Industrial usuario={usuario } />} />

            <Route path="comercial/*" element={<Comercial usuario={usuario } />} />
            {/* <Route path="teamLeader/*" element={<TeamLeader usuario={usuario } />} /> */}
          </Route>
       </Routes>
  )
}

export default GerenteClientes