
import { Outlet, useNavigate } from "react-router"
import Sidebar from "../../../Components/Sidebar"
//import { dataSidebarIndustrial } from "../../../Components/Utils/dataSIdebar/dataSidebarCliente/dataSidebarConsultor/dataSidebarIndustria/dataSidebarIndustrial"
import { dataSidebarAdministrador_Rrhh } from "../Utils/dataSidebarAdministrador_Rrhh"
//import { useState } from "react"


const Layout_Administrador_Rrhh = () => {

  //const [titulo, setTitulo] = useState('Empleados')

 const navegar = useNavigate()

 const handleClickAbrirModalNuevoEmpleado =()=>{
          navegar('/private/rrhh/administrador/empleados/nuevoEmpleado')
      }

  // const handleClickSidebarAdministrador_Rrhh =(e, id, nombre, ruta)=>{
  //     if(id==='1'){
         
  //         navegar('/private/rrhh/administrador/empleados')
  //     }
  //     else if(id === '2'){
          
  //         navegar('/private/rrhh/administrador/empleados')
  //     }
  //     else if(id === '3'){
          
  //         navegar('/private/rrhh/administrador/empleados')
  //     }
  //     else if(id === '4'){
          
  //         navegar('/private/rrhh/administrador/vacaciones')
  //     }
  //     else if(id === '5'){
          
  //         navegar('/private/rrhh/administrador/bonos')
  //     }
  //     else if(id === '6'){
          
  //         navegar('/private/rrhh/administrador/Evaluaciones')
  //     }
  //     else {
  //       console.log('otra');
        
  //     }
  // }


  // const logicaTitulo = ()=>{
  //   if(titulo === 'Empleados'){
  //     setTitulo('Empeados')
  //   }
  // }

  return (
    <div className="w-full h-full">
     <section className="w-full h-[7%] px-3"> 
            <article className="flex h-full justify-between">
              <div className="flex w-[10%] h-full  items-center">
                <button onClick={handleClickAbrirModalNuevoEmpleado} className="flex gap-x-2 bg-violet-500 text-white w-[50%] items-center justify-center h-[50%] hover:bg-violet-600 cursor-pointer rounded font-semibold">
                  <img className="w-4 h-4" src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/mas.png' alt="sd" />
                  Empleado
                </button>
                <div className="  w-[50%] h-[60%] grid place-items-center">
                  Vacaciones
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
                data= {dataSidebarAdministrador_Rrhh} 
                
            />
         </aside>
         <div className="w-full h-full grid place-items-center">
              <Outlet />
         </div>
       </main>

    </div>
  )
}

export default Layout_Administrador_Rrhh