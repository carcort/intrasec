import BadgeCabecera from "../Home/Components/BadgeCabecera"
import { dataCabeceraHomeGCIndustrial } from "./Utils/dataCabeceraHomeGCIndustrial"


const Industrial = ({usuario}) => {
  return (
    <div className="w-[85%] h-[99%] ">
        <header className="w-full h-[10%]  grid place-items-center font-semibold text-gray-600">
          Division Industrial
        </header>
        <section className="w-full h-[8%]  grid grid-cols-6 gap-x-10">
            {dataCabeceraHomeGCIndustrial.map((el)=>{
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

export default Industrial