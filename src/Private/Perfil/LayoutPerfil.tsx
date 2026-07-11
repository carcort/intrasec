import { Outlet, useNavigate } from "react-router"
import Sidebar from "../../Components/Sidebar"
import { dataSidebarIndustrial } from "../../Components/Utils/dataSIdebar/dataSidebarCliente/dataSidebarConsultor/dataSidebarIndustria/dataSidebarIndustrial"


const LayoutPerfil = ({usuario}) => {

    const navegar = useNavigate()


    const handleClickBotonLaboral =()=>{
        navegar('/private/perfil/')
    }

    const handleClickBotonPersonal=()=>{
        navegar('/private/perfil/personal')
    }

  return (
    <div className="w-full h-full flex">
        <aside className="w-[3%] h-[90%]">
            <Sidebar 
                data= {dataSidebarIndustrial} 
            />
        </aside>
       <section className="w-[95%] h-[95%] ">
           <div className="w-full h-[25%] flex">
               <div className="w-[20%] grid place-items-center">
                <img className="w-40 h-40" src={usuario.icono} alt="sd" />
               </div>
               <section className="w-[80%]">
                  
                 <section className="flex gap-x-2 text-2xl  h-[40%] items-center">
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
                 <div className="w-full h-[20%] flex items-center">
                     {usuario.email_laboral}
                 </div>
                 <div className="w-full h-[20%] flex items-center">
                     {usuario.telefono_laboral}
                 </div>

               </section>

           </div>


           <div className="w-full h-[6%] flex bg-gray-100 gap-x-1">
            <button onClick={handleClickBotonLaboral} className="w-[5%] h-full cursor-pointer">
             Laboral
            </button>
            <button onClick={handleClickBotonPersonal} className="w-[5%] h-full cursor-pointer">
             Personal
            </button>
           </div>

           <div className="w-full h-[69%] ">
            <Outlet />
           </div>
       </section>
    </div>
  )
}

export default LayoutPerfil