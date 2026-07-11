import { Route, Routes } from "react-router"
import ModalEmpleadoPersonal from "../../../../Components/ModalEmpleadoPersonal"
import ModalEmpleadoContrato from "../../../../Components/ModalEmpleadoContrato"
import ModalEmpleadoLaboral from "../../../../Components/ModalEmpleadoLaboral"
import Modal from "../../../../Components/Modal"


const NuevoEmpleado = () => {
  return (
    <Routes>
          <Route path="nuevoEmpleado/*" element={<Modal />}>
            <Route index element={<ModalEmpleadoLaboral  />} />
            {/* <Route path="private/rrhh/administrador/nuevoEmpleado/laboral*" element={<ModalEmpleadoLaboral />} /> */}
            <Route path="/private/rrhh/administrador/nuevoEmpleado/personal/*" element={<ModalEmpleadoPersonal />} />
            <Route path="/private/rrhh/administrador/nuevoEmpleado/contrato/*" element={<ModalEmpleadoContrato />} />
            
          </Route>
       </Routes>
  )
}

export default NuevoEmpleado