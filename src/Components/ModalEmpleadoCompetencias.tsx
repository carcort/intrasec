import FormularioEmpleado from "../Private/Rrhh/Components/FormularioEmpleado"
//import { dataBadgeEmpleadoCompetenciasAcademico } from "../Private/Rrhh/Utils/dataBadgeEmpleadoCompetenciasAcademico"
import { dataBadgeEmpleadoCompetenciasHabilidades } from "../Private/Rrhh/Utils/dataBadgeEmpleadoCompetenciasHabilidades"
//import { dataBadgeEmpleadoCompetenciasHabilidades } from "../Private/Rrhh/Utils/dataBadgeEmpleadoCompetenciasHabilidades"




const ModalEmpleadoCompetencias = () => {
  return (
    <div className="w-full h-full  grid place-items-center ">
      <div className="w-[95%] h-[95%] ">
        <FormularioEmpleado
          titulo1='Competencias'
          //titulo2='Habilidades del Empleado'
          data1={dataBadgeEmpleadoCompetenciasHabilidades}
          //data2={dataBadgeEmpleadoCompetenciasHabilidades}

        />
      </div>
    </div>
  )
}

export default ModalEmpleadoCompetencias