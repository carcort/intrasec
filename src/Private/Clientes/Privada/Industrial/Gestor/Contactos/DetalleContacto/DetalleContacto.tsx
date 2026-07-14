import { Link, Route, Routes, useLocation, useNavigate } from "react-router"
import {  dataFiltroContactosInternos } from "./Utils/dataFiltroContactosInternos"
import LayoutDetalleContacto from "./LayoutDetalleContacto"
import PivoteDetalleContacto from "./ContactosInternos/PivoteDetalleContacto"
import ContactosInternos from "./ContactosInternos/ContactosInternos"
import VentasContactos from "./VentasContactos/VentasContactos"

import FeedbackContactos from "./FeedbackContactos/FeedbackContactos"
import FacturasContactos from "./FacturasContactos/FacturasContactos"

import OrganigramaClientes from "./OrganigramaClientes/OrganigramaClientes"
import CotizacionesContactos from "./CotizacionesContactos/CotizacionesContactos"


const DetalleContacto = ({usuario}) => {

 const navegar = useNavigate()
 const location = useLocation();
 const isActive = (path) => location.pathname === path;

//  const handleClickFiltrosDetalleContacto =(e, id, ruta)=>{
//     if(id === '1'){
//        navegar('/private/clientes/privada/industrial/gestor/contactos/detalleContacto/contactosInternos')
//     }
//     else if(id === '2'){
//        navegar('/private/clientes/privada/industrial/gestor/contactos/detalleContacto/ventasContactos')
//     }
//     else if(id === '3'){
//        navegar('/private/clientes/privada/industrial/gestor/contactos/detalleContacto/facturasContactos')
//     }
//     else if(id === '4'){
//        navegar('/private/clientes/privada/industrial/gestor/contactos/detalleContacto/feedbackContactos')
//     }
//     else {
//      console.log('asas');
     
//     }
//  }


  const handleClickCerrarContactosInternos =()=>{
     navegar('/private/clientes/privada/industrial/gestor/contactos/')
  }



  return (
    <div className="w-full h-full   px-4 pt-7 ">

      {/* <div className="w-full h-[5%] flex justify-end bg-gray-100">
        filtros de aguas andina
      </div> */}
      <div className="w-full h-full">
        {/* <header className="w-full h-[8%] grid place-items-center text-lg font-semibold text-gray-600">
          Contactos: Aguas Andina
        </header> */}

        <main className="w-full h-full  gap-12 py-3 ">
          <div className="w-full h-[20%]  flex py-4">
            <div className="w-[10%] grid place-items-center">
             <img className="w-24 h-24" src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/logoPrincipal.png" alt="zad" />
            </div>
            
            <section className="w-[90%] h-full ">
              <div className="w-full h-[20%] text-xl text-violet-600 font-semibold">
                Aguas Andina
              </div>
              <section className="w-full h-[80%] grid grid-rows-6">
                 
                  <div >
                      Area: Sanitaria
                  </div>
                  <div >
                      Es Cliente: Si
                  </div>
                  <div >
                      N° Empleados: + 1500
                  </div>
                  <div >
                      Region: Metropolitana
                  </div>
                  <div >
                      Direccion Empresa: Calle 3434, Avenida Apoquinos N°5452
                  </div>
                  <div className="text-violet-600 ">
                      web: http://aguasandina.cl
                  </div>
              </section>
            </section>
          </div>

          <div className="w-full h-[7%]  bg-gray-50">
             <article className="w-[24%] h-full  grid grid-cols-6">
               {dataFiltroContactosInternos.map((el)=>{
               return <Link
                      to={el?.ruta} 
                      className={`flex h-full justify-center items-center rounded-md  ${
                        isActive(el?.ruta) ? 'underline underline-offset-[5px] decoration-violet-500' : ''}`}>
                      {el.nombre}
                    </Link>
             })}
             </article>
             

          </div>

          <main className="w-full h-[64%] ">
           <Routes>
               <Route path="/*" element={<LayoutDetalleContacto  />}>
               <Route index element={<PivoteDetalleContacto usuario={usuario } />} />
               <Route path="contactosInternos/*" element={<ContactosInternos />} />
               <Route path="cotizacionesContactos/*" element={<CotizacionesContactos usuario={usuario} />} />
               <Route path="ventasContactos/*" element={<VentasContactos />} />
               <Route path="facturasContactos/*" element={<FacturasContactos usuario={usuario} />} />
               <Route path="organigramaContactos/*" element={<OrganigramaClientes />} /> 
               <Route path="feedbackContactos/*" element={<FeedbackContactos />} />   


               {/* INTERNOS           */}
               {/* <Route path="contactosInternos/contactoInterno/*" element={<ContactoInterno />} />       */}
             </Route>
          </Routes>
          </main>
          <section className="w-full h-[9%] flex justify-end ">
             <div className="w-[11%]   h-full gap-x-2 flex items-end ">
                <button className="w-[70%] gap-x-3 items-center justify-center flex h-[55%] bg-violet-600 text-white cursor-pointer hover:bg-violet-700 ">
                   <div>
                    <img className="w-5 h-5" src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/mas.png" alt="as" />
                   </div>
                   <div className="font-semibold">
                     Contacto Interno
                   </div>
                </button>
                <button onClick={handleClickCerrarContactosInternos} className="w-[30%] h-[55%] bg-gray-800 text-white cursor-pointer hover:bg-black font-semibold">
                     Cerrar
                </button>
             </div>
          </section>
        </main>
      </div>
      
    </div>
  )
}

export default DetalleContacto