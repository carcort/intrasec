
import { Outlet } from 'react-router'

const LayoutConsultor= () => {
  return (
    <div className=' w-full h-full'>
     <header>
      layout consultor
     </header>
     <div>
      <Outlet />
     </div>
    </div>
  )
}

export default LayoutConsultor