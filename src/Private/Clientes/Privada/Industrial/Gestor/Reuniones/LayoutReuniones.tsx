

import { Link, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router'
import { dataFilterReuniones } from './Utils/dataFilterReuniones'
import {  } from "react-router";
import ModalNuevaReunion from './Components/ModalNuevaReunion/ModalNuevaReunion';

const LayoutReuniones = () => {

  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const navegar = useNavigate()

 // const handleClickFiltrarLayoutReuniones =(e, id)=>{
 //    if(id === '1'){

 //    }
 // }

 const handleClickCrearReunion =()=>{
    navegar('/private/clientes/privada/industrial/gestor/reuniones/nuevaReunion')
 }

 

  return (
    <div className="w-full h-full grid place-items-center">

      <div className='w-[97%] h-full '>
         <header className="w-full h-[7%] grid place-items-center">
          Reuniones
        </header>
        <section className="w-[9%] h-[5%] flex items-center text-lg">
            <button onClick={handleClickCrearReunion} className="flex w-[50%] gap-x-2 bg-violet-500 text-white font-semibold  items-center justify-center h-[75%] hover:bg-violet-600 cursor-pointer rounded ">
              <img className="w-4 h-4" src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/mas.png' alt="sd" />
                Reunion
            </button>
        </section>
        <div className="w-full h-[5%]  bg-gray-100 ">
          <section className="w-[8%] h-full  grid grid-cols-2  ">
            
              {dataFilterReuniones.map((el)=>{
                return <Link
                      // onMouseEnter={(e)=>handleClickOnMouse(e, el.id)}
                      // onMouseLeave={(e)=>handleClickLeaveMouse(e, el.id)}
                      to={el?.ruta} 
                      className={`flex h-full justify-center items-center rounded-md  ${
                        isActive(el.ruta) 
                          ? 'underline underline-offset-2 decoration-violet-500' 
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

        <Routes>
         <Route path='nuevaReunion/*' element={<ModalNuevaReunion />}/>
        </Routes>
      </div>

        
    </div>
  )
}

export default LayoutReuniones