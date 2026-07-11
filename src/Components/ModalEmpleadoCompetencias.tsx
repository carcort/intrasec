import FormularioEmpleado from "../Private/Rrhh/Components/FormularioEmpleado"
import { dataBadgeEmpleadoCompetenciasAcademico } from "../Private/Rrhh/Utils/dataBadgeEmpleadoCompetenciasAcademico"
import { dataBadgeEmpleadoCompetenciasHabilidades } from "../Private/Rrhh/Utils/dataBadgeEmpleadoCompetenciasHabilidades"




const ModalEmpleadoCompetencias = () => {
  return (
    <div className="w-full h-full  grid place-items-center ">
      <div className="w-[95%] h-[95%] ">
        <FormularioEmpleado
          titulo1='Datos Academicos del Empleado'
          titulo2='Habilidades del Empleado'
          data1={dataBadgeEmpleadoCompetenciasAcademico}
          data2={dataBadgeEmpleadoCompetenciasHabilidades}

        />
      </div>
    </div>
  )
}

export default ModalEmpleadoCompetencias