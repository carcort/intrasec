import FormularioEmpleadoLaboral from "../Private/Rrhh/Components/FormularioEmpleadoLaboral"
import { dataBadgeEmpleadoLaboral } from "../Private/Rrhh/Utils/dataBadgeEmpleadoLaboral"


const ModalEmpleadoLaboral = () => {

  return (
    <div className="w-full h-full  grid place-items-center ">
      <div className="w-[95%] h-[95%] ">
        <FormularioEmpleadoLaboral
          titulo1='Datos Laborales'
          data1={dataBadgeEmpleadoLaboral}
        />
      </div>
    </div>
  )
}

export default ModalEmpleadoLaboral