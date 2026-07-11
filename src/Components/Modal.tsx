import { Outlet, useNavigate } from "react-router";
import { dataCabeceraModal } from "./Utils/dataCabeceraModal";

const Modal = () => {

 const navegar = useNavigate()

 const handleClickGuardarModal =()=>{
  // logica de guardado
   alert('Empleado Guardado Correctamente')
   navegar('/private/rrhh/administrador')
 }


 const handleClickCerrarModal =()=>{
   navegar('/private/rrhh/administrador')
 }


 const handleClickNavegarModal=(e, id, nombre)=>{
      if(id === '1'){
        navegar('/private/rrhh/administrador/nuevoEmpleado')
      }
      else if(id==='2'){
        navegar('/private/rrhh/administrador/nuevoEmpleado/personal')
      }
      else if(id==='3'){
        navegar('/private/rrhh/administrador/nuevoEmpleado/nomina')
      }
      else if(id==='4'){
        navegar('/private/rrhh/administrador/nuevoEmpleado/competencias')
      }
      else if(id==='5'){
        navegar('/private/rrhh/administrador/nuevoEmpleado/contrato')
      }
      else {
        console.log('as');
        
      }
 }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm ">
         {/* Contenedor de la modal */}
          <div className="relative w-[80%] h-[80%]  p-6 mx-4 bg-white rounded-lg shadow-xl">
           <header className="w-full h-[10%] grid place-items-center text-lg">
             Nuevo Empleado
           </header>
           <main className="w-full h-[90%]">
              <section className="w-[25%] h-[6%] grid grid-cols-5 gap-x-1">
                 {dataCabeceraModal.map((el)=>{
                  return <button className="cursor-pointer hover:border-b hover:border-violet-500" onClick={(e)=>handleClickNavegarModal(e, el.id, el.nombre)}>
                    {el.nombre}
                  </button>
                 })}

               </section>
               <div className="w-full h-[88%] ">
                <Outlet />
               </div>
               <div className="w-[98%] h-[6%] flex font-semibold justify-end ">
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

export default Modal