import BadgeCabecera from "../Home/Components/BadgeCabecera"
import { dataCabeceraHomeGCComercial } from "./Utils/dataCabeceraHomeGCComercial"


const Comercial = ({usuario}) => {
  return (
    <div className="w-[85%] h-[99%] ">
        <header className="w-full h-[10%]  grid place-items-center font-semibold text-gray-600">
          Division Comercial
        </header>
        <section className="w-full h-[8%]  grid grid-cols-6 gap-x-10">
            {dataCabeceraHomeGCComercial.map((el)=>{
              return <BadgeCabecera
                  el={el}
              
                />
            })}
        </section>
        <main className="w-full h-[82%] ">
          graficos
        </main>
    </div>
  )
}

export default Comercial