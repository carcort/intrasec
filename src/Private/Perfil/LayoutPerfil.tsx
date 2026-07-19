import { Link, Outlet, useNavigate, useLocation } from "react-router"
import { dataCabeceraPerfil } from "./Utils/dataCabeceraPerfil"



const LayoutPerfil = ({usuario}) => {

    const navegar = useNavigate()
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const handleClickBotonLaboral =()=>{
        navegar('/private/perfil/')
    }

    const handleClickBotonPersonal=()=>{
        navegar('/private/perfil/personal')
    }
    const handleClickBotonNomina =()=>{
        navegar('/private/perfil/nomina')
    }

    const handleClickBotonCompetencias=()=>{
        navegar('/private/perfil/competencias')
    }



    const handleClickVolverPerfil =()=>{
        navegar(-1)
    }

  return (
    <div className="w-full h-full grid place-items-center ">
        
       <section className="w-[95%] h-[91%] ">
           <div className="w-full h-[20%] flex">
               <div className="w-[10%] grid place-items-center">
                <img className="w-40 h-40" src={usuario.icono} alt="sd" />
               </div>
               <section className="w-[90%]">
                  
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


           <div className="w-full h-[5%] flex bg-gray-100 gap-x-10 pl-4">
            {dataCabeceraPerfil.map((el)=>{
                return <Link
                    
                      to={el?.ruta} 
                      className={`flex h-full justify-center items-center  ${
                        isActive(el.ruta) 
                          ? 'underline underline-offset-4 decoration-violet-500' 
                          : ''
                      }`}
                    >
                      {el.nombre}
                    </Link>
            })}
           </div>

           <div className="w-full h-[71%] ">
            <Outlet />
           </div>

           <div className="w-full h-[4%]  flex justify-end">
            <button onClick={handleClickVolverPerfil} className="w-[5%] h-full bg-gray-700 text-white cursor-pointer hover:bg-black font-semibold">
                Volver
            </button>
           </div>
       </section>
    </div>
  )
}

export default LayoutPerfil