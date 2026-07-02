import Navbar from "../Components/Navbar"
import { dataNavbarPrivate } from "../Components/Utils/dataNavbarPrivate"
import { Outlet } from "react-router";

const LayoutPrivate = () => {


 const entorno = 'privado'
 
  return (
    <div className="w-screen h-screen ">
       <nav className="w-full h-[4%] bg-violet-400 flex justify-end">
            <Navbar
              data={dataNavbarPrivate}  
              //handleClickNavbar={handleClickNavbarPrivate}
              entorno={entorno}

            />
       </nav>

       {/* ACA VA TODO LO QUE VA A CAMBIAR */}
       <main className="w-full h-[96%] flex">
         <Outlet />
       </main>



       
    
    </div>
  )
}

export default LayoutPrivate