
import Navbar from "../Components/Navbar"
import { dataNavbarPrivate } from "../Components/Utils/dataNavbarPrivate"
import { Navigate, Outlet } from "react-router";


const LayoutPrivate = ({usuario}) => {

  //const [dataNavbar, setDataNavbar] = useState([{}])

  const {primer_nombre, estaAutenticado, gerencia} = usuario


 const entorno = 'privado'

 const handleClickNavbarPrivate =()=>{
  console.log('entorno privado');
  
 }


 //console.log(`${primer_nombre} desde el layout privadooo`);



 
 
  return (
    estaAutenticado ? 
    <div className="w-screen h-screen ">
       <nav className="w-full h-[5%] bg-violet-500 flex justify-end">
            <Navbar
              data={dataNavbarPrivate}  
              handleClickNavbar={handleClickNavbarPrivate}
              entorno={entorno}
              gerencia={gerencia}
              

            />
            
       </nav>

       <div className="w-full h-[95%]">
        <Outlet />
       </div>
       



       
    
    </div>:  <Navigate to={'/login'} replace />
  )
}

export default LayoutPrivate