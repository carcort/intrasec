

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
         <header className="w-full h-[7%] grid place-items-center font-semibold text-gray-700">
          Reuniones
        </header>


        <div className='w-full h-full  gap-x-2 '>

            <div className='w-full h-[5%] flex'>
              <section className="w-[5%] h-full flex items-center  ">
                <button onClick={handleClickCrearReunion} className="flex w-full gap-x-2 bg-violet-500 text-white font-semibold   items-center justify-center h-[75%] hover:bg-violet-600 cursor-pointer rounded ">
                  <img className="w-4 h-4" src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/mas.png' alt="sd" />
                    Reunion
                </button>
              </section>
            <div className="w-[95%] h-full ">
              <section className="w-[8%] h-full  grid grid-cols-2  ">
                
                  {dataFilterReuniones.map((el)=>{
                    return <Link
                          // onMouseEnter={(e)=>handleClickOnMouse(e, el.id)}
                          // onMouseLeave={(e)=>handleClickLeaveMouse(e, el.id)}
                          to={el?.ruta} 
                          className={`flex h-full justify-center items-center rounded-md  ${
                            isActive(el.ruta) 
                              ? 'underline underline-offset-4 decoration-violet-500' 
                              : ''
                          }`}
                        >
                          {el.nombre}
                        </Link>
                  })}
              </section>
            </div>
            </div>

            <main className="w-full h-[90%] grid place-items-center">
          
                  <Outlet />
              </main>

        </div>

        
        

        <Routes>
         <Route path='nuevaReunion/*' element={<ModalNuevaReunion />}/>
        </Routes>
      </div>

        
    </div>
  )
}

export default LayoutReuniones