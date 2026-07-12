
import { Outlet } from 'react-router'

const LayoutComercial = () => {
  return (
    <div className=' w-full h-full'>
     <header>
      layout comercial
     </header>
     <div>
      <Outlet />
     </div>
    </div>
  )
}

export default LayoutComercial