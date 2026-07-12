import { Route, Routes } from "react-router"
import Industrial from "./Industrial/Industrial"
import Comercial from "./Comercial/Comercial"
import LayoutPublica from "./LayoutPublica"
import PivotePublica from "./PivotePublica"


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