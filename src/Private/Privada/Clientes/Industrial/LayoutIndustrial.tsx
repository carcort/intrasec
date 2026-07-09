
import { Outlet } from 'react-router'

const LayoutIndustrial = () => {
  return (
    <div className=' w-full h-full'>
     <header>
      layout industrial
     </header>
     <div>
      <Outlet />
     </div>
    </div>
  )
}

export default LayoutIndustrial