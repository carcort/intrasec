import { Outlet } from "react-router"
// import { dataCabeceraFiltros } from "../Utils/dataCabeceraFiltros"
// import Sidebar from "../../Components/Sidebar"
// import { dataSidebarIndustrial } from "../../Components/Utils/dataSIdebar/dataSidebarCliente/dataSidebarConsultor/dataSidebarIndustria/dataSidebarIndustrial"



const LayoutClientes = () => {
  return (

    <div className="w-full h-full">
        <Outlet />
    </div>
  )
}

export default LayoutClientes