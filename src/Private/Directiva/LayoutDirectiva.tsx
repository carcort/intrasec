import { Outlet } from "react-router"


const LayoutDirectiva = () => {
  return (
    <div className=' w-full h-full'>
     <header>
      layout directiva
     </header>
     <div>
      <Outlet/>
     </div>
    </div>
  )
}

export default LayoutDirectiva