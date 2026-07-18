//import { useOutletContext } from "react-router";
import FormularioEmpleadoNomina from "../Private/Rrhh/Components/FormularioEmpleadoNomina"
import { dataBadgeEmpleadoNominaTipo } from "../Private/Rrhh/Utils/dataBadgeEmpleadoNominaTipo"


const ModalEmpleadoNomina = () => {
  // const { mensaje, usuario } = useOutletContext();
  //  console.log(mensaje);
  //  console.log(usuario);
  return (
    <div className="w-full h-full  grid place-items-center ">
      <div className="w-[95%] h-[95%] ">
        <FormularioEmpleadoNomina
          titulo1='Nomina'
          //titulo2='Datos Bancarios Empleado'
          data1={dataBadgeEmpleadoNominaTipo}
          //data2={dataBadgeEmpleadoNominaBanco}

        />
      </div>
    </div>
  )
}

export default ModalEmpleadoNomina