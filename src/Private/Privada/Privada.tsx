
//import { Navigate } from 'react-router';

import { Route, Routes } from "react-router"
import LayoutPrivada from "./LayoutPrivada"
import PivotePrivada from "./PivotePrivada"
// import Comercial from "./Clientes/Comercial/Comercial"
// import Industrial from "./Clientes/Industrial/Industrial"
//import Publica from "../Publica/Publica"
import Industrial from "./Clientes/Industrial/Industrial"
import Comercial from "./Clientes/Comercial/Comercial"


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