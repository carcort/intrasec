import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import { dataNavbarPublic } from "../Components/Utils/dataNavbarPublic";



const LayoutPublic = () => {


  const entorno = 'publicp'

  return (
    <div className="w-screen h-screen bg-violet-400">
     <div className="w-full h-[4%] flex justify-center">
      <nav className={`w-[70%] h-full flex justify-end`}>
       <Navbar
          data={dataNavbarPublic}  
          //handleClickNavbar={handleClickNavbarPublic}
          entorno={entorno}
       
       />
      </nav>
     </div>
     <main className="w-full h-[96%] bg-gray-50 flex justify-center">
      <div className={`w-[70%] h-full bg-white`}>
       <Outlet />
      </div>
     </main>
    </div>
  )
}

export default LayoutPublic