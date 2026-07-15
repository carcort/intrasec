import Tabla from "../../../../../../../../Components/Tabla"
import { dataContactosInternos } from "../Utils/dataContactosInternos"
import { dataFacturasContactos } from "./Utils/dataFacturasContactos"


const FacturasContactos = ({usuario}) => {
  return (
    <div className="w-full h-full  ">
      <div className="w-full h-[10%] bg-violet-300 flex ">
        <div className="h-full w-[7%] gap-x-3 grid items-center">
          {usuario.cargo === 'Consultor' ? 
            <button className="w-[75%] gap-x-3 items-center justify-center flex h-[65%] bg-violet-500 rounded text-white cursor-pointer hover:bg-violet-700 ">
            <div>
              <img className="w-5 h-5" src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/mas.png" alt="as" />
            </div>
            <div className="font-semibold">
                Factura
            </div>
          </button>:
          <div>
            
          </div>  
        
        }
          
        </div>
        <div className="h-full w-[93%] flex items-center gap-x-2">
          <div className="h-full w-[80%] flex items-center gap-x-2"> 
            Buscar: <input className="w-full h-[60%] border border-gray-200" type="text" />
          </div>
          <div className="h-full w-[20%] flex items-center">
            filtros facturas
          </div>
        </div>
      </div>
      <div className="w-full h-[90%] grid place-items-center">
        
        {dataFacturasContactos.length > 0 ? 
            <Tabla
              data={dataFacturasContactos}
            />: 

            <div className="w-full h-full grid place-items-center ">
              <section className="w-[15%] h-[20%]  grid grid-rows-2 "> 
                <section className="w-full flex justify-center text-lg font-semibold text-gray-600 items-center">
                  Aún No Hay Facturas 
                </section>
                <div className="flex justify-center">
                  <button className="bg-violet-500 text-white font-semibold w-[95%]  cursor-pointer hover:bg-violet-600">
                    Crear Factura
                  </button>
                </div>
              </section>
        </div>
      }
      </div>
    </div>
  )
}

export default FacturasContactos