import { Route, Routes } from "react-router"
import PivoteEnergia from "./PivoteEnergia"
import Crm from "../Crm/Crm"


const Energia = ({usuario}) => {


  const {primer_nombre, apellido_paterno} = usuario
    

  return (
    <div className="w-full h-full   px-4">

          <Routes>

               <Route path="/*" element={<PivoteEnergia usuario={usuario} />}>
               
               <Route path="crm/*" element={<Crm usuario={usuario} />} />
               
             </Route>
          </Routes>

        
    </div>
  )
}

export default Energia