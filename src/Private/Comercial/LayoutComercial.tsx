import { Outlet } from "react-router"

const LayoutComercial = () => {

  return (

    <div className="w-full h-full">
        <div className="w-full h-full grid place-items-center">
              <Outlet />
         </div>
    </div>
  )
}

export default LayoutComercial