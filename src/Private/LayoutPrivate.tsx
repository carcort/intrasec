import Navbar from "../Components/Navbar"
import { dataNavbarPrivate } from "../Components/Utils/dataNavbarPrivate"
import { Outlet } from "react-router";
import { dataCabeceraFiltros } from "./Utils/dataCabeceraFiltros";
import Sidebar from "../Components/Sidebar";
import { dataSidebarIndustrial } from "../Components/Utils/dataSIdebar/dataSidebarCliente/dataSidebarConsultor/dataSidebarIndustria/dataSidebarIndustrial";

const LayoutPrivate = () => {


 const entorno = 'privado'

 const handleClickNavbarPrivate =()=>{
  console.log('entorno privado');
  
 }
 
  return (
    <div className="w-screen h-screen ">
       <nav className="w-full h-[5%] bg-violet-500 flex justify-end">
            <Navbar
              data={dataNavbarPrivate}  
              handleClickNavbar={handleClickNavbarPrivate}
              entorno={entorno}

            />
       </nav>
       <section className="w-full h-[7%] px-3"> 
            <article className="flex h-full justify-between">
              <div className="flex w-[11%] h-full  items-center">
                <button className="bg-violet-500 text-white w-[36%] h-[50%] hover:bg-violet-600 cursor-pointer rounded font-semibold">
                  Nuevo
                </button>
                <div className="  w-[50%] h-[60%] grid place-items-center">
                  Empleados
                </div>
                <button className=" text-white w-[14%] h-[60%] grid place-items-center cursor-pointer ">
                  <img className="w-4 h-4" src={'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/config.png'} alt="" />
                </button>
              </div>

              <div className="w-[67%] h-full grid place-items-center">
                  <input className="border border-gray-200 w-[50%] h-[50%] " type="text" />
              </div>

              <div className="flex w-[10%] items-center">
                  <div className="w-[40%] f-[50%]">
                    1-15 /55
                  </div>
                  <div className="w-[40%] h-[50%] flex">
                    <button className="w-[50%] bg-gray-100 cursor-pointer hover:bg-gray-200">
                      {'<'}
                    </button>
                    <button className="w-[50%] bg-gray-100 cursor-pointer  hover:bg-gray-200">
                      {'>'}
                    </button>
                  </div>
              </div>

              <div className="w-[13%] h-full  flex">
                {dataCabeceraFiltros.map((el)=>{
                  return <button className="w-[20%] grid place-items-center cursor-pointer">
                    <img className="w-4 h-4" src={el.icono} alt="sdds" />
                  </button>
                })}
              </div>
            </article>
            
       </section>

       {/* ACA VA TODO LO QUE VA A CAMBIAR */}
       <main className="w-full h-[88%] flex">
        <aside className="w-[13%] h-full"> 
            <Sidebar
                data= {dataSidebarIndustrial} 
            />
         </aside>
         <Outlet />
       </main>



       
    
    </div>
  )
}

export default LayoutPrivate