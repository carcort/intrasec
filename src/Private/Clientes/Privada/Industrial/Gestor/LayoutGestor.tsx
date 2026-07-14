import { Outlet, useNavigate } from "react-router"
import Sidebar from "../../../../../Components/Sidebar"

import { dataSidebarGestorIndustrial } from "./Utils/dataSidebarGestorIndustrial"



const LayoutGestor = ({usuario}) => {

  const navegar = useNavigate()


  const handleClickAbrirModalNuevoContacto =()=>{
      navegar('/private/clientes/privada/industrial/gestor/contactos/crearContacto')
      
  } 

  return (
    <div className="w-[97%] h-[97%]">
     <section className="w-full h-[7%] px-3"> 
            <article className="flex h-full justify-between gap-x-10">
              <div className="flex w-[10%] h-full  items-center font-semibold gap-x-3">
                <button onClick={handleClickAbrirModalNuevoContacto} className="flex w-[50%] gap-x-2 bg-violet-500 text-white  items-center justify-center h-[50%] hover:bg-violet-600 cursor-pointer rounded ">
                  <img className="w-4 h-4" src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/mas.png' alt="sd" />
                  Contacto
                </button>

                <section className=" w-[70%] h-[50%] flex gap-x-3">
                      <article className=" flex items-center justify-center">
                        <img className="w-7 h-7" src={usuario.icono} alt="s" />
                      </article> 
                      <div className="w-[75%]  h-[50%]  flex-col    text-violet-600 ">
                        
                        <article className="w-full flex justify-center gap-x-1">
                          <div className="">
                            {usuario?.primer_nombre}
                          </div> 
                          <div className="">
                            {usuario?.apellido_paterno}
                          </div>
                        </article>
                        <article className="w-full flex justify-center gap-x-1 text-[10px] text-gray-700 ">
                          <div className="">
                            {usuario?.cargo}
                          </div> 
                          <div className="">
                            {usuario?.division}
                          </div>
                        </article>

                      </div>
                </section>
          
              </div>

              <div className="w-[90%] h-full grid place-items-center gap-x-3">
                  <input className="border border-gray-200 w-[50%] h-[50%] " type="text" />
              </div>
      
            </article>
            
       </section>

       {/* ACA VA TODO LO QUE VA A CAMBIAR */}
       <main className="w-full h-[88%] flex">
        <aside className="w-[3.5%] h-full"> 
            <Sidebar
                data= {dataSidebarGestorIndustrial} 
            />
         </aside>
         <div className="w-full h-full grid place-items-center">
              <Outlet />
         </div>
       </main>


       
    </div>
  )
}

export default LayoutGestor