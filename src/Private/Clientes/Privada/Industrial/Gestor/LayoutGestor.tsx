import { Outlet } from "react-router"
import Sidebar from "../../../../../Components/Sidebar"

import { dataSidebarGestorIndustrial } from "./Utils/dataSidebarGestorIndustrial"


const LayoutGestor = ({usuario}) => {


  const handleClickAbrirModalNuevoContacto =()=>{
      console.log('nuevooo');
      
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

                <section className=" w-[50%] h-[50%] flex gap-x-3">
                      <article className=" flex items-center justify-center">
                        <img className="w-7 h-7" src={usuario.icono} alt="s" />
                      </article> 
                      <div className="w-[60%]  h-[50%]  flex-col    text-violet-600 ">
                        
                        <article className="w-full flex justify-center gap-x-1">
                          <div className="">
                            {usuario.primer_nombre}
                          </div> 
                          <div className="">
                            {usuario.apellido_paterno}
                          </div>
                        </article>
                        <div className=" w-full  h-[50%] grid justify-center text-gray-700 text-[10px]">
                          {usuario.cargo}
                        </div>

                      </div>
                </section>
                {/* <button className=" text-white  h-[60%] grid place-items-center cursor-pointer ">
                  <img className="w-4 h-4" src={'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/config.png'} alt="" />
                </button> */}
              </div>

              <div className="w-[90%] h-full grid place-items-center gap-x-3">
                  <input className="border border-gray-200 w-[50%] h-[50%] " type="text" />
              </div>
        

              {/* <div className="w-[13%] h-full  flex">
                {dataCabeceraFiltros.map((el)=>{
                  return <button className="w-[20%] grid place-items-center cursor-pointer">
                    <img className="w-5 h-5" src={el.icono} alt="sdds" />
                  </button>
                })}
              </div> */}
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