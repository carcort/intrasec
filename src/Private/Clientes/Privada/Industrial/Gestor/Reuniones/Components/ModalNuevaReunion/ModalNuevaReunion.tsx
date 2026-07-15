import FormNuevaReunion from "./FormNuevaReunion";


const ModalNuevaReunion = () => {

//  const navegar = useNavigate()
//  const location = useLocation();

 //const isActive = (path) => location.pathname === path;

//  const handleClickGuardarModal =()=>{
//   // logica de guardado
//    alert('Empleado Guardado Correctamente')
//    navegar('/private/rrhh/administrador')
//  }


//  const handleClickCerrarModal =()=>{
//    navegar('/private/rrhh/administrador')
//  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm ">
         {/* Contenedor de la modal */}
          <div className="relative w-[80%] h-[80%]  p-6 mx-4 bg-white rounded-lg shadow-xl">
           <header className="w-full h-[10%] grid place-items-center text-lg text-violet-700 font-semibold">
             Nueva Reunion
           </header>
           <main className="w-full h-[90%] flex justify-center">
              
               
               <FormNuevaReunion />
           </main>
          </div>
     </div>
  )
}

export default ModalNuevaReunion