import FormularioEmpleado from "../Private/Rrhh/Components/FormularioEmpleado"
import { dataBadgeEmpleadoLaboral } from "../Private/Rrhh/Utils/dataBadgeEmpleadoLaboral"
//import { dataBadgeEmpleadoLaboralArea } from "../Private/Rrhh/Utils/dataBadgeEmpleadoLaboralArea"


const ModalEmpleadoLaboral = () => {
  return (
    <div className="w-full h-full  grid place-items-center ">
      <div className="w-[95%] h-[95%] ">
        <FormularioEmpleado
          titulo1='Datos Laborales'
          titulo2='Area de Trabajo'
          data1={dataBadgeEmpleadoLaboral}
          //data2={dataBadgeEmpleadoLaboralArea}

        />
      </div>
    </div>
  )
}

export default ModalEmpleadoLaboral