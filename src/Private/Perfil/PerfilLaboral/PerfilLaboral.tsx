import FormularioEmpleadoLaboral from "../../Rrhh/Components/FormularioEmpleadoLaboral"
import { dataBadgeEmpleadoLaboral } from "../../Rrhh/Utils/dataBadgeEmpleadoLaboral"

const PerfilLaboral = () => {

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

export default PerfilLaboral