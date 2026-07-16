import { Outlet } from "react-router"
import Sidebar from "../../../Components/Sidebar"
import { dataSidebarGerenteClientes } from "./Utils/dataSidebarGerenteClientes"


const LayoutGerenteClientes = ({usuario}) => {
  return (
    <div className="w-full h-full">
     <section className="w-full h-[7%] px-3"> 
            <article className="flex h-full justify-between">
              <div className="flex w-[10%] h-full  items-center font-semibold gap-x-3">
                <button className="flex w-[55%] gap-x-2 bg-violet-500 text-white  items-center justify-center h-[50%] hover:bg-violet-600 cursor-pointer rounded ">
                  <img className="w-4 h-4" src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/mas.png' alt="sd" />
                  Equipo
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
                          {/* <div className="">
                            {usuario?.division}
                          </div> */}
                        </article>

                      </div>
                </section>
          
              </div>

              <div className="w-[67%] h-full flex gap-x-2 items-center">
                  Buscar: <input className="border border-gray-200 w-[70%] h-[50%] " type="text" />
              </div>
        

              <div className="w-[13%] h-full  flex">
                {/* {dataCabeceraFiltros.map((el)=>{
                  return <button className="w-[20%] grid place-items-center cursor-pointer">
                    <img className="w-5 h-5" src={el.icono} alt="sdds" />
                  </button>
                })} */}
              </div>
            </article>
            
       </section>

       {/* ACA VA TODO LO QUE VA A CAMBIAR */}
       <main className="w-full h-[88%] flex">
        <aside className="w-[3%] h-full"> 
            <Sidebar
                data= {dataSidebarGerenteClientes} 
            />
         </aside>
         <div className="w-full h-full grid place-items-center">
              <Outlet />
         </div>
       </main>
    </div>
  )
}

export default LayoutGerenteClientes