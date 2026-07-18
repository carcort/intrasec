import FormularioEmpleado from "../Private/Rrhh/Components/FormularioEmpleado"
//import { dataBadgeEmpleadoNominaBanco } from "../Private/Rrhh/Utils/dataBadgeEmpleadoNominaBanco"
import { dataBadgeEmpleadoNominaTipo } from "../Private/Rrhh/Utils/dataBadgeEmpleadoNominaTipo"


const ModalEmpleadoNomina = () => {
  return (
    <div className="w-full h-full  grid place-items-center ">
      <div className="w-[95%] h-[95%] ">
        <FormularioEmpleado
          titulo1='Tipo de Empleado'
          titulo2='Datos Bancarios Empleado'
          data1={dataBadgeEmpleadoNominaTipo}
          //data2={dataBadgeEmpleadoNominaBanco}

        />
      </div>
    </div>
  )
}

export default ModalEmpleadoNomina