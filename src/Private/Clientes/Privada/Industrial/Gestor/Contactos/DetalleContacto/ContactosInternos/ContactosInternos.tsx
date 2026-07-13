
import { dataContactosInternos } from "../Utils/dataContactosInternos"
import BadgeContactoInterno from "./Components/BadgeContactoInterno"


const ContactosInternos = () => {
  return (
    <div className="w-full h-full bg-red-400">

        <div className="w-full h-[10%] bg-yellow-200">
          filtro
        </div>
        <main className="w-full h-[90%] grid grid-cols-4 grid-rows-3 gap-4">

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