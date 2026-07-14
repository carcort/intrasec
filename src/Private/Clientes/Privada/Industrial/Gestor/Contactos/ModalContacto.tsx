

import { Outlet, useNavigate, useLocation, Link } from "react-router";
import { dataCabeceraModal } from "../../../../../../Components/Utils/dataCabeceraModal";
//import { dataCabeceraModal } from "./Utils/dataCabeceraModal";

const ModalContacto = () => {

 const navegar = useNavigate()
 const location = useLocation();

 const isActive = (path) => location.pathname === path;

 const handleClickGuardarModal =()=>{
  // logica de guardado
   alert('Empleado Guardado Correctamente')
   navegar('/private/rrhh/administrador')
 }


 const handleClickCerrarModal =()=>{
   navegar(-1)
 }


//  const handleClickNavegarModal=(e, id, nombre)=>{
//       if(id === '1'){
//         navegar('/private/rrhh/administrador/nuevoEmpleado')
//       }
//       else if(id==='2'){
//         navegar('/private/rrhh/administrador/nuevoEmpleado/personal')
//       }
//       else if(id==='3'){
//         navegar('/private/rrhh/administrador/nuevoEmpleado/nomina')
//       }
//       else if(id==='4'){
//         navegar('/private/rrhh/administrador/nuevoEmpleado/competencias')
//       }
//       else if(id==='5'){
//         navegar('/private/rrhh/administrador/nuevoEmpleado/contrato')
//       }
//       else {
//         console.log('as');
        
//       }
//  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm ">
         {/* Contenedor de la modal */}
          <div className="relative w-[80%] h-[80%]  p-6 mx-4 bg-white rounded-lg shadow-xl">
           <header className="w-full h-[10%] grid place-items-center text-lg text-violet-700 font-semibold">
             Nuevo Contacto
           </header>
           <main className="w-full h-[90%]">
              <section className="w-[25%] h-[4%] grid grid-cols-5 gap-x-1">
                 {dataCabeceraModal.map((el)=>{
                  return <Link
                      to={el?.ruta} 
                      className={`flex h-full justify-center items-center rounded-md font-medium ${
                        isActive(el.ruta) 
                          ? 'border-b-2 border-violet-300' 
                          : ''
                      }`}
                    >
                      {el?.nombre}
                    </Link>
                 })}

               </section>
               <div className="w-full h-[88%] ">
                <Outlet />
               </div>
               <div className="w-[98%] h-[5.5%] flex font-semibold justify-end ">
                  <div className="w-[15%] h-full  grid grid-cols-2 gap-x-2">
                      <button onClick={handleClickGuardarModal} className="bg-violet-500 text-white rounded cursor-pointer hover:bg-violet-600">
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

export default ModalContacto