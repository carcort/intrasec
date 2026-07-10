import BadgeEmpleado from "../Components/BadgeEmpleado"
import { dataEmpleados } from "../Utils/dataEmpleados"


const Administrador_Rrhh = ({usuario}) => {
  return (
    <div className="w-full h-[95%]  grid grid-cols-7 grid-rows-2 gap-9 ">
      {dataEmpleados.map((el)=>{
        return <BadgeEmpleado
                el={el}
        />
      })}
    </div>
  )
}

export default Administrador_Rrhh