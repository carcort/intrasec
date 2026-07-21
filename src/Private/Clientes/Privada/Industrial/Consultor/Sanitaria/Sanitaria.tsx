import { Route, Routes } from "react-router"

import Crm from "../Crm/Crm"
import PivoteSanitaria from "./PivoteSanitaria"


const Sanitaria = ({usuario}) => {


  const {primer_nombre, apellido_paterno} = usuario
    

  return (
    <div className="w-full h-full   px-4">

          <Routes>

               <Route path="/*" element={<PivoteSanitaria usuario={usuario} />}>
               
               <Route path="crm/*" element={<Crm usuario={usuario} />} />
               
             </Route>
          </Routes>

        
    </div>
  )
}

export default Sanitaria