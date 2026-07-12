import { Outlet } from "react-router"
import Sidebar from "../../../../../Components/Sidebar"
import { dataCabeceraFiltros } from "../../../../Utils/dataCabeceraFiltros"
import { dataSidebarIndustrial } from "../../../../../Components/Utils/dataSIdebar/dataSidebarCliente/dataSidebarConsultor/dataSidebarIndustria/dataSidebarIndustrial"
import { dataSidebarGestorIndustrial } from "./Utils/dataSidebarGestorIndustrial"


const LayoutGestor = () => {


  const handleClickAbrirModalNuevoContacto =()=>{
      console.log('nuevooo');
      
  } 

  return (
    <div className="w-full h-full ">
     <section className="w-full h-[7%] px-3"> 
            <article className="flex h-full justify-between">
              <div className="flex w-[11%] h-full  items-center">
                <button onClick={handleClickAbrirModalNuevoContacto} className="flex gap-x-2 bg-violet-500 text-white w-[50%] items-center justify-center h-[50%] hover:bg-violet-600 cursor-pointer rounded font-semibold">
                  <img className="w-4 h-4" src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/mas.png' alt="sd" />
                  Contacto
                </button>
                <div className="  w-[50%] h-[60%] grid place-items-center">
                  Contactos
                </div>
                <button className=" text-white w-[14%] h-[60%] grid place-items-center cursor-pointer ">
                  <img className="w-4 h-4" src={'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/config.png'} alt="" />
                </button>
              </div>

              <div className="w-[67%] h-full grid place-items-center">
                  <input className="border border-gray-200 w-[50%] h-[50%] " type="text" />
              </div>
        

              <div className="w-[13%] h-full  flex">
                {dataCabeceraFiltros.map((el)=>{
                  return <button className="w-[20%] grid place-items-center cursor-pointer">
                    <img className="w-5 h-5" src={el.icono} alt="sdds" />
                  </button>
                })}
              </div>
            </article>
            
       </section>

       {/* ACA VA TODO LO QUE VA A CAMBIAR */}
       <main className="w-full h-[88%] flex">
        <aside className="w-[3%] h-full"> 
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