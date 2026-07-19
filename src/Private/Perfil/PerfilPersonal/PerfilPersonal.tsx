import FormularioEmpleadoPersonal from "../../Rrhh/Components/FormularioEmpleadoPersonal"
import { dataBadgeEmpleadoPersonal } from "../../Rrhh/Utils/dataBadgeEmpleadoPersonal"


const PerfilPersonal = () => {
  //const { mensaje, usuario } = useOutletContext();
  //  console.log(mensaje);
  //  console.log(usuario);
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

export default PerfilPersonal