
import { Outlet } from 'react-router'

const LayoutConsultor= () => {
  return (
    <div className='bg-green-500 w-full h-full'>
     <header>
      otrass weaaaaaaaaaaaaa ---consultorrr
     </header>
     <div>
      <Outlet />
     </div>
    </div>
  )
}

export default LayoutConsultor