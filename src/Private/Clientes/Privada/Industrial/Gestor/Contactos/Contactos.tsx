import BadgeEmpleado from "../../../../../Rrhh/Components/BadgeEmpleado"
import BadgeContactos from "./Components/BadgeContactos"

import { dataContactos } from "./Utils/dataContactos"


const Contactos = () => {
  return (
    <div className="w-[95%] h-[95%]   ">

      <div className="w-full h-[7%] flex justify-end bg-gray-100">
        filtros del gestor papuuu
      </div>
      <div className="w-full h-[83%] grid grid-cols-5 grid-rows-4 gap-9">
        {dataContactos.map((el)=>{
        return <BadgeContactos
                el={el}
        />
      })}
      </div>
      <section className="w-full h-[10%] flex justify-center ">
          <div className="flex w-[10%] items-center justify-center h-full font-semibold text-gray-600 text-lg">
                  <div className="w-[40%] f-[50%]">
                    1-14 / 51
                  </div>
                  <div className="w-[40%] h-[50%] flex gap-x-1">
                    <button className="w-[80%] bg-gray-100 cursor-pointer hover:bg-gray-200">
                      {'<'}
                    </button>
                    <button className="w-[80%] bg-gray-100 cursor-pointer  hover:bg-gray-200">
                      {'>'}
                    </button>
                  </div>
              </div>
        </section>

    </div>
  )
}

export default Contactos