import { Route, Routes } from "react-router"
import BadgeEmpleado from "../../Components/BadgeEmpleado"
import { dataEmpleados } from "../../Utils/dataEmpleados"
import Modal from "../../../../Components/Modal"
import ModalEmpleadoLaboral from "../../../../Components/ModalEmpleadoLaboral"
import ModalEmpleadoPersonal from "../../../../Components/ModalEmpleadoPersonal"
import ModalEmpleadoNomina from "../../../../Components/ModalEmpleadoNomina"
import ModalEmpleadoCompetencias from "../../../../Components/ModalEmpleadoCompetencias"
import ModalEmpleadoContrato from "../../../../Components/ModalEmpleadoContrato"
import PivoteEmpleados from "./PivoteEmpleados"



const Empleados = ({usuario}) => {
  return (
    <div className="w-[95%] h-[95%]   ">

      <div className="w-full h-[7%] flex justify-end bg-gray-100">
        filtros del admin 
      </div>
      <div className="w-full h-[83%] grid grid-cols-8 grid-rows-2 gap-6">
        {dataEmpleados.map((el)=>{
        return <BadgeEmpleado
                el={el}
        />
      })}
      </div>
      <section className="w-full h-[10%] flex justify-center ">
          <div className="flex w-[10%] items-center justify-center h-full font-semibold text-gray-600 text-lg">
                  <div className="w-[40%] f-[50%]">
                    1-14 / 51
                  </div>
                  <div className="w-[40%] h-[50%] flex gap-x-1">
                    <button className="w-[80%] bg-gray-100 cursor-pointer hover:bg-gray-200">
                      {'<'}
                    </button>
                    <button className="w-[80%] bg-gray-100 cursor-pointer  hover:bg-gray-200">
                      {'>'}
                    </button>
                  </div>
              </div>
        </section>



        <Routes>
          <Route path="/nuevoEmpleado/*" element={<Modal />}>
            <Route index element={<PivoteEmpleados usuario={usuario}  />} />
            <Route path="laboral/*" element={<ModalEmpleadoLaboral />} />
            <Route path="personal/*" element={<ModalEmpleadoPersonal />} />
            <Route path="nomina/*" element={<ModalEmpleadoNomina />} />
            <Route path="competencias/*" element={<ModalEmpleadoCompetencias />} />
            <Route path="contrato/*" element={<ModalEmpleadoContrato />} />
            
            
            
          </Route>
       </Routes>






              

        

      
    </div>
  )
}

export default Empleados