import FormularioEmpleado from "../Private/Rrhh/Components/FormularioEmpleado"
import { dataBadgeEmpleadoPersonal } from "../Private/Rrhh/Utils/dataBadgeEmpleadoPersonal"
//import { dataBadgeEmpleadoPersonalUbicacion } from "../Private/Rrhh/Utils/dataBadgeEmpleadoPersonalUbicacion"


const ModalEmpleadoPersonal = () => {
  return (
    <div className="w-full h-full  grid place-items-center ">
      <div className="w-[95%] h-[95%] ">
        <FormularioEmpleado
          titulo1='Datos Personales'
          //titulo2='Residencia'
          data1={dataBadgeEmpleadoPersonal}
          //data2={dataBadgeEmpleadoPersonalUbicacion}
        
        />
      </div>
    </div>
  )
}

export default ModalEmpleadoPersonal