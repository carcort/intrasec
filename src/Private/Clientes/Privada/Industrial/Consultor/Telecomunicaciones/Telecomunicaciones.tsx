

import { Route, Routes } from "react-router"
//import PivoteEnergia from "./PivoteEnergia"
import Crm from "../Crm/Crm"
import PivoteTelecomunicaciones from "./PivoteTelecomunicaciones"


const Telecomunicaciones = ({usuario}) => {


  const {primer_nombre, apellido_paterno} = usuario
    

  return (
    <div className="w-full h-full   px-4">

          <Routes>

               <Route path="/*" element={<PivoteTelecomunicaciones usuario={usuario} />}>
               
               <Route path="crm/*" element={<Crm usuario={usuario} />} />
               
             </Route>
          </Routes>

        
    </div>
  )
}

export default Telecomunicaciones