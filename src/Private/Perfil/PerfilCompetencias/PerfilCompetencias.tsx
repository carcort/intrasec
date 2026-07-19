

//import { useOutletContext } from "react-router";
// import FormularioEmpleadoCompetencias from "../Private/Rrhh/Components/FormularioEmpleadoCompetencias"
// import { dataBadgeEmpleadoCompetenciasHabilidades } from "../Private/Rrhh/Utils/dataBadgeEmpleadoCompetenciasHabilidades"

import FormularioEmpleadoCompetencias from "../../Rrhh/Components/FormularioEmpleadoCompetencias"
import { dataBadgeEmpleadoCompetenciasHabilidades } from "../../Rrhh/Utils/dataBadgeEmpleadoCompetenciasHabilidades"





const PerfilCompetencias = () => {
  // const { mensaje, usuario } = useOutletContext();
  //  console.log(mensaje);
  //  console.log(usuario);
  return (
    <div className="w-full h-full  grid place-items-center ">
      <div className="w-[95%] h-[95%] ">
        <FormularioEmpleadoCompetencias
          titulo1='Competencias'
          //titulo2='Habilidades del Empleado'
          data1={dataBadgeEmpleadoCompetenciasHabilidades}
          //data2={dataBadgeEmpleadoCompetenciasHabilidades}

        />
      </div>
    </div>
  )
}

export default PerfilCompetencias