

import { Route, Routes } from "react-router"
import BadgeContactos from "./Components/BadgeContactos"

import { dataContactos } from "./Utils/dataContactos"
import Modal from "../../../../../../Components/Modal"
import ModalEmpleadoCompetencias from "../../../../../../Components/ModalEmpleadoCompetencias"
import ModalContacto from "./ModalContacto"



const Contactos = () => {
  return (
    <div className="w-full h-full   px-4">

      <div className="w-full h-[5%] flex justify-end bg-gray-100">
        filtros del gestor papuuu
      </div>
      <div className="w-full h-[85%]">
        <header className="w-full h-[13%] grid place-items-center text-lg font-semibold text-gray-600">
          Contactos
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

        <Routes>
               <Route path="crearContacto/*" element={<ModalContacto  />}>
               {/* <Route index element={<ModalEmpleadoCompetencias />} /> */}
               <Route path="otro/*" element={<ModalEmpleadoCompetencias />} />
               {/* <Route path="contactosInternos/*" element={<ContactosInternos />} />
               <Route path="cotizacionesContactos/*" element={<CotizacionesContactos usuario={usuario} />} />
               <Route path="ventasContactos/*" element={<VentasContactos />} />
               <Route path="facturasContactos/*" element={<FacturasContactos usuario={usuario} />} />
               <Route path="organigramaContactos/*" element={<OrganigramaClientes />} /> 
               <Route path="feedbackContactos/*" element={<FeedbackContactos />} />    */}


               {/* INTERNOS           */}
               {/* <Route path="contactosInternos/contactoInterno/*" element={<ContactoInterno />} />       */}
             </Route>
          </Routes>

        
    </div>
  )
}

export default Contactos