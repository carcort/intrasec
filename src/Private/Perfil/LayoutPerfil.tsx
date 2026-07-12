import { Outlet, useNavigate } from "react-router"



const LayoutPerfil = ({usuario}) => {

    const navegar = useNavigate()


    const handleClickBotonLaboral =()=>{
        navegar('/private/perfil/')
    }

    const handleClickBotonPersonal=()=>{
        navegar('/private/perfil/personal')
    }



    const handleClickVolverPerfil =()=>{
        navegar(-1)
    }

  return (
    <div className="w-full h-full grid place-items-center ">
        
       <section className="w-[95%] h-[90%] ">
           <div className="w-full h-[25%] flex">
               <div className="w-[15%] grid place-items-center">
                <img className="w-40 h-40" src={usuario.icono} alt="sd" />
               </div>
               <section className="w-[85%]">
                  
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

           <div className="w-full h-[64%] ">
            <Outlet />
           </div>

           <div className="w-full h-[5%]  flex justify-end">
            <button onClick={handleClickVolverPerfil} className="w-[6%] h-full bg-gray-700 text-white cursor-pointer hover:bg-black font-semibold">
                Volver
            </button>
           </div>
       </section>
    </div>
  )
}

export default LayoutPerfil