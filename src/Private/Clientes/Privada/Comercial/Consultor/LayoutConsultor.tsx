
import { Outlet } from 'react-router'

const LayoutConsultor= () => {
  return (
    <div className=' w-full h-full'>
     <header>
      layout consultor comercial
     </header>
     <div>
      <Outlet />
     </div>
    </div>
  )
}

export default LayoutConsultor