import { Route, Routes } from "react-router"
import LayoutPrivada from "./LayoutPrivada"
import PivotePrivada from "./PivotePrivada"
import Industrial from "./Industrial/Industrial"
import Comercial from "./Comercial/Comercial"


const Privada = ({usuario}) => {
   return (
    <Routes>
          <Route path="/*" element={<LayoutPrivada />}>
            <Route index element={<PivotePrivada usuario={usuario } />} />
            <Route path="industrial/*" element={<Industrial usuario={usuario } />} />
            <Route path="comercial/*" element={<Comercial usuario={usuario } />} />
          </Route>
       </Routes>
   )
  }


  


export default Privada