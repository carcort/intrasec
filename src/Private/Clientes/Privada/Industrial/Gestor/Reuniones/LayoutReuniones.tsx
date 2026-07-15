

import { Link, Outlet, useLocation } from 'react-router'
import { dataFilterReuniones } from './Utils/dataFilterReuniones'
import {  } from "react-router";

const LayoutReuniones = () => {

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

 // const handleClickFiltrarLayoutReuniones =(e, id)=>{
 //    if(id === '1'){

 //    }
 // }

 

  return (
    <div className="w-full h-full ">
        <header className="w-[95%] h-[7%] grid place-items-center">
          Reuniones
        </header>
        <section className="w-[9%] h-[5%] flex items-center">
            <button className="flex w-[50%] gap-x-2 bg-violet-500 text-white font-semibold  items-center justify-center h-[75%] hover:bg-violet-600 cursor-pointer rounded ">
              <img className="w-4 h-4" src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/mas.png' alt="sd" />
                Reunion
            </button>
        </section>
        <div className="w-full h-[5%]   ">
          <section className="w-[10%] h-full  grid grid-cols-2 ">
              {/* <button className="grid place-items-center hover:underline cursor-pointer">
                Internas
              </button>
              <button className="grid place-items-center hover:underline cursor-pointer"> 
                Externas
              </button> */}
              {dataFilterReuniones.map((el)=>{
                return <Link
                      // onMouseEnter={(e)=>handleClickOnMouse(e, el.id)}
                      // onMouseLeave={(e)=>handleClickLeaveMouse(e, el.id)}
                      to={el?.ruta} 
                      className={`flex h-full justify-center items-center rounded-md  ${
                        isActive(el.ruta) 
                          ? 'underline' 
                          : ''
                      }`}
                    >
                      {el.nombre}
                    </Link>
              })}
          </section>
        </div>
        <main className="w-full h-[83%] grid place-items-center">
          
            <Outlet />
        </main>
    </div>
  )
}

export default LayoutReuniones