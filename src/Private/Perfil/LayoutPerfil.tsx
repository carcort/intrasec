import { Outlet } from "react-router"


const LayoutPerfil = ({usuario}) => {
  return (
    <div className="w-full h-full grid place-items-center">
       <section className="w-[95%] h-[92%] bg-yellow-400">
           <div className="w-full h-[30%] flex">
               <div className="w-[30%] grid place-items-center">
                <img className="w-40 h-40" src={usuario.icono} alt="sd" />
               </div>
               <section className="w-[70%]">
                  
                 <section className="flex gap-x-2 text-xl h-[40%]">
                    <div>
                     {usuario.primer_nombre}
                    </div>
                    <div>
                        {usuario.apellido_paterno}
                    </div>
                    <div>
                        {usuario.apellido_materno}
                    </div>
                 </section>
                 <div className="w-full h-[20%]">
                     {usuario.email_laboral}
                 </div>
                 <div className="w-full h-[20%]">
                     {usuario.telefono_laboral}
                 </div>

               </section>

           </div>


           <div className="w-full h-[10%] flex bg-red-400 gap-x-1">
            <button className="w-[7%] h-full">
             Laboral
            </button>
            <button className="w-[7%] h-full">
             Personal
            </button>
           </div>

           <div className="w-full h-[60%] bg-cyan-400">
            <Outlet />
           </div>
       </section>
    </div>
  )
}

export default LayoutPerfil