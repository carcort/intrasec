import { Route, Routes } from "react-router"
import LayoutIndustrial from "./LayoutIndustrial"
import PivoteIndustrial from "./PivoteIndustrial"
import Consultor from "./Consultor/Consultor"
import Gestor from "./Gestor/Gestor"


const Industrial = ({usuario}) => {
  return (
    <Routes>
          <Route path="/*" element={<LayoutIndustrial />}>
            <Route index element={<PivoteIndustrial usuario={usuario } />} />
            <Route path="consultor/*" element={<Consultor usuario={usuario } />} />
            <Route path="gestor/*" element={<Gestor usuario={usuario } />} />
          </Route>
       </Routes>
  )
}

export default Industrial