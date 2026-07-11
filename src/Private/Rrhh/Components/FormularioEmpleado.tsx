import { dataBadgeEmpleadoLaboral } from "../Utils/dataBadgeEmpleadoLaboral"
import { dataBadgeEmpleadoLaboralArea } from "../Utils/dataBadgeEmpleadoLaboralArea"
import BadgeFormularioEmpleado from "./BadgeFormularioEmpleado"


const FormularioEmpleado = () => {
  return (
     <form className='w-full h-full flex gap-x-16'>

       <section className="w-[50%] h-full">
          <header className="w-full h-[10%] grid place-items-center">
            Datos
          </header>
          <main className="w-full h-[90%] grid grid-rows-6">
            {dataBadgeEmpleadoLaboral.map((el)=>{
             return  <BadgeFormularioEmpleado
                el={el}
             />
            
            })}
            
          </main>
       </section>
       <section className="w-[50%] h-full">
           <header className="w-full h-[10%] grid place-items-center">
             Area de Trabajo
           </header>
           <main className="w-full h-[90%] grid grid-rows-6">
            {dataBadgeEmpleadoLaboralArea.map((el)=>{
             return  <BadgeFormularioEmpleado
                el={el}
             />
            
            })}
            
          </main>
       </section>

     </form>

  )
}

export default FormularioEmpleado