import { Outlet, useNavigate, useLocation, Link } from "react-router";
import { dataCabeceraModal } from "./Utils/dataCabeceraModal";

import { useAfp, useEmailCorporativo, useGerentes, useIsapre, useTelefono1Corporativo, useTelefono2Corporativo, useTrabajo } from "../Store/formEmpleadoLaboralStore";

const Modal = () => {

 const navegar = useNavigate()
 const location = useLocation();

//  TRAER STORE DESDE ZUSTAND
 const gerente = useGerentes((state) => state.gerente)
 const afp = useAfp((state) => state.afp)
 const isapre = useIsapre((state) => state.isapre)
 const trabajo = useTrabajo((state) => state.trabajo)


 const emailCorporativo = useEmailCorporativo((state) => state.emailCorporativo)
 const telefono1Corporativo = useTelefono1Corporativo((state) => state.telefono1Corporativo)
 const telefono2Corporativo = useTelefono2Corporativo((state) => state.telefono2Corporativo)

 //// ---------------------------------------------------------------------




 const isActive = (path) => location.pathname === path;


 const handleClickCerrarModal =()=>{
   navegar('/private/rrhh/administrador')
 }


 // guardar
 const handleSubmitFormEmpleadoLaboral =(e)=>{
      e.preventDefault()
      console.log(gerente, afp, isapre, trabajo, emailCorporativo, telefono1Corporativo, telefono2Corporativo);
      
  }


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm ">
         {/* Contenedor de la modal */}
          <div className="relative w-[80%] h-[80%]  p-6 mx-4 bg-white rounded-lg shadow-xl">
           <header className="w-full h-[10%] grid place-items-center text-lg text-violet-700 font-semibold">
             Nuevo Empleado
           </header>
           <main className="w-full h-[90%]">
              <section className="w-[25%] h-[4%] grid grid-cols-5 gap-x-1">
                 {dataCabeceraModal.map((el)=>{
                  return <Link
                      to={el?.ruta} 
                      className={`flex h-full justify-center items-center rounded-md  ${
                        isActive(el.ruta) 
                          ? 'underline underline-offset-4 decoration-violet-500' 
                          : ''
                      }`}
                    >
                      {el?.nombre}
                    </Link>
                 })}

               </section>
               <div className="w-full h-[88%] ">
                <Outlet
                
                  //context={data}
                />
               </div>
               <div className="w-[98%] h-[5.5%] flex font-semibold justify-end ">
                  <div className="w-[15%] h-full  grid grid-cols-2 gap-x-2">
                      <button type="submit" onClick={handleSubmitFormEmpleadoLaboral} className="bg-violet-500 text-white rounded cursor-pointer hover:bg-violet-600">
                        Guardar
                      </button>
                      <button onClick={handleClickCerrarModal} className="bg-gray-900 text-white rounded cursor-pointer hover:bg-black">
                        Cerrar
                      </button>
                  </div>
               </div>
           </main>
          </div>
     </div>
  )
}

export default Modal