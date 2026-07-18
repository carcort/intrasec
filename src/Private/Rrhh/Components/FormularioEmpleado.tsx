
import BadgeFormularioEmpleado from "./BadgeFormularioEmpleado"


const FormularioEmpleado = ({titulo1,  data1}) => {
  return (
     <form className='w-full h-full flex gap-x-16'>

       <section className="w-[99%] h-full">
          <header className="w-full h-[15%] grid place-items-center font-semibold text-gray-600">
            {titulo1}
          </header>
          <main className="w-full h-[85%] grid grid-rows-6 grid-cols-2 gap-x-12">
            {data1.map((el)=>{
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