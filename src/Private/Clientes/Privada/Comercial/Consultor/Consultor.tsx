import { Route, Routes } from "react-router"
import LayoutConsultor from "./LayoutConsultor"
import PivoteConsultorComercial from "./PivoteConsultorComercial"
import Salud from "./Salud/Salud"
import Banca from "./Banca/Banca"
import Ecommerce from "./Ecommerce/Ecommerce"
import Retail from "./Retail/Retail"


const Consultor = ({usuario}) => {
  return (
    <Routes>
          <Route path="/*" element={<LayoutConsultor />}>
            <Route index element={<PivoteConsultorComercial usuario={usuario } />} />
            <Route path="salud/*" element={<Salud usuario={usuario } />} />
            <Route path="banca/*" element={<Banca usuario={usuario } />} />
            <Route path="ecommerce/*" element={<Ecommerce usuario={usuario } />} />
            <Route path="retail/*" element={<Retail usuario={usuario } />} />
          </Route>
       </Routes>
  )
}

export default Consultor