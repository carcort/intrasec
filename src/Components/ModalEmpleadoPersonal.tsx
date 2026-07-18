import { useOutletContext } from "react-router";
import FormularioEmpleadoPersonal from "../Private/Rrhh/Components/FormularioEmpleadoPersonal"
import { dataBadgeEmpleadoPersonal } from "../Private/Rrhh/Utils/dataBadgeEmpleadoPersonal"


const ModalEmpleadoPersonal = () => {
  const { mensaje, usuario } = useOutletContext();
   console.log(mensaje);
   console.log(usuario);
  return (
    <div className="w-full h-full  grid place-items-center ">
      <div className="w-[95%] h-[95%] ">
        <FormularioEmpleadoPersonal
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