import BadgeContactos from "../../Gestor/Contactos/Components/BadgeContactos"
import { dataContactos } from "../../Gestor/Contactos/Utils/dataContactos"


const MisClientes = ({usuario}) => {
  return (
    <div className="w-[97%] h-full   ">

      <div className="w-full h-[5%] flex justify-end bg-gray-100">
        filtros del gestor papuuu -- VOY A METER A CODEX, SI ALGO SALE MAL VOLVER A LA V44
      </div>
      <div className="w-full h-[85%]">
        <header className="w-full h-[13%] grid place-items-center text-lg font-semibold text-gray-600">
          Contactos - {usuario.area}
        </header>
        <div className="w-full h-[87%] grid grid-cols-4 grid-rows-4 gap-12 ">
          {dataContactos.map((el)=>{
          return <BadgeContactos
                  el={el}
          />
        })}
        </div>
      </div>
      <section className="w-full h-[10%] flex justify-center items-center">
          <div className="flex w-[10%] items-center justify-center h-full font-semibold text-gray-600 text-lg">
                  <div className="w-[40%] h-[40%] flex items-center">
                    1-14 / 51
                  </div>
                  <div className="w-[40%] h-[40%] flex gap-x-1">
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

export default MisClientes