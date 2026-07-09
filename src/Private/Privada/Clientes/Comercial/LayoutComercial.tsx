
import { Outlet } from 'react-router'

const LayoutComercial = () => {
  return (
    <div className='bg-green-500 w-full h-full'>
     <header>
      otrass weaaaaaaaaaaaaa del comercialllll
     </header>
     <div>
      <Outlet />
     </div>
    </div>
  )
}

export default LayoutComercial