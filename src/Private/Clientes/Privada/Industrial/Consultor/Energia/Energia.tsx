import { Route, Routes } from "react-router"
//import BadgeContactos from "../../Gestor/Contactos/Components/BadgeContactos"
import { dataContactos } from "../../Gestor/Contactos/Utils/dataContactos"
import ModalContacto from "../../Gestor/Contactos/ModalContacto"
import ModalEmpleadoCompetencias from "../../../../../../Components/ModalEmpleadoCompetencias"
import BadgeContactos from "../../Gestor/Contactos/Components/BadgeContactos"


const Energia = ({usuario}) => {


  const {primer_nombre, apellido_paterno} = usuario


  //const clientesEnergia = dataContactos.filter(el =>  );
    //return clientesEnergia

    const clientesEnergia = dataContactos.filter((el)=>{
      return el.area_empresa === 'Energia'
    })

  return (
    <div className="w-full h-full   px-4">

      <div className="w-full h-[5%] flex justify-end bg-gray-100">
        filtros DEL CONSULTOR
      </div>
      <div className="w-full h-[85%]">
        <header className="w-full h-[13%] grid place-items-center text-lg font-semibold text-gray-600">
          Contactos
        </header>
        <div className="w-full h-[87%] grid grid-cols-4 grid-rows-4 gap-12 ">
          {clientesEnergia.map((el)=>{
            return <BadgeContactos el={el} />
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

export default Energia