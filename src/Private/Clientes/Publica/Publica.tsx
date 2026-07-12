import { Route, Routes } from "react-router"
import LayoutPublica from "./LayoutPublica"
import PivotePublica from "./PivotePublica"
import Industrial from "./Industrial/Industrial"
import Comercial from "./Comercial/Comercial"
// import Industrial from "../Privada/Industrial/Industrial"
// import Comercial from "../Privada/Comercial/Comercial"
// import LayoutPrivada from "./LayoutPrivada"
// import PivotePrivada from "./PivotePrivada"
// import Industrial from "./Industrial/Industrial"
// import Comercial from "./Comercial/Comercial"


const Publica = ({usuario}) => {
   return (
    <Routes>
          <Route path="/*" element={<LayoutPublica />}>
            <Route index element={<PivotePublica usuario={usuario } />} />
            <Route path="industrial/*" element={<Industrial usuario={usuario } />} />
            <Route path="comercial/*" element={<Comercial usuario={usuario } />} />
          </Route>
       </Routes>
   )
  }


  


export default Publica