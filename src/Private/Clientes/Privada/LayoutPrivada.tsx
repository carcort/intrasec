
import { Outlet } from 'react-router'

const LayoutPrivada = () => {
  return (
    <div className=' w-full h-full'>
     <header>
      layout privada
     </header>
     <div>
      <Outlet />
     </div>
    </div>
  )
}

export default LayoutPrivada