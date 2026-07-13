
import { dataContactosInternos } from "../Utils/dataContactosInternos"
import BadgeContactoInterno from "./Components/BadgeContactoInterno"


const ContactosInternos = () => {
  return (
    <div className="w-full h-full ">

        <div className="w-full h-[18%] flex">
          <section className="w-[80%] h-full flex items-center">
            Buscar: <input className="ml-3 pl-3 border border-gray-200 w-full h-[40%]" type="text" />
          </section>
          <section className="w-[20%] h-full ">
            filtros
          </section>
        </div>
        <main className="w-full h-[82%] grid grid-cols-4 grid-rows-3 gap-4">

              {dataContactosInternos.map((el)=>{
                return <BadgeContactoInterno
                      el={el}
                />
              })}

        </main>

    </div>
  )
}

export default ContactosInternos