
import { Outlet } from 'react-router'

const LayoutPrivada = () => {
  return (
    <div className='bg-green-500 w-full h-full'>
     <header>
      privada o publica
     </header>
     <div>
      <Outlet />
     </div>
    </div>
  )
}

export default LayoutPrivada