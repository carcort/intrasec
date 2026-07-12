import { Outlet, useNavigate } from "react-router"
//import { dataCabeceraFiltros } from "../Utils/dataCabeceraFiltros"
import Sidebar from "../../Components/Sidebar"
import { dataSidebarIndustrial } from "../../Components/Utils/dataSIdebar/dataSidebarCliente/dataSidebarConsultor/dataSidebarIndustria/dataSidebarIndustrial"



const LayoutRrhh = () => {

  // const navegar = useNavigate()


  //     const handleClickAbrirModalNuevoEmpleado =()=>{
  //         navegar('/private/rrhh/administrador/nuevoEmpleado')
  //     }


  return (

    <div className="w-full h-full">
        <div className="w-full h-full grid place-items-center">
              <Outlet />
         </div>
    </div>
  )
}

export default LayoutRrhh