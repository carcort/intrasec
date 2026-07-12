import { Outlet, useNavigate } from "react-router"
import Sidebar from "../../../Components/Sidebar"
import { dataSidebarIndustrial } from "../../../Components/Utils/dataSIdebar/dataSidebarCliente/dataSidebarConsultor/dataSidebarIndustria/dataSidebarIndustrial"


const Layout_Reclutador = () => {

 const navegar = useNavigate()

  const handleClickAbrirModalNuevoEmpleado =()=>{
          navegar('/private/rrhh/administrador/nuevoEmpleado')
      }

  return (
    <div className="w-full h-full">
     <section className="w-full h-[7%] px-3"> 
            <article className="flex h-full justify-between">
              <div className="flex w-[10%] h-full  items-center">
                <button onClick={handleClickAbrirModalNuevoEmpleado
                } className="bg-red-500 text-white w-[36%] h-[50%] hover:bg-violet-600 cursor-pointer rounded font-semibold">
                  Nuevo-rec
                </button>
                <div className="  w-[50%] h-[60%] grid place-items-center">
                  home-rec
                </div>
                <button className=" text-white w-[14%] h-[60%] grid place-items-center cursor-pointer ">
                  <img className="w-4 h-4" src={'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/config.png'} alt="" />
                </button>
              </div>

              <div className="w-[90%] h-full grid place-items-center">
                  <input className="border border-gray-200 w-[50%] h-[50%] " type="text" />
              </div>
            </article>
            
       </section>

       {/* ACA VA TODO LO QUE VA A CAMBIAR */}
       <main className="w-full h-[88%] flex">
        <aside className="w-[3%] h-full"> 
            <Sidebar
                data= {dataSidebarIndustrial} 
            />
         </aside>
         <div className="w-full h-full grid place-items-center">
              <Outlet />
         </div>
       </main>

    </div>
  )
}

export default Layout_Reclutador