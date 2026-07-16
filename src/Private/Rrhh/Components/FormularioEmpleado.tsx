
import BadgeFormularioEmpleado from "./BadgeFormularioEmpleado"


const FormularioEmpleado = ({titulo1, titulo2, data1, data2}) => {
  return (
     <form className='w-full h-full flex gap-x-16'>

       <section className="w-[50%] h-full">
          <header className="w-full h-[10%] grid place-items-center">
            {titulo1}
          </header>
          <main className="w-full h-[90%] grid grid-rows-6 ">
            {data1.map((el)=>{
             return  <BadgeFormularioEmpleado
                el={el}
             />
            
            })}
            
          </main>
       </section>
       <section className="w-[50%] h-full">
           <header className="w-full h-[10%] grid place-items-center">
             {titulo2}
           </header>
           <main className="w-full h-[90%] grid grid-rows-6">
            {data2.map((el)=>{
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