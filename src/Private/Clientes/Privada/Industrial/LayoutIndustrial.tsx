
import { Outlet } from 'react-router'

const LayoutIndustrial = ({usuario}) => {
  return (
    <div className=' w-full h-full'>
     <Outlet />
    </div>
  )
}

export default LayoutIndustrial