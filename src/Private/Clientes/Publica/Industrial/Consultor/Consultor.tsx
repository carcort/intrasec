import { Route, Routes } from "react-router"
import LayoutConsultor from "./LayoutConsultor"
import PivoteConsultor from "./PivoteConsultor"
import Energia from "./Energia/Energia"
import Sanitaria from "./Sanitaria/Sanitaria"
import Telecomunicaciones from "./Telecomunicaciones/Telecomunicaciones"
import Transporte from "./Transporte/Transporte"


const Consultor = ({usuario}) => {
  return (
    <Routes>
          <Route path="/*" element={<LayoutConsultor />}>
            <Route index element={<PivoteConsultor usuario={usuario } />} />
            <Route path="energia/*" element={<Energia usuario={usuario } />} />
            <Route path="sanitaria/*" element={<Sanitaria usuario={usuario } />} />
            <Route path="telecomunicaciones/*" element={<Telecomunicaciones usuario={usuario } />} />
            <Route path="transporte/*" element={<Transporte usuario={usuario } />} />
          </Route>
       </Routes>
  )
}

export default Consultor