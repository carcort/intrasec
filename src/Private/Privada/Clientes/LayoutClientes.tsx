import { Outlet } from "react-router"



const LayoutClientes = () => {
  return (
    <div className='bg-green-500 w-full h-full'>
     <header>
      layout clientesss
     </header>
     <div>
      <Outlet/>
     </div>
    </div>
  )
}

export default LayoutClientes